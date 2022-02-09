import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import '../SignIn/slyles.css';
import { Navigate } from "react-router-dom";
// import axios from 'axios';

const SignUp = () => {
    const {
        handleSubmit,
        formState: {errors, isDirty},
        control
    } = useForm({
        mode: 'onChange',
    });
    const [redirect, setRedirect] = useState(false);
    // const registateUser = async(body: any) => {
    //     try {
    //         await axios.post('http://sluipgenius.pp.ua/api/sign-up', body);
    //     } catch (error) {
    // alert('Some problems with server');
    //         return false;
    //     } finally {
    //
    //     }
    // };
    if (redirect) {
        return <Navigate to={'/'}/>;
    }
    return (
        <form
            onSubmit={handleSubmit((values) => {
                if (values.password === values.RePassword) {
                    alert(JSON.stringify(values));
                    setRedirect(true);
                } else {
                    alert('Your password is not same');
                }
                // registateUser(values);
            })}>
            <h1>Sign Up</h1>
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
            <Controller
                name="RePassword"
                control={control}
                rules={{
                    required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/s,
                    minLength: 8, maxLength: 20
                }}
                render={({field: {onChange}}) => {
                    return <Input hintText="8-20 symbols, 1 upper letter, 1 number"
                        text="Re-Password" name="password"
                        onChange={onChange} error={getError(errors.password?.type, "RePassword")}/>;
                }}/>
            <hr/>
            <input className='submit' type="submit" value="Submit"
                disabled={!isDirty}/>
        </form>
    );
};

export default SignUp;
