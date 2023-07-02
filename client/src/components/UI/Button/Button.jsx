import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Button.module.scss";

const Button = ({ text }) => {
  const navigate = useNavigate();
  return (
    <button className={classes.button} onClick={() => {
      localStorage.clear();
      navigate("/survey");
    }}>
      <span className={classes.text}>{text}</span>
    </button>
  );
};

export default Button;
