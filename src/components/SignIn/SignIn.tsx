import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../common/Form/Form';
import { StyledSignIn } from './styled';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';

const loginInputs = [
    {
        field: "input",
        label: "Email",
        type: "text",
        isValid: undefined,
        validated: "",
        // pattern: '',
        // maxLength
    }, {
        label: "Password",
        type: "password",
        isValid: true,
        validated: "",
    }
];

const SignIn = () => (
    <StyledSignIn>
        <h1>Log In</h1>
        <hr/>
        {/*<Form*/}
        {/*    inputs={loginInputs}*/}
        {/*    submitForm={() => {*/}
        {/*        // const {fieds, isValid} = validateAllfields(state.fields);*/}
        {/*        // if (isValid)*/}
        {/*    }}*/}
        {/*    validateField={""}>*/}
        {/*    /!*<Generator/>*!/*/}
        {/*</Form>*/}
        <StyledParagraphSignOut>
                Forgot password?
            <Link to="/forgotPassword">Restore a password</Link>
        </StyledParagraphSignOut>
    </StyledSignIn>
);

export default SignIn;
