import React from "react";

import classes from "./SmallMethod.module.scss";

const SmallMethod = ({ img, title, onClick }) => {
  return (
    <div className={classes.method} onClick={onClick}>
      <div className={classes.title}>{title}</div>
      <img src={img} alt="method icon" />
    </div>
  );
};

export default SmallMethod;
