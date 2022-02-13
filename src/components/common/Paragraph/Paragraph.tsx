import React from 'react';
import { StyledParagraph } from './styled';
import { Link } from 'react-router-dom';
import { IHeader } from '../Header/Header';

const Paragraph = ({text, link}: IHeader) => (
    <StyledParagraph>
        <Link to={link}>
            {text}
        </Link>
    </StyledParagraph>
);


export default Paragraph;
