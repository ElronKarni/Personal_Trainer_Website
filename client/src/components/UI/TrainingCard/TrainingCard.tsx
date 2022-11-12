import React from "react";
import classes from "./TrainingCard.module.scss";
import Image from "next/image";
const TrainingCard: React.FC<{
  image: string;
  title: string;
  description: string;
}> = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.items_position}>
        <div className={classes.image_container}>
          <Image
            src={props.image}
            layout="fill"
            className={classes.img}
            alt="missing pic"
          />
        </div>

        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={classes.button_position}>
          <button>למד עוד</button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
