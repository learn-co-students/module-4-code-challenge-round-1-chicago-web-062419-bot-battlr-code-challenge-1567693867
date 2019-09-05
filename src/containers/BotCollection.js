import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";
// import BotsPage from "../containers/BotsPage";

// Class component (this.props)
class BotCollection extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedBot: {}
    };
  }

  //your code here
  render() {
    console.log(this.props);
    // Now BotCollection has access to the array from BotsPage
    // console.log(this.props);
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.allBots.map(bot => {
            // Render one card for each bot
            // Need an ID
            // Pass the props and the function from BotsPage as a prop
            return (
              <BotCard
                enlistBot={this.props.enlistBot}
                key={bot.id}
                bot={bot}
              />
            );
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
