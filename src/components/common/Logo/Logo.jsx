import React from 'react';
import { Link } from 'react-router-dom';
import { LogoImg } from './styled';
import logo from '../../../icons/logo.svg';


const Logo = () => {
    return (
        <Link to="/">
            <LogoImg src={logo} alt="logo"/>
        </Link>
    );
};

export default Logo;
