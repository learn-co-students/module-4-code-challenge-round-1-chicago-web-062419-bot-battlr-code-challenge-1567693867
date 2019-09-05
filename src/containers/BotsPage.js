// This is where state lives
import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

// Something got messed up and I don't have time/can't figure out how to fix it.
// I'm just going to do everything I know how to do regardless.

// API URL
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

// Class component (this.props)
class BotsPage extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      bots: [],
      enlisted: false,
      enlistedBots: [],
      selectedBot: {}
    };
  }

  handleBotClick = () => {
    this.setState(prevState => {
      return {
        // Change the status in state
        enlisted: !prevState.enlisted
      };
    });
  };

  enlistBot = selectedBot => {
    // Map over the array of bots and add them to a new array when they're enlisted
    let enlistedArray = this.state.bots.map(bot => {
      // If the clicked bot matches the bot in the array, update
      if (bot.id === selectedBot.id) {
        bot.enlisted = true;
        return bot;
      } else {
        // Otherwise just return it
        return bot;
      }
    });
    this.setState({
      // Add the enlisted bot to the array
      enlistedBots: [...this.state.selectedBot]
    });
  };

  // When the page loads
  componentDidMount() {
    // console.log(this.state);
    // Fetch from the API
    fetch(API)
      // Return a JSON string
      .then(resp => resp.json())
      .then(bots => {
        // console.log(bots);
        let freeBots = bots.map(currentBot => {
          currentBot.enlisted = false;
          return currentBot;
        });
        // Add all the individual bots to the bots array
        this.setState({
          // Pass all unenlisted bots
          bots: freeBots
        });
      })
      // Error handling
      .catch(alert);
  }

  filteredBots = () => {
    return this.state.bots.filter(bot =>
      bot.enlisted.includes((this.state.enlisted = true))
    );
  };

  render() {
    // console.log(this.state.allBots);
    return (
      <div>
        {/* Pass in the bots array as a prop to BotsCollection */}
        {/* Pass in functions as props so the components have access */}
        <BotCollection
          enlistBot={this.enlistBot}
          handleBotClick={this.handleBotClick}
          bots={this.state.bots}
        />
      </div>
    );
  }
}

export default BotsPage;
