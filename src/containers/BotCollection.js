import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  // Takes an array of all bots
  // Maps over all the bots and will render an individual card for each

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          <h1>BOT COLLECTION</h1>
          {this.props.allBots.map(bot => {
            return (
              <BotCard
                key={bot.id}
                bot={bot}
                updateArmy={this.props.updateArmy}
                renderBotSpecs={this.props.renderBotSpecs}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
