import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { BACKEND_URL, URL } from '../../constants/url';
import { REG_EXP } from '../../constants/regExp';
import { HINTS, TEXT_VALUES } from '../../constants/textValues';
import { NotificationContext } from '../../context/NotificationContent';
import Notification from '../common/Notification/Notification';

const SignUp = () => {
    const {
        handleSubmit,
        formState: { errors, isDirty },
        control
    } = useForm({
        mode: 'onChange',
    });
    const navigate = useNavigate();
    // @ts-ignore
    const { notification, showNotification } = useContext(NotificationContext);

    const registateUser = async (body: any) => {
        try {
            await axios.post(BACKEND_URL.SIGN_UP, body);
            showNotification({ type: "success", message: `You was successfully registered!` });
            setTimeout(() =>navigate(URL.DEFAULT_PAGE), 3000);
        } catch (error) {
            // @ts-ignore
            showNotification({ type: "fail", message: `${error.response.data.data}` });
            return false;
        }
    };

    return (
        <>
            {notification.type && <Notification message={notification.message} type={notification.type}/>}
            <StForm
                onSubmit={handleSubmit((values) => {
                    values.password === values.RePassword
                        ? registateUser({email: values.email,password:values.password })
                        : showNotification({ type: "fail", message: "Password not same"});
                })}>
                <h1>Sign Up</h1>
                <StHeadLiner/>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true, pattern: REG_EXP.EMAIL_MAIN_REG_EXP }}
                    render={({ field: { onChange } }) => {
                        return <Input hintText={HINTS.EMAIL_HINT}
                            text={TEXT_VALUES.EMAIL[0].toUpperCase() + TEXT_VALUES.EMAIL.slice(1)}
                            onChange={onChange} error={getError(errors.email?.type, TEXT_VALUES.EMAIL)}/>;
                    }}/>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: true, pattern: REG_EXP.PASSWORD_REG_EXP,
                        minLength: 8, maxLength: 20
                    }}
                    render={({ field: { onChange } }) => {
                        return <Input hintText={HINTS.PASSWORD_HINT}
                            text={TEXT_VALUES.PASSWORD[0].toUpperCase() + TEXT_VALUES.PASSWORD.slice(1)}
                            name={TEXT_VALUES.PASSWORD}
                            onChange={onChange}
                            error={getError(errors.password?.type, TEXT_VALUES.PASSWORD)}/>;
                    }}/>
                <Controller
                    name="RePassword"
                    control={control}
                    rules={{
                        required: true, pattern: REG_EXP.PASSWORD_REG_EXP,
                        minLength: 8, maxLength: 20
                    }}
                    render={({ field: { onChange } }) => {
                        return <Input hintText={HINTS.PASSWORD_HINT}
                            text={TEXT_VALUES.RE_PASSWORD}
                            name={TEXT_VALUES.PASSWORD}
                            onChange={onChange}
                            error={getError(errors.RePassword?.type, TEXT_VALUES.RE_PASSWORD)}/>;
                    }}/>
                <StHeadLiner/>
                <StSubmitInput type="submit" value={TEXT_VALUES.SUBMIT_VALUE}
                    disabled={!isDirty || !!(Object.keys(errors).length)}/>
            </StForm>
        </>
    );
};

export default SignUp;
