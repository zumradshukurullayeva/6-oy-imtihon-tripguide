import React, { useEffect, useState } from 'react'
import { GreyBackground, FilterSectionP, ExploreSectionBox } from '../styled'
import Api from '../config/api'
import { useTranslation } from 'react-i18next';

const Trending = () => {

    const { t } = useTranslation();
    const [lang, setLang] = useState(t('language'))

    const [cityList, setCityList] = useState([]);
    useEffect(() => {
        Api.getCities().then(data => {
            setCityList(data);
        });
    }, [])
    return (
        <GreyBackground className="section">
            <div className="section-title">
                <div className="tren-titles">
                    <h2 className="top-title">{t('trendingTheme')}</h2>
                    <FilterSectionP className="top-text tren-text">
                        {t('trendingText')}
                    </FilterSectionP>
                </div>
            </div>

            <div className="tren-boxes">
                {cityList.slice(0, 2).map(item => (
                    <ExploreSectionBox key={item.id} className="tren-box">
                        <div className="tren-photo">
                            <img alt="photo" src={item.photo}/>
                        </div>
                        <div className="tren-texts">
                            <div><h3 className="tren-texts-title">{item.name}</h3></div>   
                            <div className=" tren-pricess">
                                <img className="explore-path-photo" src="./img/Path.png"/>
                                <h3 className="explore-path-title ">{item.rating}</h3>
                            </div>
                            <div><h2 className="tren-price">${item.price}<span className="tren-span">/{t('night')}</span></h2></div> 
                            <div><button type="button" className="tren-btn">{t('bookNow')}</button></div> 
                        </div>
                    </ExploreSectionBox>
                ))}
            </div>

            <div className="tren-boxes">
                {cityList.slice(2, 4).map(item => (
                    <ExploreSectionBox key={item.id} className="tren-box">
                        <div className="tren-photo">
                            <img alt="photo" src={item.photo}/>
                        </div>
                        <div className="tren-texts">
                            <div><h3 className="tren-texts-title">{item.name}</h3></div>   
                            <div className=" tren-pricess">
                                <img className="explore-path-photo" src="./img/Path.png"/>
                                <h3 className="explore-path-title ">{item.rating}</h3>
                            </div>
                            <div><h2 className="tren-price">${item.price}<span className="tren-span">/{t('night')}</span></h2></div> 
                            <div><button type="button" className="tren-btn">{t('bookNow')}</button></div> 
                        </div>
                    </ExploreSectionBox>
                ))}
            </div>

            <div className="tren-boxes">
                 {cityList.slice(4).map(item => (
                    <ExploreSectionBox key={item.id} className="tren-box">
                        <div className="tren-photo">
                            <img alt="photo" src={item.photo}/>
                        </div>
                        <div className="tren-texts">
                            <div><h3 className="tren-texts-title">{item.name}</h3></div>   
                            <div className=" tren-pricess">
                                <img className="explore-path-photo" src="./img/Path.png"/>
                                <h3 className="explore-path-title ">{item.rating}</h3>
                            </div>
                            <div><h2 className="tren-price">${item.price}<span className="tren-span">/{t('night')}</span></h2></div> 
                            <div><button type="button" className="tren-btn">{t('bookNow')}</button></div> 
                        </div>
                    </ExploreSectionBox>
                ))}
            </div>

            
            
        </GreyBackground>
    )
}

export default Trending
