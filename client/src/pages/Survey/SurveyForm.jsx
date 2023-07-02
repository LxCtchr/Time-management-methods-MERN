import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "survey-core/defaultV2.css";
import "./Survey.scss";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import axios from "axios";

const customCss = {
  body: "bodyContainer",
  question: {
    title: "title-class",
    number: "number",
  },
  radiogroup: {
    label: "test123",
    controlLabel: "text123",
  },
  error: {
    tooltip: "text1234",
  },
};

const SurveyForm = () => {
  const [surveyJSON, setSurveyJSON] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/survey").then(({ data }) => {
      const { _id, __v, ...surveyData } = data;
      setSurveyJSON(surveyData);
    });
  }, []);
  const survey = new Model(surveyJSON);
  survey.onComplete.add((sender, options) => {
    localStorage.setItem("data", JSON.stringify(sender.data));
    navigate("/survey/results");
  });
  survey.css = customCss;
  return <Survey model={survey} />;
};

export default SurveyForm;
