import React from 'react';
import i from './Ideas.module.css';

const IdeasItem = (props) => {
    return (
        <div className={i.ideasItem}>
            <div className={i.ideasItemImg}>
                <img src={props.image} alt="ideasItem"/>
            </div>
             <div className={i.ideasItemText}>
                 <p className={i.title}>{props.title}</p>
                 <p className={i.text}>{props.text}</p>
             </div>
        </div>
    )
}

export default IdeasItem;