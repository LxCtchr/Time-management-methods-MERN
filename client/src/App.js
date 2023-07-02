import './App.scss';
import React from 'react';
import SurveyForm from "./pages/Survey/SurveyForm.jsx";
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main.jsx';
import SurveyResults from './pages/Survey/SurveyResults/SurveyResults.jsx';
import Pomodoro from './pages/Methods/Pomodoro/Pomodoro.jsx';
import Balance from './pages/Methods/Balance/Balance.jsx';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/survey" element={<SurveyForm />} />
      <Route exact path="/survey/results" element={<SurveyResults />} />
      <Route exact path="/methods/pomodoro" element={<Pomodoro />} />
      <Route exact path="/methods/Balance" element={<Balance />} />
    </Routes>
  );
}

export default App;
