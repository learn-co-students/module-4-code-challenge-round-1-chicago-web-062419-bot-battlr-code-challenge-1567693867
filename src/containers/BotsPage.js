import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"
// import { stat } from "fs";


class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      allBots: [],
      army: [],
      viewSpecBot: undefined
    }
  }

  //Fetches bots
  componentDidMount(){
    this.fetchBots()
  }

  setViewSpecs = (bot) => {
    let viewSpecBot = this.state.allBots.find( robot => robot.id === bot.id)
    this.setState({viewSpecBot: viewSpecBot})
  }

  clearViewSpec = () => {
    this.setState({viewSpecBot: undefined})
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
        {this.state.viewSpecBot ? 
          <BotSpecs bot={this.state.viewSpecBot} enlistBot={this.enlistBot} clearViewSpec={this.clearViewSpec} /> 
          : 
          <BotCollection allBots={this.state.allBots} enlistBot={this.enlistBot} setViewSpecs={this.setViewSpecs} />
        }
        
      </div>
    );
  }

}

export default BotsPage;
