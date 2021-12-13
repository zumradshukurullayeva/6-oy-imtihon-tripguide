import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const GetOur = () => {

    const { t } = useTranslation();
    const [lang, setLang] = useState(t('language'))

    return (
        <div className=" get-our-section">
            <div className="getour-section">
                <div className="get-title">
                    <h1 className="getour-title">{t('offerTheme')} </h1>
                    <p className="getout-text">{t('offerText')}</p>
                </div>
                <div className="getour-input">
                    <input type="text" className="input-text" placeholder="Type your email here"/>
                    <button type="button" className="input-btn">{t('formBtn')}</button>
                </div>
            </div>
        </div>
    )
}

export default GetOur
