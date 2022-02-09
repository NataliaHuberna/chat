import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './slyles.css';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { Link, Navigate } from 'react-router-dom';
// import { StyledSignIn } from './styled';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import axios from 'axios';

const SignIn = () => {
    const {
        handleSubmit,
        formState: {errors},
        control
    } = useForm({
        mode: 'onChange',
    });
    const [redirect, setRedirect] = useState(false);
    const registateUser = async(body: any) => {
        try {
            await axios.post('http://sluipgenius.pp.ua/api/sign-in', body);
            setRedirect(true);
        } catch (error) {
            alert(`${error}`);
            return false;
        }
        // finally {
        //
        // }
    };
    if (redirect) {
        return <Navigate to={'/main'}/>;
    }
    return (
        <form
            onSubmit={handleSubmit((values) => {
                registateUser(values);
            })}>
            <h1>Log In</h1>
            <hr/>
            <Controller
                name="email"
                control={control}
                rules={{required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g}}
                render={({field: {onChange}}) => {
                    return <Input hintText="Standard email settings" text="Email"
                        onChange={onChange} error={getError(errors.email?.type, "email")}/>;
                }}/>
            <Controller
                name="password"
                control={control}
                rules={{
                    required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/s,
                    minLength: 8, maxLength: 20
                }}
                render={({field: {onChange}}) => {
                    return <Input hintText="8-20 symbols, 1 upper letter, 1 number" text="Password" name="password"
                        onChange={onChange} error={getError(errors.password?.type, "password")}/>;
                }}/>
            <hr/>
            <input className='submit' type="submit" value="Submit"/>
            <StyledParagraphSignOut>
                Forgot password?
                <Link to="/forgotPassword">Restore a password</Link>
            </StyledParagraphSignOut>
        </form>
    );
};

export default SignIn;
