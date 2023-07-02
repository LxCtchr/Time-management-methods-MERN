import React from "react";

import "./SurveyResults.scss";

import ResultsHandler from "../../../components/ResultsHandler/ResultsHandler";

const SurveyResults = () => {
  const results = JSON.parse(localStorage.getItem("data"));

  if (results["job-question"] === 2) {
    if (results["problem-question"] === 5) {
      if (results["tools-question"]) {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Frog"]} />;
        }
        return <ResultsHandler name={["Kanban"]} />;
      }
    } else if (results["problem-question"] === 6) {
      if (results["tools-question"]) {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Matrix"]} />;
        }
        return <ResultsHandler name={["Kanban"]} />;
      }
    } else if (results["problem-question"] === 7) {
      if (results["tools-question"]) {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Pomodoro"]} />;
        }
        return <ResultsHandler name={["Kanban"]} />;
      }
    } else {
      if (results["tools-question"]) {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Pomodoro"]} />;
        }
        return <ResultsHandler name={["Kanban"]} />;
      }
    }
  } else {
    if (results["problem-question"] === 5) {
      if (results["tools-question"] === 11) {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Frog"]} />;
        }
        return <ResultsHandler name={["GTD"]} />;
      } else {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Frog", "Balance"]} />;
        }
        return <ResultsHandler name={["GTD", "Balance"]} />;
      }
    } else if (results["problem-question"] === 6) {
      if (results["tools-question"] === 11) {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Matrix"]} />;
        }
        return <ResultsHandler name={["ABCD"]} />;
      } else {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Matrix", "Balance"]} />;
        }
        return <ResultsHandler name={["ABCD", "Balance"]} />;
      }
    } else if (results["problem-question"] === 7) {
      if (results["tools-question"] === 11) {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Pomodoro"]} />;
        }
        return <ResultsHandler name={["ABCD"]} />;
      } else {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Pomodoro", "Balance"]} />;
        }
        return <ResultsHandler name={["ABCD", "Balance"]} />;
      }
    } else {
      if (results["tools-question"] === 11) {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Pomodoro"]} />;
        }
        return <ResultsHandler name={["Time-Blocking"]} />;
      } else {
        if (results["solution-question"] === 12) {
          return <ResultsHandler name={["Pomodoro", "Balance"]} />;
        }
        return <ResultsHandler name={["Time-Blocking", "Balance"]} />;
      }
    }
  }
};

export default SurveyResults;
