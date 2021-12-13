import React, { useEffect, useState } from 'react'
import { DefoultBackground, FilterSectionP, SectionBoxBorder } from '../styled'
import Api from '../config/api'
import { useTranslation } from 'react-i18next';
import Loader from './Loader';

const BestSearch = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const { t } = useTranslation();
    const [bestSearchList, setBestSearchList] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            Api.getBestSearch().then(data => {
                setBestSearchList(data);
                setIsLoading(false);
            });
        }, 2000)
    }, [])

    return isLoading ? (<Loader />) : (
        <DefoultBackground className="section best-section">
            <div className="section-title">
                <div className="tren-titles">
                    <h2 className="best-title">{t('besttitle')}</h2>
                    <FilterSectionP className="best-text">
                        {t('besttext')}
                    </FilterSectionP>
                </div>
            </div>

            <div className="best-cards">
                {bestSearchList.slice(0, 4).map(item =>(
                    <SectionBoxBorder key={item.id} className="best-card">
                        <div className="best-photo">
                            <img alt="photo" src={item.img}/>
                        </div>
                        <div>
                            <h2  className="best-state">{item.name}</h2>
                        </div>
                        <div>
                            <p className="comfort-distance">{item.destinetion}</p>
                        </div>
                    </SectionBoxBorder>
                ))}
            </div>

            <div className="best-cards">
                {bestSearchList.slice(4).map(item =>(
                    <SectionBoxBorder key={item.id} className="best-card">
                        <div className="best-photo">
                            <img alt="photo" src={item.img}/>
                        </div>
                        <div>
                            <h2  className="best-state">{item.name}</h2>
                        </div>
                        <div>
                            <p className="comfort-distance">{item.destinetion}</p>
                        </div>
                    </SectionBoxBorder>
                ))}
            </div>
        </DefoultBackground>
    )
}

export default BestSearch
