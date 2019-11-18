import React from 'react';
import i from './Partners.module.css';

const PartnersItem = (props) => {
    return (
        <div className={i.partnersItem}>
            <img src={props.image} alt="partnersItem"/>
        </div>
    )
}

export default PartnersItem;