import React from 'react';
import q from './Quiz.module.css';
import QuizContentRight from "./QuizContentRight";

const QuizContent = () => {
    return (
        <div className={q.quizContent}>
            <div className={q.quizContentLeft}>
                <p>Новогодняя
                    викторина</p>
            </div>
            <QuizContentRight/>

        </div>
    )
}

export default QuizContent;