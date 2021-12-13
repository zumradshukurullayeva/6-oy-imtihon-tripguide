import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { DefoultBackground, Checkbox, SectionBoxBorder } from '../../styled'
import Api from '../../config/api'
import { useTranslation } from 'react-i18next';

const SearchCard = () => {

    
    const { t } = useTranslation();

    const navigate = useNavigate();
    const [hotelList, setHotelList] = useState([]);
    useEffect(() => {
        Api.getHotels().then(data => {
            setHotelList(data);
        });
    }, [])
    
    const clickHandler = (id) => {
        console.log(id)
        navigate("/hotel", { state:{ id:id } })
    }
    return (
        <DefoultBackground className="searchCard">
               <div  className="search-card-left">
                   <h3 className="search-location-title">{t('searchLoc')}</h3>
                   <div className="search-location-form">
                        <input type="text" className="search-location-titles" placeholder={t('searchLoc')}/>
                        <img className="search-location-foto" src="../img/iconpoisk.png"/>
                    </div>

                    <h2 className="search-tema">{t('popFil1')}</h2>

                    <label><Checkbox className="search-card-input text-stil" type="checkbox" defaultChecked={true}/>{t('label1')}</label>
                    <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label2')}</label>
                    <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label3')}</label>
                    <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label4')}</label>

                    <h3 className="search-seemore-text">{t('see')}</h3>

                    <hr className="search-line"/>

                    <h2 className="search-tema">{t('popFil2')}</h2>

                    <img src="../img/68foto.png"/>
                    <div className="searchcard-price">
                        <h2 className="search-price-text">$50</h2>
                        <h2 className="search-price-text">$150</h2>
                    </div>

                    <hr  className="search-line"/>

                    <h2 className="search-tema">{t('popFil3')}</h2>
                    <div className="searchcard-price">
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label1')}</label>
                        <h2 className="text-stil">108</h2>
                    </div>

                    <div className="searchcard-price">
                        <label><Checkbox className="search-card-input text-stil" type="checkbox" defaultChecked={true}/>Apertments</label>
                        <h2 className="text-stil">141</h2>
                    </div>

                    <div className="searchcard-price">
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label6')}</label>
                        <h2 className="text-stil">108</h2>
                    </div>

                    <h2 className="search-seemore-text">{t('see')}</h2>

                    <hr className="search-line"/>

                    <h2 className="search-tema">{t('popFil4')}</h2>
                    <div>
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label7')}</label>
                    </div>

                    <div>
                        <label><Checkbox className="search-card-input text-stil" type="checkbox" defaultChecked={true}/>{t('label8')}</label>
                    </div>

                    <div>
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label9')}</label>
                    </div>

                    <div>
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label10')}</label>
                    </div>

                    
                    <div>
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label11')}</label>
                    </div>

                    <hr className="search-line"/>

                    
                    <h2 className="search-tema">Facilities</h2>
                    <div className="searchcard-price">
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label12')}</label>
                        <h2 className="text-stil">108</h2>
                    </div>

                    <div className="searchcard-price">
                        <label><Checkbox className="search-card-input text-stil" type="checkbox" defaultChecked={true}/>{t('label13')}</label>
                        <h2 className="text-stil">141</h2>
                    </div>

                    <div className="searchcard-price">
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label14')}</label>
                        <h2 className="text-stil">108</h2>
                    </div>

                    <div className="searchcard-price">
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label15')}</label>
                        <h2 className="text-stil">108</h2>
                    </div>

                    <div className="searchcard-price">
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label16')}</label>
                        <h2 className="text-stil">141</h2>
                    </div>

                    
                    <div className="searchcard-price">
                        <label><Checkbox className="search-card-input text-stil" type="checkbox"/>{t('label17')}</label>
                        <h2 className="text-stil">108</h2>
                    </div>

                    <h2 className="search-seemore-text">{t('see')}</h2>
               </div>
            <div className="search-card-right">
                {hotelList.map(item => (
                    <SectionBoxBorder key={item.id} className="zuich-card" onClick={() => clickHandler(item.id)}>
                        <div>
                            <img alt="photo" src={item.photo}/>
                        </div>
                        <div className="zuich-box">
                                <h2 className="zuich-text">{item.name}</h2>
                            <div className="explore exp-one">
                                <div className="explore-icon">
                                    <img className="explore-path-photo" src="./img/Path.png"/>
                                    <h3 className="explore-path-title">{item.rating} <span className="explore-span-text">({item.reviews} reviews) </span></h3>
                                </div>

                                <div className="explore-icon exp-title">
                                    <img className="explore-path-photo" src="../img/bayroq.png"/>
                                    <h3 className="explore-path-title"><span className="explore-span-text">{item.name} </span></h3>
                                </div>
                            </div>
                            <div className="explore">
                                <div className="explore-icon">
                                    <img className="explore-path-photo" src="../img/map.png"/>
                                    <h3 className="explore-path-title">{item.location}<span className="explore-span-text"> </span></h3>
                                </div>

                                <div className="explore-icon exp-title">
                                    <img className="explore-path-photo" src="../img/date.png"/>
                                    <h3 className="explore-path-title">15.05.2021-16.05.2021<span className="explore-span-text"></span></h3>
                                </div>
                            </div>
                            <div className="explore-icon">
                                <img className="explore-path-photo" src="../img/Vectorsom.png"/>
                                <h3 className="explore-path-title">{t('depature')}<span className="explore-span-text"></span></h3>
                            </div>
                            <div className="explore-icon fre-icon">
                                <img className="explore-path-photo" src="../img/Vectorwifi.png"/>
                                <h3 className="explore-path-title">{t('li1')}<span className="explore-span-text"></span></h3>
                            </div>
                            <div className="explore-icon ">
                                <img className="explore-path-photo" src="../img/Vectorfre.png"/>
                                <h3 className="explore-path-title">{t('li2')}<span className="explore-span-text"></span></h3>
                            </div>
                            <div className="explore-icon ">
                                <img className="explore-path-photo" src="../img/vector3.png"/>
                                <h3 className="explore-path-title">{t('li3')}<span className="explore-span-text"></span></h3>
                            </div>
                            <div className="explore-icon">
                                <img className="explore-path-photo" src="../img/vector4.png"/>
                                <h3 className="explore-path-title">{t('li4')} <span className="explore-span-text"></span></h3>
                            </div>
                            <div className="explore-icon">
                                <img className="explore-path-photo" src="../img/vector5.png"/>
                                <h3 className="explore-path-title">{t('li5')}<span className="explore-span-text"></span></h3>
                            </div>                                        
                        </div>

                        <div className="search-button">
                            <button className="search-card-btn1" type="button">$320 <span className="card-span">For Two</span></button>
                            <button className="search-card-btn2" type="button">{t('bookNow')}</button>
                        </div>
                    </SectionBoxBorder>
                ))}
               <SectionBoxBorder className="zuich-card-buttons">
                   <img className="zuich-photo" src="../img/loader.png"/>
                    <button className="zuich-btn" type="button">{t('view')}</button>
               </SectionBoxBorder>
            </div>
        </DefoultBackground>
    )
}

export default SearchCard
