import React, { useState } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router 
} from 'react-router-dom';
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import Book from './pages/Book';
import Hotel from './pages/Hotel';
import YourTrip from './pages/YourTrip';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import { DarkTheme, LightTheme } from "./styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from './locales/uz.json'
import ru from './locales/ru.json'
import en from './locales/en.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      },
      uz: {
        translation: uz
      }
    },
    lng: 'en',
    fallbackLng: 'en'
  });

const App = () => {

  const [theme, toggleTheme] = useState('light');

  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
          <div className="App">
            <Router>
              <Header/>
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/search' element={<Search/>} />
                <Route exact path='/book' element={<Book/>} />
                <Route exact path='/hotel' element={<Hotel/>} />
                <Route exact path='/yourtrip' element={<YourTrip/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
    
  );
}

export default App;

