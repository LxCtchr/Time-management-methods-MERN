import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Handler.scss";
import BigMethod from "../BigMethod/BigMethod";

const Handler = () => {
  const [methods, setMethods] = useState(null);

  useEffect(() => {
    axios.get("/methods").then(({ data }) => {
      setMethods(data);
    });
  }, []);

  return (
    <section className="handler">
      <div className="container">
        <div className="handler__row">
          {methods &&
            Object.keys(methods).map((method, index) => {
              if (methods[method].description) {
                return (
                  <BigMethod
                    key={index}
                    title={methods[method].title}
                    description={methods[method].description}
                    img={methods[method].img}
                    color={methods[method].color}
                  />
                );
              }
              return null;
            })}
        </div>
      </div>
    </section>
  );
};

export default Handler;
