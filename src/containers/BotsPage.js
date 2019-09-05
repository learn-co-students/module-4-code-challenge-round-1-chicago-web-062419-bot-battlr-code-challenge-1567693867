import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    clickedBot: {}
  };

  renderBotSpecs = bot => {
    this.setState({ clickedBot: bot });
  };

  unclickBot = () => {
    this.setState({ clickedBot: {} });
  };

  render() {
    let count = Object.keys(this.state.clickedBot).length; // A way to count how many objects in this particular array
    return (
      <div>
        <YourBotArmy botArmy={this.props.botArmy} />
        {count > 0 ? (
          <BotSpecs
            bot={this.state.clickedBot}
            updateArmy={this.props.updateArmy}
            unclickBot={this.unclickBot}
          />
        ) : (
          <BotCollection
            allBots={this.props.allBots}
            updateArmy={this.props.updateArmy}
            renderBotSpecs={this.renderBotSpecs}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
