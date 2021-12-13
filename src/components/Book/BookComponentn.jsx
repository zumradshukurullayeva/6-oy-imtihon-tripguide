import React, { useEffect, useState }  from 'react'
import { useNavigate } from "react-router-dom";
import { DefoultBackground, FilterSectionBox, ExploreSectionBox } from '../../styled'
import { useTranslation } from 'react-i18next';

const BookComponent = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();
    
    const clickHandler = () => {
        navigate("/yourtrip")
    }
    return (
        <DefoultBackground className="book-section">
            <div className="book-left">
                <h2 className="book-left-title">{t('confirm')}</h2>
                <hr className="book-line"/>
                <FilterSectionBox className="date-book">
                    <div>
                        <h3 className="date-text">{t('inputNamedata')}</h3>
                        <span className="date-span">{t('placeholderjune')}</span>
                    </div>
                    <div>
                        <img src="../img/penicon.png"/>
                    </div>
                </FilterSectionBox>

                <FilterSectionBox className="date-book date-boock">
                    <div>
                        <h3 className="date-text">{t('inputName')}</h3>
                        <span className="date-span">{t('placeholderpas')}</span>
                    </div>
                    <div>
                        <img src="../img/penicon.png"/>
                    </div>
                </FilterSectionBox>
                <h2 className="book-left-title">{t('yourTour2')}</h2>
                <div className="credit-card-img">
                    <div className="credit-photo">
                        <img src="../img/credetcard1.png"/>
                        <img className="credit-ptich-photo" src="../img/creditptichka.png"/>

                    </div>
                    <div><img src="../img/creditcard2.png"/></div>
                    <div><img src="../img/creditcard3.png"/></div>
                    <div><img src="../img/creditcard4.png"/></div>
                </div>

                <hr className="book-line"/>

                <div className="book-cards">
                  <img src="../img/card 1.png"/>
                  <img src="../img/card 2.png"/>
                </div>

                <h3 className="card-number-text">{t('aboutCard')}</h3>

                <FilterSectionBox className="card-numbers">
                    <div><h3 className="card-number">5884 6241 4444 3333</h3></div>
                    <div><img src="../img/numberptich.png"/></div>
                </FilterSectionBox>

                <div className="book-card-parol">
                    <div>
                        <h3 className="book-cards-titles">{t('aboutCard2')}</h3>
                        <FilterSectionBox className="book-card-year"><h3>MM / YY</h3></FilterSectionBox>
                        <label><input className="search-card-input text-stil" type="checkbox" defaultChecked={true}/>{t('checLabel')}</label>
                        <button type="button" onClick={clickHandler} className="card-button">{t('ConfirmBtn')}</button>
                    </div>
                    
                    <div>
                        <h3 className="book-cards-titles">{t('aboutCard3')}</h3>
                        <FilterSectionBox className="book-card-year"><h3>****</h3></FilterSectionBox>
                    </div>
                   
                </div>
            </div>

                <ExploreSectionBox className="book-right">
                    <h3 className="book-right-text">{t('countryHotels')} </h3>
                    <div className="explore-icon">
                        <img className="explore-path-photo" src="./img/Path.png"/>
                        <h3 className="explore-path-title">4.8 <span className="explore-span-text">(122 {t('reviews')}) </span></h3>
                    </div>
                    <img src="../img/card-photos.png"/>

                    <h3 className="book-right-maintext">{t('rooms')}</h3>

                    <div className="book-right-texts">
                        <div>
                            <span className="book-right-span">{t('searchInput2')}</span>
                            <h3 className="book-right-date">{t('checked1')} </h3>

                            <div className="book-span-texts">
                                <span className="book-right-span">{t('cardsName')}</span>
                                <h3 className="book-right-date">{t('guests')}</h3>
                            </div>
                           
                        </div>

                        <div>
                            <span className="book-right-span">{t('searchInput3')}</span>
                            <h3 className="book-right-date">{t('checked2')}</h3>
                        </div>
                    </div>
                    <h3 className="book-detals-text">Booked details</h3>

                    <div className="book-price">
                        <h3 className="book-price1">$119  + {t('checkedOther1')}</h3>
                        <h4 className="book-price2">$833</h4>
                    </div>

                    <div className="book-price">
                        <h3 className="book-price1">{t('checkedOther2')}</h3>
                        <h4 className="book-price2">-$125</h4>
                    </div>

                    <div className="book-price">
                        <h3 className="book-price1">{t('checkedOther3')}</h3>
                        <h4 className="book-price2">$103</h4>
                    </div>

                    <FilterSectionBox className="book-price book-card-color">
                        <h3 className="book-price1">{t('checkedOther4')}</h3>
                        <h4 className="book-price2">$833</h4>
                    </FilterSectionBox>
                    <h3 className="book-text-report">{t('report')}</h3>
                </ExploreSectionBox>
        </DefoultBackground>
    )
}

export default BookComponent
