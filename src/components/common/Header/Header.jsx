import React from 'react';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';

const Header = ({text, link, className}) => {
    return (
        <div className='header'>
            <Logo/>
            <p className={className}>
                <Link to={link}>
                    {text}
                </Link>
            </p>
        </div>
    );
};

export default Header;