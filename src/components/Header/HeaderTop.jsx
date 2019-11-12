import React from 'react';
import h from "./Header.module.css"

const HeaderTop = () => {
    return (
            <div className={h.headerTop}>
                <div className={h.headerLogo}>
                    <img src="./allsoftlogo.jpg" alt=""/>
                </div>
                <div className={h.headerTitle}>
                    <p>
                        Новогодняя викторина
                        от Allsoft.ru
                    </p>
                    <p>
                        2019
                    </p>
                </div>
                <div className={h.headerMenu}>
                    <ul>
                        <li><a href={"#"}>О магазине</a></li>
                        <li><a href={"#"}>Контакты</a></li>
                        <li><a href={"#"}>Блог Allsoft</a></li>
                    </ul>
                </div>
            </div>
    );
}

export default HeaderTop;