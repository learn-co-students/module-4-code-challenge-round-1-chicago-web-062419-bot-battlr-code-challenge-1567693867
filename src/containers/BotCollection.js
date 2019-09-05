import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				Collection of all bots
				{this.props.allBots.map(bot => {
					return <BotCard key={bot.id} bot={bot} updateArmy={this.props.updateArmy}/>
				})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
