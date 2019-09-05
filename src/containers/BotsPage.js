import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"
import Filter from "../components/Filter"
// import { stat } from "fs";


class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      allBots: [],
      army: [],
      viewSpecBot: undefined,
      filter: "All",
      filteredBots:[]
    }
  }

  //FilterCollection
  setFilter = (value) =>{
    this.setState({
      filter: value
    })
    if(this.state.filter === "All"){
      this.setState({filteredBots: []})
    } else {
      return this.filterBots(value)
    }
    // return this.state.filter ? this.filterBots(value) : null
  }

  filterBots = (value) => {
    this.setState({filteredBots: this.state.allBots.filter(bot => bot.bot_class === value)})
  }

  //Fetches bots
  componentDidMount(){
    this.fetchBots()
  }

  //Sets state of bot currently being looked at
  setViewSpecs = (bot) => {
    let viewSpecBot = this.state.allBots.find( robot => robot.id === bot.id)
    this.setState({viewSpecBot: viewSpecBot})
  }

  //Clears bot currently being viewed 
  clearViewSpec = () => {
    this.setState({viewSpecBot: undefined})
  }

  //Enlists bot in Army
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

  //Removes bot from army (onClick) --currently disabled for refactor
  removeBot = (bot) => {
    let removeBot = this.state.army.find( robot => robot.id === bot.id)
    this.setState({
      army: this.state.army.filter( bot => bot !== removeBot)
    })
  }

  //Fetches all bots
  fetchBots = () =>{
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({allBots: bots}))
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} removeBot={this.removeBot} />
        <h1>Bot Collection</h1>
        {/* Filter works! You have to sometimes reselect the filter though!*/}
        <Filter setFilter={this.setFilter} filterBots={this.filterBots} reset={this.fetchBots}/>
        <br></br>
        {this.state.viewSpecBot ? 
          <BotSpecs bot={this.state.viewSpecBot} enlistBot={this.enlistBot} clearViewSpec={this.clearViewSpec} /> 
          : 
          <BotCollection allBots={this.state.filteredBots.length > 0 ? this.state.filteredBots : this.state.allBots} enlistBot={this.enlistBot} setViewSpecs={this.setViewSpecs} />
        }
        
      </div>
    );
  }

}

export default BotsPage;
