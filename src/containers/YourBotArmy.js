import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  renderArmy = () => {
    console.log(this.props.army)
    return this.props.army.map(bot => {
      return <BotCard bot={bot} key={bot.id + 'army'} removeBot={this.props.removeBot}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <h1>Your Bot Army</h1>
          <div className="row bot-army-row">
            {this.renderArmy()}
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
