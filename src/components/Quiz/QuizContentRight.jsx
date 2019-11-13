import React from 'react';
import q from './Quiz.module.css';

const QuizContentRight = () => {
    return (
        <div className={q.quizContentRight}>
            <div className={q.quizContentRightTitle}>
                <p>Ответьте правильно на несколько вопросов <br/>
                    и мы подарим вам лицензию на выбранный подарок!</p>
            </div>
            <div className={q.quizContentRightDescription}>
                <p>Перед началом участия в викторине выберите подарок и укажите ваш
                    электронный адрес - на него в случае выигрыша вам будет доставлен
                    приз. После нажатия на кнопку "Старт" вам будет предложено ответить
                    на семь несложных вопросов по теме лицензионного софта. По каждому
                    вопросу на страницах сайта магазина Allsoft.ru можно найти подсказки.
                    Если вы ответите правильно на все вопросы, то вам незамедлительно
                    будет вручен подарок! Для участия в викторине у вас есть две попытки.</p>
            </div>
            <div className={q.quizContentRightEmail}>
                <p>Ваша электронная почта <input type="email" className={q.email} placeholder={"thrash1984@gmail.com"}/></p>
            </div>
            <div className={q.quizContentRightQuestions}>
                <p><span>Вопрос 1</span> из 7</p>
                <p>Какого числа Windows 10 появилась в продаже?</p>
                <div className={q.quizContentRightAnswers}>
                    <div><input type="radio" className={q.radio} name="x" value="y" id="y"/>
                        <label htmlFor="y">29 июля 2015 года</label></div>
                    <div><input type="radio" className={q.radio} name="x" value="z" id="z"/>
                        <label htmlFor="z">15 сентября 2015 года</label></div>
                    <div><input type="radio" className={q.radio} name="x" value="z" id="z"/>
                        <label htmlFor="z">10 ноября 2015 года</label></div>
                </div>
                <div className={q.quizContentRightNext}>
                    <a href="#"><img src="./nextquestion.png" alt="nextquestion"/></a>
                </div>
            </div>
        </div>
    )
}

export default QuizContentRight;