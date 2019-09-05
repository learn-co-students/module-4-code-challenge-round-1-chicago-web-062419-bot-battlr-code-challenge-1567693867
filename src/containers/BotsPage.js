import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
import { stat } from "fs";


class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      allBots: [],
      army: []
    }
  }

  //Fetches bots
  componentDidMount(){
    this.fetchBots()
  }

  enlistBot = (bot) => {
    let addBot = this.state.allBots.find( robot => robot.id === bot.id )
    if(this.state.army.includes(bot)){
      return;
    } else {
      this.setState({
        army: [...this.state.army, addBot]
      })
    }
  }

  removeBot = (bot) => {
    let removeBot = this.state.army.find( robot => robot.id === bot.id)
    this.setState({
      army: this.state.army.filter( bot => bot !== removeBot)
    })
  }

  fetchBots = () =>{
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({allBots: bots}))
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} removeBot={this.removeBot} />
        <BotCollection allBots={this.state.allBots} enlistBot={this.enlistBot}/>

      </div>
    );
  }

}

export default BotsPage;
