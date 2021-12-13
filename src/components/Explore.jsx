import React, { useEffect, useState }  from 'react'
import Slider from "react-slick";
import { DefoultBackground, FilterSectionP, ExploreSectionBox } from '../styled'
import Api from '../config/api'
import { useTranslation } from 'react-i18next';

const Explore = () => {

    const { t } = useTranslation();
    const [lang, setLang] = useState(t('language'))

    const [exploresList, setExploresList] = useState([]);
    useEffect(() => {
        Api.getExplores().then(data => {
            setExploresList(data);
        });
    }, [])

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
        <DefoultBackground className="section">
            <div className="section-title section-title-width">
                <div>
                    <h2 className="top-title">{t('explore')}</h2>
                    <FilterSectionP className="top-text">{t('explorePlace')}</FilterSectionP>
                 </div>
                <div>
                    <img onClick={previous} alt="photo" src="./img/strelka1.svg" className="strelka-photo"/>
                    <img onClick={next} alt="photo" src="./img/strelka2.svg" className="strelka-foto"/>
                </div>
            </div> 

            <div className="explore-cards slider-container">
                <Slider ref={c => (slider = c)} {...settings}>
                    {exploresList.map(item => (
                        <ExploreSectionBox key={item.id} className="explore-card icon-div">
                            <div className="explore-img">
                                <img  alt="photo" src={item.image}/>
                            </div> 
                            <div className="explore-icon">
                                <img className="explore-path-photo" src="./img/Path.png"/>
                                <h3 className="explore-path-title">{item.rating}</h3>
                            </div>
                            <div className="comfort-card">
                                <h2 className="comfort-title">{item.title}</h2>
                                <h2 className="comfort-price">${item.price}</h2>
                            </div>
                                <p className="comfort-distance">{item.radius} to Town Center</p>
                            <div className="comfort-map">
                                <img className="map-photo" src="./img/map.png"/>
                                <p className="comfort-text">{item.location}</p>
                            </div>
                            <div className="comfort-map">
                                <img className="map-photo map-imgs" src="./img/map2.png"/>
                                <p className="comfort-text">Rooms available: {item.rooms}</p>
                            </div>
                        </ExploreSectionBox>
                    ))}
                </Slider>
            </div>
        </DefoultBackground>
    )
}

export default Explore
