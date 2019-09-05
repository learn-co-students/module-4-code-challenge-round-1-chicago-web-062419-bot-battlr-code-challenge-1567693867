import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  constructor(props) {
    super(props);
    this.state = {
      botsInArmy: []
    };
  }

  createArmyBots = () => {
    return this.state.botsInArmy.map(bot => {
      return (
        <BotCard
          botData={bot}
          key={bot.id}
          handleClick={this.props.handleClick}
        />
      );
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">{this.createArmyBots()}</div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
