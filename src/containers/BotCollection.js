import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	const { allBots, addToArmy } = this.props
	const mappedBots = allBots.map(bot => <BotCard bot={bot} addToArmy={addToArmy} />)
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
