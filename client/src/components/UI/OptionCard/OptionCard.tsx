import classes from "./OptionCard.module.scss";

const OptionCard: React.FC<{ title: string; description: string }> = (
  props
) => {
  return (
    <div className={classes.options_card}>
      <div className={classes.options_position}>
        <h1>{props.title}</h1>
        <div className={classes.p_border}>
          <p>{props.description}</p>
        </div>

        <div className={classes.options_button_position}>
          <button>שעות עבודה</button>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
