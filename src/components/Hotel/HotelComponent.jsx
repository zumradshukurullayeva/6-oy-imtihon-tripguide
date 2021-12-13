import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { DefoultBackground, FilterSectionBox } from '../../styled'
import Api from '../../config/api'
import { useTranslation } from 'react-i18next';

const HotelComponent = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();
    const { state } = useLocation();
    console.log(state)
    const [hotelDetail, setHotelDetail] = useState([]);
    useEffect(() => {
        if (state && state.id) {
            Api.getHotelDetail(state.id).then(data => {
                setHotelDetail(data);
            });
        }
    }, [])
    
    const clickHandler = () => {
        navigate("/book")
    }
    return (
        <DefoultBackground className="hotel-components">
            <div className="hotel-left">
                <h2 className="zuich-text">{hotelDetail.name}</h2>
                <div className="explore exp-one">
                    <div className="explore-icon">
                        <img className="explore-path-photo" src="./img/Path.png"/>
                        <h3 className="explore-path-title">{hotelDetail.rating} <span className="explore-span-text">({hotelDetail.reviews} reviews) </span></h3>
                    </div>

                    <div className="explore-icon exp-title">
                    <img className="explore-path-photo" src="../img/map.png"/>
                        <h3 className="explore-path-title"><span className="explore-span-text">{hotelDetail.name} </span></h3>
                    </div>
                </div>
                <div className="grid-container hotel-grid-container">
                        <div className="hotel-grid-item">
                            <img alt="photo" src={hotelDetail.photo}/> 
                        </div>
                        <div className="hotel-grid-item">
                            <img src="../img/hotel2.png"/> 
                        </div>
                        <div className="hotel-grid-item">
                            <img src="../img/hotel3.png"/> 
                        </div>
                        <div className="hotel-grid-item">
                            <img src="../img/hotel4.png"/> 
                        </div>
                </div>

                <div>
                    <span className="hotel-span1">5.0</span>
                    <span className="hotel-span2">{t('span2')}</span>
                    <span className="hotel-span3">{t('span3')}</span>
                    <span className="hotel-span4">{t('span4')}</span>
                    <span className="hotel-span5">{t('span5')}</span>
                    <div className="hotel-icon"><img src="../img/hotelpath.png"/></div>
                </div>
                <h2 className="hotel-titles">{t('exclusiveroom')}</h2>
                <h3 className="hotel-texts">{t('hotelName')}</h3>
                <hr className="book-line"/>

                <h2 className="bok-text bg-texts">{t('tab1')}</h2>
                <h2 className="bok-text">{t('tab2')}</h2>
                <h2 className="bok-text">{t('tab3')}</h2>
                <h2 className="bok-text">{t('tab4')}</h2>
                <div className="line-books">
                    <hr/>
                    <img className="line-bg-book" src="../img/linebg.png"/>
                </div>
                <h3 className="hotel-arabian-text">{t('exclusiveText')}</h3>
                <h3 className="hotel-features-text">{t('hotelFeatures')}</h3>
                <div className="wifi-icons">
                    <div className="hotel-icons">
                        <div><img src="../img/wifi.png"/></div>
                        <h4 className="wifi-text">{t('features1')}</h4>
                    </div>
                    <div className="hotel-icons">
                        <div><img src="../img/wifi2.png"/></div>
                        <h4 className="wifi-text">{t('features2')}</h4>
                    </div>
                    <div className="hotel-icons">
                        <div><img src="../img/wifi3.png"/></div>
                        <h4 className="wifi-text">{t('features3')}</h4>
                    </div>
                    <div className="hotel-icons">
                        <div><img src="../img/wifi4.png"/></div>
                        <h4 className="wifi-text">{t('features4')}</h4>
                    </div>
                    <div className="hotel-icons">
                        <div><img src="../img/wifi5.png"/></div>
                        <h4 className="wifi-text">{t('features5')}</h4>
                    </div>
                </div>
                <hr className="book-line"/>

                <h2 className="text-amenities">{t('amenities')}</h2>
                <div className="comp-wifi-icons">
                    <div>
                        <div className="hotel-icons comp-icon">
                            <div><img src="../img/wifi.png"/></div>
                            <h4 className="wifi-text">{t('features1')}</h4>
                        </div>
                        <div className="hotel-icons comp-icon">
                            <div><img src="../img/comp.png"/></div>
                            <h4 className="wifi-text">{t('amenitiesNames2')}</h4>
                        </div>
                        <div className="hotel-icons comp-icon">
                            <div><img src="../img/wifis.png"/></div>
                            <h4 className="wifi-text">{t('amenitiesNames1')}</h4>
                        </div>
                        <div className="hotel-icons comp-icon">
                            <div><img src="../img/wifiss.png"/></div>
                            <h4 className="wifi-text">{t('amenitiesNames1')}</h4>
                        </div>
                    </div>
                    <div className="right-icons">
                        <div className="hotel-icons comp-icon">
                            <div><img src="../img/wifi2.png"/></div>
                            <h4 className="wifi-text">{t('amenitiesNames5')}</h4>
                        </div>
                        <div className="hotel-icons comp-icon">
                            <div><img src="../img/pizza.png"/></div>
                            <h4 className="wifi-text">{t('amenitiesNames6')}</h4>
                        </div>
                        <div className="hotel-icons comp-icon">
                            <div><img src="../img/comp.png"/></div>
                            <h4 className="wifi-text">{t('amenitiesNames7')}</h4>
                        </div>
                        <div className="hotel-icons comp-icon">
                            <div><img src="../img/city.png"/></div>
                            <h4 className="wifi-text">{t('amenitiesNames8')}</h4>
                        </div>
                    </div>
                </div>
                <button className="search-card-btn2" type="button">{t('moreBtn')}</button>
            </div>
            <FilterSectionBox className="hotel-right">
                <div className="hotel-right-titles">
                    <h2 className="hotel-right-price">${hotelDetail.price} <span className="hotel-right-span"> /night </span><span className="hotel-right-span">$184</span></h2>
                    <button type="button" className="hotel-right-button">20% OFF</button>
                </div>
                <hr className="book-line"/>
                <div className="hotel-right-check-date">
                    <div>
                        <span className="hotel-checkin-text">{t('check1')}</span>
                        <FilterSectionBox className="hotel-right-dates">
                            <img src="../img/hoteldate.png"/>
                            <div><span className="hotel-dates">May 15, 2021 </span></div>
                        </FilterSectionBox>
                    </div>
                    <div>
                        <span className="hotel-checkin-text">{t('check2')}</span>
                        <FilterSectionBox className="hotel-right-dates">
                            <img src="../img/hoteldate.png"/>
                            <div><span className="hotel-dates">May 22, 2021  </span></div>
                        </FilterSectionBox>
                    </div>
                </div>
                <h2 className="guest-title">{t('cardsName')}</h2>
                <FilterSectionBox className="hotel-srtel-icon">
                    <h3 className="hotel-children-text">{t('placeholderadult')}</h3>
                    <div><img src="../img/hotelstrel.png"/></div>
                </FilterSectionBox>
                <h2 className="search-tema">{t('cardsName2')}</h2>
                    <div className="searchcard-price">
                        <label><input className="search-card-input text-stil" type="checkbox"/>{t('labelAllow')}</label>
                        <h2 className="text-stil">$13</h2>
                    </div>

                    <div className="searchcard-price">
                        <label><input className="search-card-input text-stil" type="checkbox" defaultChecked={true}/>{t('labelbr')}</label>
                        <h2 className="text-stil">$10</h2>
                    </div>

                    <div className="searchcard-price">
                        <label><input className="search-card-input text-stil" type="checkbox"/>{t('labelpr')}</label>
                        <h2 className="text-stil">$6</h2>
                    </div>

                    <div className="searchcard-price">
                        <label><input className="search-card-input text-stil" type="checkbox"/>{t('labelex')}</label>
                        <h2 className="text-stil">Free</h2>
                    </div>
                    <h2 className="search-tema">Price</h2>
                    <FilterSectionBox className="price-card">
                        <div className="hotel-price-text">
                            <h2 className="hotel-price-text1">{t('priceText1')}</h2>
                            <h3 className="hotel-price-text2">$500</h3>
                        </div>

                        <div className="hotel-price-text">
                            <h2 className="hotel-price-text1">{t('priceText2')}</h2>
                            <h3 className="hotel-price-text2">$200</h3>
                        </div>

                        <div className="hotel-price-text">
                            <h2 className="hotel-price-text1">{t('priceText3')}</h2>
                            <h3 className="hotel-price-text2">$10</h3>
                        </div>

                        <div className="hotel-price-text">
                            <h2 className="hotel-price-text1">{t('priceText4')}</h2>
                            <h3 className="hotel-price-text2">$5</h3>
                        </div>
                    </FilterSectionBox>

                    <div className="hotel-total-text">
                        <h3 className="total-text">{t('total')}</h3>
                        <h3 className="total-textt-price">$300</h3>
                    </div>
                    <button type="button" className="book-button" onClick={clickHandler}>{t('bookNow')}</button>
                    <h2 className="hotel-you-text">{t('charged')}</h2>
            </FilterSectionBox>
        </DefoultBackground>
    )
}

export default HotelComponent
