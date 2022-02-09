import React from 'react';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { Link } from 'react-router-dom';

const ErrorInvitation = () => {
    return (
        <div>
            Sry, your invitation is expired!
            <StyledParagraphSignOut>
                <Link to="/signUp">Click here!</Link>
            </StyledParagraphSignOut>
        </div>
    );
};

export default ErrorInvitation;
