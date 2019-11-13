import React from 'react';
import q from './Quiz.module.css';

const Quiz = () =>{
    return (
        <div className={q.quiz}>
            <div className={q.quizHeader}>
                <img src="./quiz3.png" alt=""/>
            </div>
        </div>
    )
}

export default Quiz;