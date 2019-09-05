import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = {
    allBots: [],
    botArmy: []
  };

  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => this.setState({ allBots: data }));
  };

  componentDidMount() {
    this.fetchBots();
  }

  updateArmy = id => {
    let addArmy = this.state.allBots.filter(bot => bot.id === id); // one bot
    let newBots = this.state.allBots.filter(bot => bot.id !== id); // array of all bots less army bot
    this.setState({ allBots: newBots }); // Set allBots as the updated array of Bots
    this.setState({ botArmy: [...this.state.botArmy, addArmy[0]] }); 
  };

  render() {
    return (
      <div className="App">
        <BotsPage
          allBots={this.state.allBots}
          updateArmy={this.updateArmy}
          botArmy={this.state.botArmy}
        />
      </div>
    );
  }
}

export default App;
