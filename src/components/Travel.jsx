import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { DefoultBackground } from '../styled'
import { useTranslation } from 'react-i18next';

const Travel = () => {

    const { t } = useTranslation();
    const [lang, setLang] = useState(t('language'))

    let slider;

    const next = () => {
        console.log(slider)
        slider.slickNext();
    }
    const previous = () => {
        slider.slickPrev();
    }

    const settings = {
        dots: false,
        infinitea: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false
    }
    return (
        <DefoultBackground className="section travel-section">
            <div className="section-title section-title-width">
                <div>
                    <h2 className="top-title">{t('themepassion')}</h2>
                    <p className="top-text">{t('StopShop')}</p>
                </div>
                <div>
                    <img onClick={previous} alt="photo"  src="./img/strelka1.svg" className="strelka-photo"/>
                    <img onClick={next} alt="photo"  src="./img/strelka2.svg" className="strelka-foto"/>
                </div>
            </div> 

            <div className="boxes slider-container">
                <Slider ref={c => (slider = c)} {...settings}>
                    <div className="box icon-div">
                        <div className="box-card">
                            <img className="box-photo" src="./img/stat1.png"/>
                        </div>
                        <div className="boxes-titles">
                            <h2 className="boxes-text">{t('passionName1')}</h2>
                                <div className="explore-icon">
                                    <img className="explore-path-photo" src="./img/starstat.png"/>
                                    <h3 className="explore-path-title">4.8 (122 {t('reviews')})</h3>
                                </div>
                        </div>
                    </div>

                    <div className="box icon-div">
                        <div className="box-card">
                            <img src="./img/stat2.png"/>
                        </div>
                        <div className="boxes-titles">
                            <h2 className="boxes-text">{t('passionName2')}</h2>
                                <div className="explore-icon">
                                    <img className="explore-path-photo" src="./img/starstat.png"/>
                                    <h3 className="explore-path-title">4.8 (122 {t('reviews')})</h3>
                                </div>
                        </div>
                    </div>

                    <div className="box icon-div">
                        <div className="box-card">
                            <img src="./img/stat3.png"/>
                        </div>
                        <div className="boxes-titles">
                            <h2 className="boxes-text">{t('passionName3')}</h2>
                                <div className="explore-icon">
                                    <img className="explore-path-photo" src="./img/starstat.png"/>
                                    <h3 className="explore-path-title">4.8 (122 {t('reviews')})</h3>
                                </div>
                        </div>
                    </div>

                    <div className="box icon-div">
                        <div className="box-card">
                            <img src="./img/stat4.png"/>
                        </div>
                        <div className="boxes-titles">
                            <h2 className="boxes-text">{t('passionName4')}</h2>
                                <div className="explore-icon">
                                    <img className="explore-path-photo" src="./img/starstat.png"/>
                                    <h3 className="explore-path-title">4.8 (122 {t('reviews')})</h3>
                                </div>
                        </div>
                    </div>
                    <div className="box icon-div">
                        <div className="box-card">
                            <img src="./img/stat4.png"/>
                        </div>
                        <div className="boxes-titles">
                            <h2 className="boxes-text">{t('passionName4')}</h2>
                                <div className="explore-icon">
                                    <img className="explore-path-photo" src="./img/starstat.png"/>
                                    <h3 className="explore-path-title">4.8 (122 {t('reviews')})</h3>
                                </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </DefoultBackground>
    )
}

export default Travel
