import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import {BACKEND_URL} from '../../constants/url';
import {REG_EXP} from '../../constants/regExp';
import { HINTS, TEXT_VALUES } from '../../constants/textValues';

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
            await axios.post(BACKEND_URL.NEW_PASSWORD, body);
            // (Number(status) === 200 ? setRedirect(true) : alert('Your password is not same'));
            setRedirect(true);
        } catch (error) {
            alert(`${error}`);
            return false;
        }
    };
    if (redirect) {
        return <Navigate to={'/'}/>;
    }
    return (
        <StForm
            onSubmit={handleSubmit((values) => {
                values.password === values.RePassword
                    ? registateUser(values)
                    : alert('Your password is not same');
                alert('worked');
            })}>
            <h1>New Password</h1>
            <StHeadLiner/>
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
                    return <Input hintText={HINTS.PASSWORD_HINT}
                        text={TEXT_VALUES.RE_PASSWORD}
                        name={TEXT_VALUES.PASSWORD}
                        onChange={onChange} error={getError(errors.RePassword?.type, TEXT_VALUES.RE_PASSWORD)}/>;
                }}/>
            <StHeadLiner/>
            <StSubmitInput type="submit" value={TEXT_VALUES.SUBMIT_VALUE}/>
        </StForm>
    );
};

export default NewPassword;
