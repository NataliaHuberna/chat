import React from 'react';
import Logo from '../Logo/Logo';
import { StyledHeader } from './styled';
import Paragraph from '../Paragraph/Paragraph';

export interface IHeader {
    text: string,
    link: string,
}

const Header = ({text, link}: IHeader) => (
    <StyledHeader>
        <Logo/>
        <Paragraph text={text} link={link} />
    </StyledHeader>
);

export default Header;
