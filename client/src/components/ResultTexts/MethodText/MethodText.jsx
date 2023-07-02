import React from "react";

import classes from "./MethodText.module.scss";

const MethodText = ({ title, text }) => {
  return (
    <div>
      <div className={classes.text__block}>
        <span className={classes.title}>{title}</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MethodText;
