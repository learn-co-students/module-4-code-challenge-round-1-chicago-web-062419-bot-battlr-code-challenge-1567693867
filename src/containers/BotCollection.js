import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
	constructor(props) {
		super(props);
		const { bots } = props
		this.state = {bots}
		}
	

	render() {
		const oneBot = this.state.bots.map(bot => <oneBotty key={bot.id} name={bot.name} />

		return (
		  <div className="ui four column grid">
			  <div className="row">
				Collection of all bots
				<BotCard bot={oneBot}/>
			  </div>
		  </div>
		);
	}
  };


  // I am trying to map over the collection of bots and pass in a single bot as props with its attributes to the botCard. 


export default BotCollection;


