import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    const { filterMyArmy, removeFromArmy } = this.props;
    const mapMyArmy = filterMyArmy.map(bot => (
      <BotCard bot={bot} removeFromArmy={removeFromArmy} />
    ));
    // console.log(filterMyArmy);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {mapMyArmy}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
