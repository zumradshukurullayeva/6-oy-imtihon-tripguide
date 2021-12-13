import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { GreyBackground } from '../styled'
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();
    const [lang, setLang] = useState(t('language'))

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <GreyBackground className="section ">
            <div className="footer-page">
                <div className="footers">
                    <div className="footer-logo">

                        <div className="footers-logos">
                            <div>  <img src="./img/logo.svg" className="footer-logo-img"/></div>
                            <div> <h2 className="logo-title">TripGuide</h2></div>
                        </div>

                    

                       <h3 className="footer-text">{t('footerText')}</h3>

                    <div className="footer-icons">
                        <img onClick={() => toggleTheme("light")} src="./img/Group.svg" alt="light" className="footer-icon"/>
                        <img onClick={() => toggleTheme("dark")}  src="./img/Vector2.svg" alt="dark" className="footer-icon"/>
                    </div>

                    </div>

                

                    <div className="footer-titles">
                        <h3 className="footer-title">{t('footerTopTheme1')}</h3>
                        <p className="footer-page-text">{t('service1')}</p>
                        <p className="footer-page-text">{t('service2')}</p>
                        <p className="footer-page-text">{t('service3')}</p>
                        <p className="footer-page-text">{t('service4')}</p>
                        <p className="footer-page-text">{t('service5')}</p>
                    </div>

                    <div className="footer-titles">
                        <h3 className="footer-title">{t('footerTopTheme2')}</h3>
                        <p className="footer-page-text">{t('support1')}</p>
                        <p className="footer-page-text">{t('support2')}</p>
                        <p className="footer-page-text">{t('support3')}</p>
                        <p className="footer-page-text">{t('support4')}</p>
                        <p className="footer-page-text">{t('support5')}</p>
                    </div>

                    <div className="footer-titles">
                        <h3 className="footer-title">{t('footerTopTheme3')}</h3>
                        <p className="footer-page-text">{t('business1')}</p>
                        <p className="footer-page-text">{t('business2')}</p>
                        <p className="footer-page-text">{t('business3')}</p>
                        <p className="footer-page-text">{t('business4')}</p>
                        <p className="footer-page-text">{t('business5')}</p>
                    </div>
                </div>
            </div>
        </GreyBackground>
    )
}

export default Footer
