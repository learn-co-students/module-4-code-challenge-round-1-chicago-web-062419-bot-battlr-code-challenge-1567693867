import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      allBots: [],
      botsInArmy: [],
      botsInCollection: []
    };
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(data => {
        return data.json();
      })
      .then(json => {
        this.setState({ allBots: json, botsInCollection: json });
      });
  }

  moveBotFromCollecionToArmy = (id) => {
    console.log("Move this card from the Collection to the Army" + id);
    const targetBot = this.state.botsInCollection.filter(bot => bot.id !== id)
    console.log(targetBot)
    this.setState({ botsInArmy: [...this.state.botsInArmy , targetBot]})
    // state changes, no rerender given the timeframe
  };

  moveBotFromArmyToCollection = (id) => {
    console.log("Move this card from the Army to the Collection");
  };

  componentDidUpdate(){
    //console.log(this.state)
  }

  render() {
    return (
      <div>
        <YourBotArmy
          botsInArmy={this.state.botsInArmy}
          handleClick={this.moveBotFromArmyToCollection}
        />
        <BotCollection
          allBots={this.state.allBots}
          botsInCollection={this.state.botsInCollection}
          handleClick={this.moveBotFromCollecionToArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
