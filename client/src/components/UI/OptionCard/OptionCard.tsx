import classes from "./OptionCard.module.scss";

const OptionCard = (props: { title: string; description: string }) => {
  return (
    <div className={classes.options_card}>
      <div className={classes.options_position}>
        <h1>{props.title}</h1>
        <div className={classes.p_border}>
          <p>{props.description}</p>
        </div>

        <div className={classes.options_button_position}>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
