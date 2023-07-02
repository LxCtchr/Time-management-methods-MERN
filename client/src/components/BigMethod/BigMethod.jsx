import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./BigMethod.module.scss";

const BigMethod = ({ img, title, description, color }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.column}>
      <div className={classes.color} style={{background: color}}></div>
      <div className={classes.method} onClick={() => {
        navigate("/methods/pomodoro");
      }}>
        <div className={classes.text}>
          <span className={classes.title}>{title}</span>
          <span className={classes.description}>{description}</span>
        </div>
        <img src={img} alt="method icon" className={classes.img} />
      </div>
    </div>
  );
}

export default BigMethod;