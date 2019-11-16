import React from 'react';
import f from './Footer.module.css'
import p from "../Partners/Partners.module.css";

const Footer = () => {
    return (
        <div className={f.footer}>
            <div className={f.footerItem1}>
                <img src="footer1.png" alt="footer1"/>
            </div>
            <div className={f.footerItem2}>
                <p>
                    Сроки проведения акции 1-30 января 2019 года. <br/>
                    Организатор акции - интернет-магазин Allsoft.ru. <br/>
                    Все вопросы по акции, пожалуйста, направляйте на <a href="mailto:info@allsoft.ru">info@allsoft.ru</a>
                </p>
            </div>
            <div className={f.footerItem3}>
                <img src="footer4.png" alt="footer3"/>
            </div>
            <div className={f.footerItem4}>
                <img src="footer3.png" alt="footer4"/>
            </div>
        </div>
    )
}

export default Footer;