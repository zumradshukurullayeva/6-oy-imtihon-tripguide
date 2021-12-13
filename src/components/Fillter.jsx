import React from 'react';
import { useNavigate } from "react-router-dom";
import { FilterSectionDiv, FilterSectionBox, FilterSectionP } from '../styled'
import { useTranslation } from 'react-i18next';

const Fillter = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();
    
    const searchHandler = () => {
        navigate("/search")
    }
    return (
        <div>
        <FilterSectionDiv className="fillter-page fillters-section">
            <div className="fillters">  
                <div className="filter-icon">
                    <div className="fillter-hotel">
                        <img src="./img/Shape.svg" className="fillter-photo"/>
                        <p>{t('searchName')}</p>
                    </div>

                    <div className="fillter-hotel">
                        <img src="./img/Shape1.svg" className="fillter-photo" />
                        <p>{t('searchName2')}</p>
                    </div>

                    <div className="fillter-hotel">
                        <img src="./img/Shape2.svg" className="fillter-photo"/>
                        <p>{t('searchName3')}</p>
                    </div>
                </div>

                <div className="fillter-round">
                    <div className="fillter-round-left">
                        <h2 className="round-text">{t('passionName3')}</h2>
                        <img className="vector-photo" src="./img/Vector.svg"/>
                    </div>

                    <div className="fillter-round-ringht">
                        <h2 className="round-text">1 {t('passanger')}</h2>
                        <img src="./img/Vector.svg"/>
                    </div>

                </div>
            </div> 
            <hr className="dashe"/>

            <div className="location-search">

                <FilterSectionBox className="location">
                    <h2 className="location-title">{t('searchInput')}</h2>
                    <FilterSectionP className="location-text">{t('placeholder1')}</FilterSectionP>
                </FilterSectionBox>

                <img src="./img/arrow.svg" className="arrow-photo"/>

                <FilterSectionBox className="check-in">
                    <h2 className="location-title">{t('searchInput2')}</h2>
                    <FilterSectionP className="location-text">{t('placeholder2')}</FilterSectionP>
                </FilterSectionBox>

                <img src="./img/arrow.svg" className="arrow-foto"/>
                
                <FilterSectionBox className="check-out">
                    <h2 className="location-title">{t('searchInput3')}</h2>
                    <FilterSectionP className="location-text">{t('placeholder2')}</FilterSectionP>
                </FilterSectionBox>

                <button className="btn" onClick={searchHandler}>{t('searchBtn')}</button>

            </div>
        </FilterSectionDiv>
        </div>
    )
}

export default Fillter;
