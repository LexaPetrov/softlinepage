import React from 'react';
import i from './Ideas.module.css'
import IdeasItem from './IdeasItem.jsx'

const Ideas = () => {
    return (
        <div className={i.ideas}>
            <div className={i.ideasHeader}>
                <p>
                    Идеи для подарков
                </p>
                <a href="#">
                    Нет времени бегать по магазинам? Купите, не слезая со стула!
                </a>
            </div>
            <div className={i.ideasItemList}>
                <IdeasItem title={"Десижн-мейкер"} image={"ideasItem2.png"} text={`магический прибор 
            для принятия решений 
            в финансовых вопросах) 
            серебр.с текстом на русс.яз.`}/>
                <IdeasItem title={"Десижн-мейкер"} image={"ideasItem1.png"} text={`магический прибор
            для принятия решений 
            в финансовых вопросах) 
            серебр.с текстом на русс.яз.`}/>
                <IdeasItem title={"Монополия"} image={"ideasItem4.png"} text={`магический прибор 
            для принятия решений 
            в финансовых вопросах) 
            серебр.с текстом.`}/>
                <IdeasItem title={"Монополия"} image={"ideasItem3.png"} text={`магический прибор
            для принятия решений 
            в финансовых вопросах) 
            серебр.с текстом.`}/>
            </div>
        </div>
    )
};

export default Ideas;