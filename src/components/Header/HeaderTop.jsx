import React from 'react';
import h from "./Header.module.css"

const HeaderTop = () => {
    return (
            <div className={h.headerTop}>
                <div className={h.headerLogo}>
                    <img src="./allsoftlogo.jpg" alt=""/>
                </div>
                <div className={h.headerTitle}>
                    <p className={h.HeaderTitleFirst}>
                        <label htmlFor=""><span className={h.space}>&ensp;</span>Новогодняя викторина&ensp;</label> <br/>
                        <label htmlFor="">&ensp;от Allsoft.ru&ensp;</label><span className={h.HeaderTitleSecond}>2019</span>
                    </p>
                    {/*<p className={h.HeaderTitleSecond}>*/}
                    {/*    2019*/}
                    {/*</p>*/}
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