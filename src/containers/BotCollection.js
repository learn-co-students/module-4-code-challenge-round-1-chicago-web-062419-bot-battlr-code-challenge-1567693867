import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  constructor(props) {
    super(props);
    this.state = {
      botsInCollection: []
    };
  }

  renderBotCards = () => {
    //return this.state.botsInCollection.map(bot => {
    return this.props.allBots.map(bot => {
      // rendering these to show that things can render
      return (
        <BotCard
          botData={bot}
          key={bot.id}
          handleClick={this.props.handleClick}
        />
      );
    });
  };

  componentDidMount() {
    this.setState({ botsInCollection: this.props.botsInCollection });
  }

  render() {
    console.log(this.props);
    return (
      <div className="ui four column grid">
        <div className="row">{this.renderBotCards()}</div>
      </div>
    );
  }
}

export default BotCollection;
