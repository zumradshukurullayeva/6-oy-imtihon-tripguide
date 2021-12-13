import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { DefoultBackground, FilterSectionBox } from '../styled'
import { useTranslation } from 'react-i18next';

const Yourtrip = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    
    const clickHandler = () => {
        navigate("/")
    }
    return (
        <DefoultBackground className="Yourtrip-component">
            <h3 className="you-text">{t('congratulations')}</h3>
            <h2 className="you-title">{t('yourTrip')}</h2>
            <h3 className="swit-text">{t('swisHotels')}</h3>
            <div className="you-path">
                <div className="explore-icon">
                    <img className="explore-path-photo" src="./img/Path.png"/>
                    <h3 className="explore-path-title">4.8 <span className="explore-span-text">(122 {t('reviews')}) </span></h3>
                </div>
                <h2 className="you-room-text">{t('rooms')}</h2>
            </div>
            <div className="you-spans">
                <FilterSectionBox className="you-span1">
                    <span className="book-right-span">{t('information')}</span>
                    <h3 className="book-right-date">May 15 - 22, 2021  </h3>
                </FilterSectionBox>
                <FilterSectionBox  className="you-span2">
                    <span className="book-right-span">{t('information2')}</span>
                    <h3 className="book-right-date">1 {t('c')}</h3>
                </FilterSectionBox>  
            </div>

            
            <FilterSectionBox className="price-card you-price-card">
                <h2 className="search-tema">{t('reserve')}</h2>
                <div className="hotel-price-text">
                    <div className="layer-icon">
                        <div className="layer-photo"><img src="../img/layer1.png"/></div>
                        <h2 className="hotel-price-text1">{t('reserveDetail1')}</h2>
                    </div>
                    <h3 className="hotel-price-text2">{t('detailspan1')}</h3>
                </div>

                <div className="hotel-price-text">
                    <div className="layer-icon">
                        <div className="layer-photo"><img src="../img/layer2.png"/></div>
                        <h2 className="hotel-price-text1">{t('inputNamedata')}</h2>
                    </div>
                    <h3 className="hotel-price-text2">{t('detailspan2')}</h3>
                </div>

                <div className="hotel-price-text">
                <div className="layer-icon">
                    <div className="layer-photo"><img src="../img/layer3.png"/></div>
                    <h2 className="hotel-price-text1">{t('checkedOther4')}</h2>
                </div>
                    <h3 className="hotel-price-text2">$833</h3>
                </div>

                <div className="hotel-price-text">
                <div className="layer-icon">
                    <div className="layer-photo"><img src="../img/layer4.png"/></div>
                    <h2 className="hotel-price-text1">{t('reserveDetail4')}</h2>
                </div>
                    <h3 className="hotel-price-text2">{t('detailspan4')}</h3>
                </div>
            </FilterSectionBox>
            <button type="button"  onClick={clickHandler} className="go-button">Go To Your Home</button>
             <div className="you-photo"><img src="../img/youphoto.png"/></div>
        </DefoultBackground>
    )
}

export default Yourtrip
