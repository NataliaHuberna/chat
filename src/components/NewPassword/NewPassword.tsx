import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { BACKEND_URL, URL } from '../../constants/url';
import {REG_EXP} from '../../constants/regExp';
import { HINTS, TEXT_VALUES } from '../../constants/textValues';
import Notification from '../common/Notification/Notification';
import { NotificationContext } from '../../context/NotificationContent';
import { HelperTokenBackFunc } from '../../helpers/FormtInfo';

const NewPassword = () => {
    const {
        handleSubmit,
        formState: {errors},
        control
    } = useForm({
        mode: 'onChange',
    });
    const navigate = useNavigate();
    // @ts-ignore
    const { notification, showNotification } = useContext(NotificationContext);
    const [searchParams,]  = useSearchParams();
    const token = searchParams.get("token");

    return (
        <>
            {notification.type && <Notification message={notification.message} type={notification.type}/>}
            <StForm
                onSubmit={handleSubmit((values) => {
                    values.password === values.RePassword
                        ? HelperTokenBackFunc({password: values.password},
                            showNotification, navigate,BACKEND_URL.NEW_PASSWORD,URL.DEFAULT_PAGE,token)
                        : showNotification({ type: "fail", message: "Password not same"});
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
        </>
    );
};

export default NewPassword;
