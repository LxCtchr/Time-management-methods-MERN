import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./ResultMethod.module.scss";

import SmallMethod from "../SmallMethod/SmallMethod";
import MethodText from "../ResultTexts/MethodText/MethodText";

const ResultMethod = ({ name }) => {
  const [methods, setMethods] = useState(null);

  useEffect(() => {
    axios.get("/methods").then(({ data }) => {
      setMethods(data);
    });
  }, []);

  const renderMethod = () => {
    return Object.keys(methods).map((method) => {
      for (let item of name) {
        if (methods[method].name === item) {
          return (
            <div key={methods[method]._id} className={classes.method}>
              <MethodText
                title={methods[method].info.info_title}
                text={methods[method].info.info_text}
                name={name}
              />
              <SmallMethod
                title={methods[method].title}
                img={methods[method].img}
              />
              <span className={classes.sp}></span>
              <hr className={classes.hr} />
            </div>
          );
        }
      }
      return null;
    });
  };

  return methods && renderMethod();
};

export default ResultMethod;
