import React from "react";
import { Form } from "../../Form/Form";
import classes from "./AboutCard.module.scss";
const AboutCard = () => {
  return (
    <div className={classes.card}>
      <div>
        <h1>ליאור מלול</h1>
      </div>
      <div>
        <p>
          מאמנת כושר אישית ויועצת תוכנית אימונים - מומחת לבניית שריר וחיטוב הגוף
        </p>
      </div>
      <div>
        <h2>מר ישראל לשעבר לשנת 2014</h2>
      </div>
      <Form />
    </div>
  );
};

export default AboutCard;
