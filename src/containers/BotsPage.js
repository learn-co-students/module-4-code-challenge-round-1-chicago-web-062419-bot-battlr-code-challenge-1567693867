import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const botsURL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: []
  };

  componentDidMount() {
    this.fetchBots();
  }

  fetchBots = () => {
    fetch(botsURL)
      .then(res => res.json())
      .then(allBots => this.setState({ allBots }));
  };

  addToArmy = e => {
    const target = e.target;
    const targetID = Number(target.parentElement.id);
    const foundBot = this.state.allBots.find(bot => bot.id === targetID);
    foundBot.myArmy = true;
    this.setState(prevState => ({
      [prevState.allBots[targetID - 1]]: foundBot
    }));
  };

  removeFromArmy = e => {
    const target = e.target;
    const targetID = Number(target.parentElement.id);
    const foundBot = this.state.allBots.find(bot => bot.id === targetID);
    foundBot.myArmy = false;
    this.setState(prevState => ({
      [prevState.allBots[targetID - 1]]: foundBot
    }));
  };

  render() {
    const { allBots } = this.state;
    const filterMyArmy = allBots.filter(bot => bot.myArmy);
    return (
      <div>
        <YourBotArmy
          filterMyArmy={filterMyArmy}
          removeFromArmy={this.removeFromArmy}
        />
        <BotCollection allBots={allBots} addToArmy={this.addToArmy} />
      </div>
    );
  }
}

export default BotsPage;
