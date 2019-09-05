// This is where all bots will be displayed
// Stuff will be rendered here
// This is a child of BotsPage
// Constructor here?
// We'll need to iterate over the collection of bots to make the
// individual BotCards

// BotSpecs may be within the individual BotCards

import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  render(){
    const mappedBots = this.props.bots.map((bot) => {
      return <BotCard handleClick={ this.props.handleClick } key={bot.id} bot={bot}/>
    })
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {mappedBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
