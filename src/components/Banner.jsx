import React from 'react'
import background from "../assets/images/beach.png";
import { useTranslation } from 'react-i18next';

const Banner = () => {

    const { t } = useTranslation();

    return ( 
        <>
        <div className="bg-img-photo" style={{ backgroundImage: `url(${background})`}}>
            <div className="intro-title">{t('title')}</div>
        </div>
      
    </>
    )
}

export default Banner;
