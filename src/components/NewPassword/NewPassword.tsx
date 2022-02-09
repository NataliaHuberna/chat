import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const NewPassword = () => {
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
            await axios.post('http://sluipgenius.pp.ua/api/new-password', body);
            // (Number(status) === 200 ? setRedirect(true) : alert('Your password is not same'));
            setRedirect(true);
        } catch (error) {
            alert('Your login or password not valid');
            return false;
        }
        // finally {
        //
        // }
    };
    if (redirect) {
        return <Navigate to={'/'}/>;
    }
    return (
        <form
            onSubmit={handleSubmit((values) => {
                values.password === values.RePassword
                    ? registateUser(values)
                    : alert('Your password is not same');
            })}>
            <h1>New Password</h1>
            <hr/>
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
            <input className='submit' type="submit" value="Submit"/>
        </form>
    );
};

export default NewPassword;
