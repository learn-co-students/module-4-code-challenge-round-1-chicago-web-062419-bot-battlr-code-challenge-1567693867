import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots = () =>{
	return this.props.allBots.map(bot => {
		return <BotCard bot={bot} key={bot.id} enlistBot={this.props.enlistBot}/>
	})
  }


  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
