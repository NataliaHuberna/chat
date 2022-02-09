import React from 'react';
import { LogoImg } from './styled';
import logo from '../../../icons/logo.svg';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <LogoImg src={logo} alt="logo"/>
        </Link>
    );
};

export default Logo;
