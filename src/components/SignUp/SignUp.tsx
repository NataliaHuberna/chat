import React from 'react';
import Header from '../common/Header/Header';
import Form from '../common/Form/Form';
import { StyledSignUp } from './styled';

const signupInputs = [
    {
        label: "Email",
        type: "email",
        show: false,
        validated: "",
        id: "d"
    }, {
        label: "Password",
        type: "password",
        show: false,
        validated: "",
        id: "e"
    }, {
        label: "Re-Enter Password",
        type: "password",
        show: false,
        validated: "",
        id: "f"
    }
];

const SignUp = () => (
    <>
        <Header text='Sign In Here' link='/'/>
        <StyledSignUp>
            <h1>Sign Up</h1>
            <hr/>
            <Form
                inputs={signupInputs}
                submitForm={() => {
                }}
                validateField={() => {
                }}/>
        </StyledSignUp>
    </>
);

export default SignUp;
