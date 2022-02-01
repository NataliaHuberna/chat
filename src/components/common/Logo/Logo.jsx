import React from 'react';
import {LogoImg} from './styled';
import logo from '../../../images/Logo.png';

const Logo = () => {
    return (
        <LogoImg src={logo} alt="logo"/>
    );
};

export default Logo;