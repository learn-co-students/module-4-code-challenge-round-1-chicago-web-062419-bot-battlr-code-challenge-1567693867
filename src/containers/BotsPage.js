import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      army: []
    };
  }

  addBotstoArmy;

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(botsData => this.setState({ bots: botsData }));
  }

  render() {
    console.log(this.state.bots);
    return (
      <div>
        <YourBotArmy bots={this.state.army} />
        <BotCollection bots={this.state.bots} />
      </div>
    );
  }
}

export default BotsPage;
