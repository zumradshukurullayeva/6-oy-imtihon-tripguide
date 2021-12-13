import React, { useState }  from 'react'
import { DefoultBackground, FilterSectionP } from '../styled'
import { useTranslation } from 'react-i18next';

const Destinations = () => {

    const { t } = useTranslation();
    const [lang, setLang] = useState(t('language'))
    return (
        <DefoultBackground className="section">
            <div className="section-title">
                <div>
                    <h2 className="top-title">{t('featuredtheme')}</h2>
                    <FilterSectionP className="top-text">
                        {t('featuedtext')}
                    </FilterSectionP>
                </div>
            </div>

            <div className="grid-container">
                <div className="grid-item">
                    <img src="./img/image1.png" className="grid-item-img"/>
                    <div>
                        <h2 className="grid-num">3.5</h2>
                    </div>
                    <div>
                        <h2 className="grid-titles">{t('tourname')}</h2>
                    </div>
                    <div className="grid-logos">
                        <img className="finder-imgs" src="./img/finder.svg"/>
                        <h3 className="grid-texts">196 {t('touractivitie')}</h3>
                    </div>
                        
                    
                </div>
                <div className="grid-item">
                    <img src="./img/image2.png" className="grid-item-img"/>
                    <div>
                        <h2 className="grid-num">3.5</h2>
                    </div>
                    <div>
                        <h2 className="grid-title">{t('toursNameMiddle2')}</h2>
                    </div>
                    <div className="grid-logo">
                        <img className="finder-img" src="./img/finder2.svg"/>
                        <h3 className="grid-text2">196 {t('touractivitie')}</h3>
                    </div>
                </div>
                <div className="grid-item">
                    <img src="./img/image3.png" className="grid-item-img"/>
                    <div>
                        <h2 className="grid-num">3.5</h2>
                    </div>
                    <div>
                        <h2 className="grid-title-london">{t('toursNameMiddle')}</h2>
                    </div>
                    <div className="grid-logo-london">
                        <img className="finder-img" src="./img/finder2.svg"/>
                        <h3 className="grid-text">196 {t('touractivitie')}</h3>
                    </div>
                </div>
                <div className="grid-item">
                    <img src="./img/image4.png" className="grid-item-img"/>
                    <div>
                        <h2 className="grid-num">3.5</h2>
                    </div>
                    <div>
                        <h2 className="grid-title australia-title">{t('toursNameMiddle2')}</h2>
                    </div>
                    <div className="grid-logo-london">
                        <img className="finder-img" src="./img/finder2.svg"/>
                        <h3 className="grid-text">196 {t('touractivitie')}</h3>
                    </div>
                </div>
                <div className="grid-item">
                    <img src="./img/image5.png" className="grid-item-img"/>
                    <div>
                        <h2 className="grid-num">3.5</h2>
                    </div>
                    <div>
                        <h2 className="grid-title japan-title">{t('toursNameSmall')}</h2>
                    </div>
                    <div className="grid-logo">
                        <img className="finder-img" src="./img/finder2.svg"/>
                        <h3 className="grid-text">196 {t('touractivitie')}</h3>
                    </div>
                </div>
                <div className="grid-item">
                    <img src="./img/image6.png" className="grid-item-img"/>
                    <div>
                        <h2 className="grid-num">3.5</h2>
                    </div>
                    <div>
                        <h2 className="grid-title japan-title">{t('toursNameSmall')}</h2>
                    </div>
                    <div className="grid-logo">
                        <img className="finder-img" src="./img/finder2.svg"/>
                        <h3 className="grid-text">196 {t('touractivitie')}</h3>
                    </div>
                </div>
            </div>
        </DefoultBackground>
    )
}

export default Destinations
