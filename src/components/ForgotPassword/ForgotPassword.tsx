import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
    const {
        handleSubmit,
        formState: {errors},
        control
    } = useForm({
        mode: 'onChange',
    });
    const registateUser = async(body: any) => {
        try {
            await axios.post('http://sluipgenius.pp.ua/api/forgot-password', body);
            alert('Check your email');
        } catch (error) {
            alert(`${error}`);
            return false;
        }
    };
    return (
        <form
            onSubmit={handleSubmit((values) => {
                registateUser(values);
            })}>
            <h1>Forgot Password</h1>
            <hr/>
            <Controller
                name="email"
                control={control}
                rules={{required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g}}
                render={({field: {onChange}}) => {
                    return <Input hintText="Standard email settings" text="Email"
                        onChange={onChange} error={getError(errors.email?.type, "email")}/>;
                }}/>
            <hr/>
            <input className='submit' type="submit" value="Submit"/>
            <StyledParagraphSignOut>
                Want to Log In?
                <Link to="/">Log In</Link>
            </StyledParagraphSignOut>
        </form>
    );
};

export default ForgotPassword;
