import React from 'react';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { Link } from 'react-router-dom';

const ErrorForgotPassword = () => {
    return (
        <div>
            Sry, your invitation is expired!
            <StyledParagraphSignOut>
                <Link to="/forgotPassword">Click here!</Link>
            </StyledParagraphSignOut>
        </div>
    );
};

export default ErrorForgotPassword;
