import React from 'react';
import q from './Quiz.module.css';
import QuizContent from "./QuizContent";

const Quiz = () =>{
    return (
        <div className={q.quiz}>
            <div className={q.quizHeader}>
                <img src="./quiz3.png" alt=""/>
            </div>
            <QuizContent />
        </div>
    )
}

export default Quiz;