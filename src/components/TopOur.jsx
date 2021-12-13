import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { DefoultBackground, FilterSectionP } from '../styled'
import Api from '../config/api'
import { useTranslation } from 'react-i18next';

const TopOur = () => {

    const { t } = useTranslation();
    const [lang, setLang] = useState(t('language'))
    const [tourList, setTourList] = useState([]);
    useEffect(() => {
        Api.getTours().then(data => {
            setTourList(data);
        });
    }, [])

    let slider;

    const next = () => {
        slider.slickNext();
    }
    const previous = () => {
        slider.slickPrev();
    }

    const settings = {
        dots: false,
        infinitea: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false
    }

    return (
        <DefoultBackground className="section">
            <div className="section-title section-title-width">
                <div>
                    <h2 className="top-title">{t('topTour')}</h2>
                    <FilterSectionP className="top-text">{t('calm')}</FilterSectionP>
                </div>

                <div>
                    <img onClick={previous} alt="photo" src="./img/strelka1.svg" className="strelka-photo"/>
                    <img onClick={next} alt="photo" src="./img/strelka2.svg" className="strelka-foto"/>
                </div>
            </div> 

            <div className="top-photo slider-container">
                <Slider ref={c => (slider = c)} {...settings}>
                    {tourList.map(item => (
                        <div key={item.id} className="top-boxes icon-div">
                           <img alt="photo" src={item.photo} className="state-photo"/>
                           <h2 className="state-title">{item.name}</h2>
                           <div className="out-titles">
                               <h2 className="out-page-title">{item.country}</h2>
                               <p className=" out-page-text">{item.place_count} Popular Places</p>
                           </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </DefoultBackground>
    )
}

export default TopOur
