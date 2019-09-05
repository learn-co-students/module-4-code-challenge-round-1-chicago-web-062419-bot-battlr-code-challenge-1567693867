import React from "react";

import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state={
      bots:[],
      selected: []
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
        })
     }
    )
  }

 addBot = (el) => {
   this.setState({
     selected: el
   })
 }

  render() {
    
    return (
      <div>
        <BotCollection addBot={this.addBot} allBots={this.state.bots}/>
        <YourBotArmy yourBots={this.state.selected} />
      </div>
    );
  }

}

export default BotsPage;
