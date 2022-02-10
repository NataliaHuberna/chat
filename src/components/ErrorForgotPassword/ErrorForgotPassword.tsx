import React from 'react';
import { Link } from 'react-router-dom';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { StForm } from '../common/Form/styled';
import { StyledErrorInv } from '../ErrorInvitation/styled';
import {URL} from  '../../constants/url';

const ErrorForgotPassword = () => (
    <StForm>
        <StyledErrorInv>Sry, your invitation is expired!</StyledErrorInv>
        <StyledParagraphSignOut>
            <Link to={URL.FORGOT_PASSWORD}>Click here!</Link>
        </StyledParagraphSignOut>
    </StForm>
);

export default ErrorForgotPassword;
