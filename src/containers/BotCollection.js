import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
		constructor(){
			super()
			 	this.state = {
					allBots: []
				 }
		}

	componentDidMount(){
		fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
		.then(response => response.json())
		.then(
			(bots) => {	
			this.setState({ 
				allBots: bots})
				console.log(bots)	
		})
	}


  render(){
	    const { allBots } = this.state
	  return (
		  <div className="ui four column grid">
    		{/* <div className="row" */}
			<ul>
			{allBots.map(bot => 
				<li key={bot.id} >
				{bot.name} {bot.avatar_url}
				</li>
			)}
			</ul>
			{/* </div> */}
}

  	  </div>
  	);
  }

};

export default BotCollection;
