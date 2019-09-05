import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from '../components/BotSpecs'

const botsURL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    showBotID: 0
    // showBotSpecsPage: false
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
    // debugger
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

  showBotSpecs = e => {
    const target = e.target;
    const targetID = Number(target.parentElement.id);
    // console.log(targetID)
    this.setState({showBotID: targetID})
  }

  backToHome = e => {
    this.setState({showBotID: 0 })
  }

  render() {
    const { allBots, showBotID } = this.state;
    const filterMyArmy = allBots.filter(bot => bot.myArmy);
    const selctedBot = allBots.find(bot => bot.id === showBotID)
    console.log(selctedBot)
    return (
      <div>
        <YourBotArmy
          filterMyArmy={filterMyArmy}
          removeFromArmy={this.removeFromArmy}
        />
        {/* Need ternary for BotCollection or BotSpecs */}
        { showBotID > 0 ? 
          <BotSpecs bot={selctedBot} backToHome={this.backToHome} addToArmy={this.addToArmy}/> 
          : 
          <BotCollection 
            allBots={allBots} 
            // addToArmy={this.addToArmy} //part 1
            showBotSpecs={this.showBotSpecs}
          />
        }
      </div>
    );
  }
}

export default BotsPage;
