import React from "react";
import BotCollection from './BotCollection'
// import BotCard from './components/BotCard'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
	  super ()
    this.state = {
      botsData: 'bots'}
  }



componentDidMount(){
	this.fetchBots();
}

  fetchBots() {
	  const botURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
	  fetch(botURL)
	  .then(resp => resp.json())
	  .then(bots => {
      this.setState({botsData: bots})
	  })
	  .catch(err => console.log(err))
  }

  render() {

    return (
      <div>
          <BotCollection bots={this.state.botsData}/>
          
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;

