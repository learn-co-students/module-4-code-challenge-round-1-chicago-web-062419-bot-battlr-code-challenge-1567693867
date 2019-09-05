import React from "react";
import BotCard from "../components/BotCard";
import uuid from 'uuid'

class BotCollection extends React.Component {
	
	render(){

		const allBots = this.props.botsCollection.map((bot) => {
			// console.log("SINGLE BOT FROM COLLECTION", bot)
			return <BotCard key={uuid()} bot={bot} handleChange={this.props.handleChange}/>
		})

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
    		  {allBots}
					
    		</div>
  	  </div>
  	);
  }

}

export default BotCollection;
