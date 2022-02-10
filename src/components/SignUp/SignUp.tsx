import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { BACKEND_URL,URL } from '../../constants/url';
import { REG_EXP } from '../../constants/regExp';
import { HINTS, TEXT_VALUES } from '../../constants/textValues';

const SignUp = () => {
    const {
        handleSubmit,
        formState: {errors, isDirty},
        control
    } = useForm({
        mode: 'onChange',
    });
    const [redirect, setRedirect] = useState(false);
    const registateUser = async(body: any) => {
        try {
            await axios.post(BACKEND_URL.SIGN_UP, body);
        } catch (error) {
            alert('Some problems with server');
            return false;
        }
    };
    if (redirect) {
        return <Navigate to={URL.DEFAULT_PAGE}/>;
    }
    return (
        <StForm
            onSubmit={handleSubmit((values) => {
                if (values.password === values.RePassword) {
                    registateUser(values);
                    alert(JSON.stringify(values));
                    setRedirect(true);
                } else {
                    alert('Your password is not same');
                }
                // registateUser(values);
            })}>
            <h1>Sign Up</h1>
            <StHeadLiner/>
            <Controller
                name="email"
                control={control}
                rules={{required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g}}
                render={({field: {onChange}}) => {
                    return <Input hintText={HINTS.EMAIL_HINT}
                        text={TEXT_VALUES.EMAIL[0].toUpperCase()+TEXT_VALUES.EMAIL.slice(1)}
                        onChange={onChange} error={getError(errors.email?.type, TEXT_VALUES.EMAIL)}/>;
                }}/>
            <Controller
                name="password"
                control={control}
                rules={{
                    required: true, pattern: REG_EXP.PASSWORD_REG_EXP,
                    minLength: 8, maxLength: 20
                }}
                render={({field: {onChange}}) => {
                    return <Input hintText={HINTS.PASSWORD_HINT}
                        text={TEXT_VALUES.PASSWORD[0].toUpperCase()+TEXT_VALUES.PASSWORD.slice(1)}
                        name={TEXT_VALUES.PASSWORD}
                        onChange={onChange} error={getError(errors.password?.type, TEXT_VALUES.PASSWORD)}/>;
                }}/>
            <Controller
                name="RePassword"
                control={control}
                rules={{
                    required: true, pattern: REG_EXP.PASSWORD_REG_EXP,
                    minLength: 8, maxLength: 20
                }}
                render={({field: {onChange}}) => {
                    return <Input  hintText={HINTS.PASSWORD_HINT}
                        text={TEXT_VALUES.RE_PASSWORD}
                        name={TEXT_VALUES.PASSWORD}
                        onChange={onChange} error={getError(errors.RePassword?.type, TEXT_VALUES.RE_PASSWORD)}/>;
                }}/>
            <StHeadLiner/>
            <StSubmitInput type="submit" value={TEXT_VALUES.SUBMIT_VALUE}
                disabled={!isDirty || !!(Object.keys(errors).length)}/>
        </StForm>
    );
};

export default SignUp;
