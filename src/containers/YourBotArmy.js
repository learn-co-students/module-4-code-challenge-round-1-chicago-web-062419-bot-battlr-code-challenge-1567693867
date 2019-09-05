import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  // Takes an array of army bots and renders individual cards in this container
  
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          <h1> BOT ARMY </h1>
            {this.props.botArmy.map(bot => {
              return <BotCard key={bot.id} bot={bot} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
