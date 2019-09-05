import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
  constructor(props) {
    super(props);
    this.state = {};
  }

  displaySpecs = () => {
    this.props.bots.map(bot => {
      return <BotSpecs bot={bot} />;
    });
  };

  render() {
    const botsList = this.props.bots.map(bot => {
      return <BotCard bot={bot} onClick={this.addBotsToArmy} />;
    });

    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots:
          {botsList}
        </div>
      </div>
    );
  }
}

export default BotCollection;
