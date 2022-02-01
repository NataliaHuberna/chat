import React from 'react';
import Header from '../common/Header/Header';
import Form from '../common/Form/Form';

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

const SignUp = () => {

    return (
        <>
            <Header text='Sign In Here' link='/' className='header-title'/>
            <div className="sign-up">
                <h1>Sign Up</h1>
                <hr/>
                <Form
                    inputs={signupInputs}
                    submitForm={() => {
                    }}
                    validateField={() => {
                    }}/>
            </div>
        </>
    );
};

export default SignUp;
