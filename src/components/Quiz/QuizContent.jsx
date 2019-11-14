import React from 'react';
import q from './Quiz.module.css';
import QuizContentRight from "./QuizContentRight";
import QuizContentLeft from "./QuizContentLeft";

const QuizContent = () => {
    return (
        <div className={q.quizContent}>

            <QuizContentLeft />
                <QuizContentRight/>
        </div>
    )
}

export default QuizContent;