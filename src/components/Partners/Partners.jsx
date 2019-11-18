import React from 'react';
import p from './Partners.module.css'
import PartnersItem from './PartnersItem.jsx'

const Partners = () => {
    return (
        <div className={p.partners}>
            <p>Партнеры акции</p>
            <div className={p.tree}>
                <a href="#" className={p.tree1}>&ensp;</a>
                <a href="#" className={p.tree2}>&ensp;</a>
                <a href="#" className={p.tree3}>&ensp;</a>
                <a href="#"className={p.tree4}> &ensp;</a>
                <a href="#" className={p.tree5}>&ensp;</a>
            </div>
            <div className={p.partnersSlider}>
                <div className={p.partnersPrev}>
                    <a href="#slider" id={"prev"} onClick={() => PrevItem()}><img src="partnersprev.png" alt="partnersprev"/></a>
                </div>
                <div  className={p.sliderItems} id={"slider"}>
                    <PartnersItem image={"partners3.png"}/>
                    <PartnersItem image={"partners2.png"}/>
                    <PartnersItem image={"partners1.png"}/>
                    <PartnersItem image={"partners5.png"}/>
                    <PartnersItem image={"partners4.png"}/>
                    <PartnersItem image={"partners6.png"}/>
                </div>
                <div className={p.partnersNext}>
                    <a href={"#slider"} id={"next"} onClick={() => NextItem()}><img src="partnersnext.png" alt="partnersnext"/></a>
                </div>
            </div>

        </div>
    )
};


const PrevItem = () => {
    let content = document.getElementById('slider'),
        scrollStep = 100;
    console.log('Prev');
    document.getElementById('prev').addEventListener('click', function (e) {
        e.preventDefault();
        let sl = content.scrollLeft;

        if ((sl - scrollStep) <= 0) {
            content.scrollTo(0, 0);
        } else {
            content.scrollTo((sl - scrollStep), 0);
        }
    });
};

const NextItem = () => {
    let content = document.getElementById('slider'),
        scrollStep = 100;
    console.log('Next');
    document.getElementById('next').addEventListener('click', function (e) {
        e.preventDefault();
        let sl = content.scrollLeft,
            cw = content.scrollWidth;
        if ((sl + scrollStep) >= cw) {
            content.scrollTo(cw, 0);
        } else {
            content.scrollTo((sl + scrollStep), 0);
        }
    });


};

export default Partners;