import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { BACKEND_URL, URL } from '../../constants/url';
import { HINTS, TEXT_VALUES } from '../../constants/textValues';
import { REG_EXP } from '../../constants/regExp';
import { NotificationContext } from '../../context/NotificationContent';
import Notification from '../common/Notification/Notification';
import { HelperFunc } from '../../helpers/FormtInfo';

const ForgotPassword = () => {
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm({
        mode: 'onChange',
    });

    const navigate = useNavigate();
    // @ts-ignore
    const { notification, showNotification } = useContext(NotificationContext);

    return (
        <>
            {notification.type && <Notification message={notification.message} type={notification.type}/>}
            <StForm
                onSubmit={handleSubmit((values) => {
                    HelperFunc(values, showNotification, navigate,BACKEND_URL.FORGOT_PASSWORD,URL.DEFAULT_PAGE);})}>
                <h1>Forgot Password</h1>
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
                <StHeadLiner/>
                <StSubmitInput type="submit" value={TEXT_VALUES.SUBMIT_VALUE}/>
                <StyledParagraphSignOut>
                    Want to Log In?
                    <Link to={URL.DEFAULT_PAGE}>Log In</Link>
                </StyledParagraphSignOut>
            </StForm>
        </>
    );
};

export default ForgotPassword;
