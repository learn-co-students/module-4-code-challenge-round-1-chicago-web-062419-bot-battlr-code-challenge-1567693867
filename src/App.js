import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import BotCollection from "./containers/BotCollection"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BotsPage />
       
      </div>
    );
  }
}

export default App;

/* 
  1) Fetch the bots
  2) pass that info to bots collection
      Bots Collection should have a bunch of BotsPages which hold fetched information

*/