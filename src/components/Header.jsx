import React, { useState } from 'react';
import { HeaderDiv, DropdownContent, DropdownLink, DropdownButton } from '../styled';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { IoMdArrowDropdown } from 'react-icons/io'
import { BiLogOut } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai'

const Dropdown = styled.div`
    position: relative;
    &:hover ${DropdownContent}{
        display: block;
    }
`
const Flag = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
`

const Profile = styled.button`
    border: none;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    background-color: transparent;
    padding: 0;
    margin-left: 10px;
    color: ${(props) => props.theme.profileNameColor};
`
const Header = () => {

    const { t } = useTranslation();
    const [lang, setLang] = useState(t('language'))

    return (
        <HeaderDiv className="header">
            <div className="header-logo">
                <Link  to="/">
                    <img src="./img/logo.svg" className="logo-img"/>
                    <h2 className="logo-title">TripGuide</h2>
                </Link>
            </div>

            <div className="header-right">
                <h3 className="logo-text">USD</h3>
                <Dropdown>
                    <DropdownButton>
                        <Flag style ={{marginRight: '10px'}}>
                            <img style={{width: '20px', height:'20px' }} src={`./img/${lang}.png`} alt="foto" />
                        </Flag>
                    </DropdownButton>
                    <DropdownContent>
                        <DropdownLink href="#"  onClick={() => {i18next.changeLanguage('en') && setLang('en')}}>
                            <Flag>
                                <img style={{width: '20px', height:'20px', marginRight  : '10px'}} src="./img/en.png" alt="flag" />
                            </Flag> {t('lang')}
                            </DropdownLink>
                        <DropdownLink href="#"  onClick={() => {i18next.changeLanguage('ru') && setLang('ru')}}>
                            <Flag>
                                <img style={{width: '20px', height:'20px', marginRight: '10px'}} src="./img/ru.png" alt="flag" />
                            </Flag> {t('lang2')}
                            </DropdownLink>
                        <DropdownLink href="#"  onClick={() => {i18next.changeLanguage('uz') && setLang('uz')}}>
                            <Flag>
                                <img style={{width: '20px', height:'20px',marginRight: '10px'}} src="./img/uz.png" alt="flag" />
                            </Flag> {t('lang3')}
                            </DropdownLink>
                    </DropdownContent>
                </Dropdown>
                <img className="header-logo-not" src="./img/headernot.svg"/>
                <img className="header-logo-person" src="./img/headerperson.svg"/>
                <Dropdown>
                    <Profile>Delowar<IoMdArrowDropdown style={{fontSize: '22px', marginLeft: '17px'}}/></Profile>
                    <DropdownContent>
                        <DropdownLink href="#" ><AiOutlineUserAdd style={{color: `${(props) => props.theme.iconProfile}`, fontSize: '16px', marginRight: '10px'}}/> {t('profile')}</DropdownLink>
                        <DropdownLink href="#" ><BiLogOut style={{color: `${(props) => props.theme.iconProfile}`, fontSize: '18px', marginRight: '10px'}}/>{t('sign')}</DropdownLink>
                    </DropdownContent>
                </Dropdown>
            </div>
        </HeaderDiv>
    );
}

export default Header;

