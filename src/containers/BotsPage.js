import React from "react";
import BotsCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSearch from '../components/BotSearch'

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allBots: [],
      showDetails: false,
      selectBot: 0,
      query: ''
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setBots(bots))
      .then(bots => this.setState({
        allBots: bots
      }))
  }

  setBots = (bots) => {
    return bots.map(bot => {
      bot.owned = false
      return bot
    })
  }

  addBot = (selectBot) => {
    let x = this.state.allBots.map(bot => {
      if(bot.id === selectBot.id){
        bot.owned = !bot.owned
        return bot
      }else {
        return bot
      }
    })
    this.setState({
      allBots: x
    })
  }

  filterFreeBots = () => {
    let freeBots = []
    this.state.allBots.map(bot => {
      if(bot.owned === false){
        freeBots.push(bot)
      }
    })
    return freeBots
  }

  filterOwnedBots = () => {
    let ownedBots = []
    this.state.allBots.map(bot => {
      if(bot.owned === true){
        ownedBots.push(bot)
      }
    })
    return ownedBots
  }

  handleSearch = (event, query) => {
    this.setState({
      query: query
    })
  }


  
  render() {
    console.log(this.state)
    return (
      <div>
        <BotSearch handleSearch={this.handleSearch}/>
        <br></br>
        <BotsCollection bots={this.filterFreeBots()} addBot={this.addBot}/>
        <YourBotArmy bots={this.filterOwnedBots()} addBot={this.addBot}/>
      </div>
    );
  }

}

export default BotsPage;
