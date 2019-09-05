// This is the main container for the page
// This is the parent of BotCollection

import React from "react";
import BotCollection from './BotCollection';

class BotsPage extends React.Component {
  //start here with your code for step one

  // constructor(props){
	//   super(props)
	//   // this.state={props: }
  // }
  
  render() {
    return (
      <div>
        {/* put your components here */
          <BotCollection />
        }
      </div>
    );
  }
  
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(botData => this.setState({botData}))
  }
}

export default BotsPage;
