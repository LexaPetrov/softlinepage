import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";

const App = () => {
  return (
    <div className="content">
        <Header/>
        <Quiz />
    </div>
  );
}

export default App;
