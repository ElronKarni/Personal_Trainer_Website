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
      <div style={{ padding: "1rem" }}>
        <button
          className={classes.hoverButton}
          style={{
            width: "500px",
            height: "40px",
            fontSize: "1rem",
            color: "rgb(232, 232, 232)",
          }}
        >
          ליאור, תצרי איתי קשר בבקשה!
        </button>
      </div>
    </form>
  );
};
