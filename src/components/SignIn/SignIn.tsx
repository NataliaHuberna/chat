import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../common/Form/Form';
import Header from '../common/Header/Header';

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

const SignIn = () => {

    return (
        <>
            <Header text='Sign Up Here' link='/signUp' className='header-title'/>
            <div className="login">
                <h1>Log In</h1>
                <hr/>
                <Form
                    inputs={loginInputs}
                    submitForm={()=>{}}
                    validateField={()=>{}}/>
                <div className='signup-link'>
                    <p className='in-out'>
                        Forgot password?
                        <Link to="/forgotPassword">
                            Restore a password
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SignIn;
