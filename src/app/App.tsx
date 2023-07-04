import React, { Suspense, useContext, useState } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/classNames';
import useTheme from './providers/ThemeProvider/lib/useTheme';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
   const {theme, switchTheme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
                <button onClick={() =>switchTheme()}>changer themes</button>
            </Suspense>
        </div>
    );
};

export default App;
