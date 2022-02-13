import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from '../common/Header/Header';
import { getNextRoute } from '../../helpers/routes';
import { StMain } from './styled';

const MainLayout = () => {
    const { link, content } = getNextRoute(useLocation().pathname);
    return (
        <>
            <Header text={content} link={link}/>
            <StMain>
                <Outlet/>
            </StMain>
        </>
    );
};

export default MainLayout;
