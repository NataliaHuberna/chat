import React from 'react';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { Link } from 'react-router-dom';
import { StForm } from '../common/Form/styled';
import { StyledErrorInv } from './styled';
import {URL} from  '../../constants/url';

const ErrorInvitation = () =>  (
    <StForm>
        <StyledErrorInv>Sry, your invitation is expired!</StyledErrorInv>
        <StyledParagraphSignOut>
            <Link to={URL.SIGN_UP}>Click here!</Link>
        </StyledParagraphSignOut>
    </StForm>
);

export default ErrorInvitation;
