import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../common/Form/Form';
import Header from '../common/Header/Header';
import { StyledSignIn } from './styled';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';

const loginInputs = [
    {
        label: "Email",
        type: "text",
        show: true,
        validated: "",
        id: "a"
    }, {
        label: "Password",
        type: "password",
        show: true,
        validated: "",
        id: "b"
    }
];

const SignIn = () => (
    <>
        <Header text='Sign Up Here' link='/signUp'/>
        <StyledSignIn>
            <h1>Log In</h1>
            <hr/>
            <Form
                inputs={loginInputs}
                submitForm={() => {
                }}
                validateField={() => {
                }}/>
            <StyledParagraphSignOut>
                Forgot password?
                <Link to="/forgotPassword">
                    Restore a password
                </Link>
            </StyledParagraphSignOut>
        </StyledSignIn>
    </>
);

export default SignIn;
