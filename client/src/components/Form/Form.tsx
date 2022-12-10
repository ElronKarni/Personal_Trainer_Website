import React from "react";
import classes from "./Form.module.scss";

export const Form = () => {
  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "1rem" }}>
        <input
          placeholder="שם מלא *"
          style={{ fontSize: "1rem", width: "500px", height: "43px" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "1rem" }}>
        <input
          placeholder="טלפון *"
          style={{
            fontSize: "1rem",
            marginLeft: "10px",
            width: "245px",
            height: "43px",
          }}
        />
        <input
          placeholder="מייל"
          style={{ fontSize: "1rem", width: "245px", height: "43px" }}
        />
      </div>
      <div style={{ padding: "1rem" }}>
        <textarea
          placeholder="הודעה"
          style={{
            fontSize: "1rem",
            width: "500px",
            height: "120px",
            fontFamily: "Helvetica",
          }}
        />
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
