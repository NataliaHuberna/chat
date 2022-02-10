import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { BACKEND_URL, URL } from '../../constants/url';
import { HINTS, TEXT_VALUES } from '../../constants/textValues';

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
            await axios.post(BACKEND_URL.FORGOT_PASSWORD, body);
            alert('Check your email');
        } catch (error) {
            alert(`${error}`);
            return false;
        }
    };
    return (
        <StForm
            onSubmit={handleSubmit((values) => {
                registateUser(values);
            })}>
            <h1>Forgot Password</h1>
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
            <StHeadLiner/>
            <StSubmitInput type="submit" value={TEXT_VALUES.SUBMIT_VALUE}/>
            <StyledParagraphSignOut>
                Want to Log In?
                <Link to={URL.DEFAULT_PAGE}>Log In</Link>
            </StyledParagraphSignOut>
        </StForm>
    );
};

export default ForgotPassword;
