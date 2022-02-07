import React from 'react';
// import './MainLayout.css';
import Header from '../common/Header/Header';
import { getNextRoute } from '../../helpers/routes';
import { useLocation } from 'react-router-dom';

const MainLayout = (props:any) => {
    const { link, content } = getNextRoute(useLocation().pathname);

    return (
        <>
            <Header text={content} link={link}/>
            <main>{props.children}</main>
        </>
    );
};

export default MainLayout;
