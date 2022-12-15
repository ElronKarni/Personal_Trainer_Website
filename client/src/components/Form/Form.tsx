import React from "react";
import classes from "./Form.module.scss";

export const Form = () => {
  return (
    <form className={classes.form}>
      <div className={classes.name_div}>
        <input placeholder="שם מלא *" />
      </div>
      <div className={classes.phone_div}>
        <input className={classes.phone_input} placeholder="טלפון *" />
        <input className={classes.mail_input} placeholder="מייל" />
      </div>
      <div className={classes.textarea_div}>
        <textarea placeholder="הודעה" />
      </div>
      <div className={classes.hoverButton}>
        <button>ליאור, תצרי איתי קשר בבקשה!</button>
      </div>
    </form>
  );
};
