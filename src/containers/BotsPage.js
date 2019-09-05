import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      bots: [],
      // yourArmy should contain the chosen bots for the private army and be updated by the onChange in BotCard component
      yourArmy: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(botsData => {
      // console.log("ARRAY OF BOTS FROM FETCH", botsData);
      return this.setState({
        bots: botsData
      })
    })
  }

  handleChange(id) {
    this.setState(prevState => {
        const updatedYourArmy= prevState.yourArmy.map(bot => {
          console.log(bot)
          if (bot.id === id) {
            prevState.yourArmy << bot
          }
        })
        return {
            yourArmy: updatedYourArmy
        }
    })
}
  render() {
    return (
      <div>
        <BotCollection  botsCollection={this.state.bots} handleChange={this.handleChange}/>
        <YourBotArmy />
      </div>
    );
  }

}

export default BotsPage;
