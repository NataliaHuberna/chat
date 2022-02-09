import React from 'react';
// import './MainLayout.css';
import Header from '../common/Header/Header';
import { getNextRoute } from '../../helpers/routes';
import { useLocation,Outlet } from 'react-router-dom';

const MainLayout = () => {
    const { link, content } = getNextRoute(useLocation().pathname);
    return (
        <>
            <Header text={content} link={link}/>
            <Outlet/>
        </>
    );
};

export default MainLayout;
