import React, {  useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { BACKEND_URL,URL } from '../../constants/url';
import { HINTS, TEXT_VALUES } from '../../constants/textValues';
import { REG_EXP } from '../../constants/regExp';
import Notification from "../common/Notification/Notification";
import {NotificationContext} from "../../context/NotificationContent";
import { HelperFunc } from '../../helpers/FormtInfo';

const SignIn = () => {
    const {
        handleSubmit,
        formState: {errors},
        control
    } = useForm({
        mode: 'onChange',
    });

    const navigate = useNavigate();
    // @ts-ignore
    const {notification, showNotification} = useContext(NotificationContext);

    return (
        <>
            { notification.type && <Notification message={notification.message} type={notification.type} />}
            <StForm
                onSubmit={handleSubmit((values) => {
                    HelperFunc(values, showNotification, navigate,BACKEND_URL.SIGN_IN,URL.MAIN_PAGE);})}>
                <h1>Log In</h1>
                <StHeadLiner/>
                <Controller
                    name="email"
                    control={control}
                    rules={{required: true, pattern: REG_EXP.EMAIL_MAIN_REG_EXP}}
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
                <StHeadLiner/>
                <StSubmitInput type="submit" value={TEXT_VALUES.SUBMIT_VALUE}/>
                <StyledParagraphSignOut>
                Forgot password?
                    <Link to={URL.FORGOT_PASSWORD}>Restore a password</Link>
                </StyledParagraphSignOut>
            </StForm>
        </>
    );
};

export default SignIn;
