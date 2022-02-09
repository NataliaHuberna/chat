import React from 'react';
import { useForm,Controller  } from "react-hook-form";
import './slyles.css';
import Input from '../common/Input/Input';
import {getError} from '../common/Input/helper';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from 'react-router-dom';
// import { StyledSignIn } from './styled';
// import { StyledParagraphSignOut } from '../common/Paragraph/styled';

// const loginInputs = [
//     {
//         field: "input",
//         label: "Email",
//         type: "text",
//         isValid: undefined,
//         validated: "",
//         // pattern: '',
//         // maxLength
//     }, {
//         label: "Password",
//         type: "password",
//         isValid: true,
//         validated: "",
//     }
// ];
// <StyledSignIn>
//     <h1>Log In</h1>
//     <hr/>
//     <Form
//         inputs={loginInputs}
//         submitForm={() => {
//             // const {fieds, isValid} = validateAllfields(state.fields);
//             // if (isValid)
//         }}
//         validateField={""}>
//         {/*<Generator/>*/}
//     </Form>
//     <StyledParagraphSignOut>
//             Forgot password?
//         <Link to="/forgotPassword">Restore a password</Link>
//     </StyledParagraphSignOut>
// </StyledSignIn>
const SignIn = () => {
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm({
        mode: 'onChange',
    });
    console.log(errors);
    return (
        <form
            onSubmit={handleSubmit((values) => {
                alert(JSON.stringify(values));
            })}
        >
            {/*<input*/}
            {/*    type="password"*/}
            {/*    {...register("password",*/}
            {/*        {*/}
            {/*            required: true,*/}
            {/*            minLength: 8,*/}
            {/*            maxLength: 20,*/}
            {/*            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/s*/}
            {/*        })}*/}
            {/*/>*/}
            {/*<Input type="password" register={register} options={{*/}
            {/*    required: true,*/}
            {/*    minLength: 8,*/}
            {/*    maxLength: 20,*/}
            {/*    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/s*/}
            {/*}} />*/}
            <Controller
                name="password"
                control={control}
                rules={{ required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g }}
                render={({ field: {onChange, value} }) => {
                    return <Input
                        onChange={onChange} value={value} error={getError(errors.password?.type, "password")}/>;
                }} />
            <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: {onChange, value} }) => {
                    return <Input
                        onChange={onChange} value={value} error={getError(errors.email?.type, "email")}/>;
                }} />
            {/*<FontAwesomeIcon icon="fa-solid fa-circle-info" />*/}
            <input type="submit"/>
        </form>
    );
};

export default SignIn;
