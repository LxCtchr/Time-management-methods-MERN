import React from "react";

import classes from "./ResultsHandler.module.scss";
import ResultMethod from "../resultMethod/ResultMethod";
import Button from "../UI/Button/Button";

import classNames from "classnames";

const ResultsHandler = ({ name }) => {
  return (
    <div className="container">
      <div className={classes.results}>
        <span className={classes.title}>
          Попробуйте следующие методы:
        </span>
        <ResultMethod name={name} />
        <Button text="Пройти ещё раз" className={classNames(classes.button)} />
      </div>
    </div>
  );
};

export default ResultsHandler;
