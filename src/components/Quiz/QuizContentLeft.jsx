import React from 'react';
import q from './Quiz.module.css';

const QuizContentLeft = () => {
    return (
        <div className={q.quizContentLeft}>
            <p>Новогодняя
                викторина</p>
            <div className={q.quizContentLeftTitle}>
                <p>Выберите подарок:</p>
            </div>
            <div className={q.giftGallery}>
                <a href="#"> <img src={"./prew.png"} alt={"prew"} className={q.giftGalleryPrev}></img></a>
                <img src={"./pandabox.png"} alt={"item"} className={q.giftGalleryItem}></img>
                <a href="#"><img src={"./next.png"} alt={"next"} className={q.giftGalleryNext}></img></a>
            </div>
            <div className={q.quizContentLeftText}>
                <p>
                    <a href="#">Panda Global <br/>
                        Protection 2018</a>
                </p>
                <p>
                    Призом является Panda <br/> Global Protection 2018 <br/> с бесплатным сроком <br/> регистрации 3 месяца.
                </p>
                <p>
                    <a href="#">Полное описание</a>
                </p>
                <p>
                    Цена: <b>667</b> руб.
                </p>
            </div>
        </div>
    )
}

export default QuizContentLeft;