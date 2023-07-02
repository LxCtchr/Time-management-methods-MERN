import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import SmallMethod from "../SmallMethod/SmallMethod";

import "./MethodsHandler.scss";

const MethodsHandler = () => {
  const [methods, setMethods] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/methods").then(({ data }) => {
      setMethods(data);
    });
  }, []);

  return (
    <section className="methods--handler">
      <div className="container">
        <div className="mh__row">
          {methods &&
            Object.keys(methods).map((method, index) => {
              if (!methods[method].description) {
                return (
                  <SmallMethod
                    key={index}
                    title={methods[method].title}
                    img={methods[method].img}
                    onClick={() => {
                      navigate(`/methods/${methods[method].name}`);
                    }}
                  />
                );
              }
              return null;
            }
            )}
        </div>
      </div>
    </section>
  );
};

export default MethodsHandler;
