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
        <Image
          src={props.image}
          width={400}
          height={300}
          alt="Image not found"
        ></Image>
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
