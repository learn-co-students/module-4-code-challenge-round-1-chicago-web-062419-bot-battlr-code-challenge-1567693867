import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  state = {
    style: {color: 'black'}
  }

  render() {
    const { filterMyArmy, removeFromArmy } = this.props;
    const { style } = this.state
    let totalHealth = 0
    let totalDamage = 0
    let totalArmor = 0
    filterMyArmy.forEach(bot => {
      totalHealth += bot.health
      totalDamage += bot.damage
      totalArmor += bot.armor
    })
    const mapMyArmy = filterMyArmy.map(bot => (
      <BotCard bot={bot} removeFromArmy={removeFromArmy} />
    ));
    return (
      <div className="ui segment inverted olive bot-army">
        <h1 style={style}>Army Stats</h1>
        <label style={style}>Health: {totalHealth} </label>
        <label style={style}>Damage: {totalDamage} </label>
        <label style={style}>Armor: {totalArmor} </label>
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
