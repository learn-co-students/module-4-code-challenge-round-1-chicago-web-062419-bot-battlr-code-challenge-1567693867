import React from "react";

// Functional component (props)
const BotCard = props => {
  // Destructure
  console.log(props.bot);
  const {
    armor,
    avatar_url,
    bot_class,
    catchphrase,
    id,
    name,
    damage,
    health
  } = props.bot;

  let botType;

  switch (props.bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.bot.id}
        // On click, use the function that was passed down to add the bot to the enlisted bot array
        onClick={() => props.enlistBot(props.bot)}
        // Conditionally render the bots depending on whether they are enlisted
        {...(props.bot.enlisted ? null : <img src={avatar_url} alt={name} />)}
      >
        <div className="image">
          {/* Can pass in destructured name */}
          <img alt={name} src={props.bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.bot.name} {props.botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.bot.armor}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
