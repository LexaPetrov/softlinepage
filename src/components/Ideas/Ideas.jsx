import React from 'react';
import i from './Ideas.module.css'
import IdeasItem from './IdeasItem.jsx'

const Ideas = () => {
    return (
        <div className={i.ideas}>
            <div>
                <p>
                    Идеи для подарков
                </p>
                <a href="#">
                    Нет времени бегать по магазинам? Купите, не слезая со стула!
                </a>
            </div>
            <IdeasItem title={"Десижн-мейкер"} image={"ideasItem1.png"} text={"магический прибор\n" +
            "для принятия решений\n" +
            "в финансовых вопросах)\n" +
            "серебр.с текстом на русс.яз."}/>
            <IdeasItem title={"Монополия"} image={"ideasItem1.png"} text={"магический прибор\n" +
              "для принятия решений\n" +
              "в финансовых вопросах)\n" +
              "серебр.с текстом."}/>

              <IdeasItem title={"Десижн-мейкер"} image={"ideasItem1.png"} text={"магический прибор\n" +
              "для принятия решений\n" +
              "в финансовых вопросах)\n" +
              "серебр.с текстом на русс.яз."}/>
              <IdeasItem title={"Монополия"} image={"ideasItem1.png"} text={"магический прибор\n" +
              "для принятия решений\n" +
              "в финансовых вопросах)\n" +
              "серебр.с текстом."}/>
        </div>
    )
};

export default Ideas;