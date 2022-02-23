import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { BACKEND_URL,URL } from 'src/constants/url';
import { REG_EXP } from 'src/constants/regExp';
import { HelperFunc } from 'src/helpers/FormtInfo';
import { TProps } from '../AcceptInvitation/AcceptInvitation';
import { idMessages  } from 'src/i18n/types';

const SignIn = ({showNotification}:TProps) => {
    const {
        handleSubmit,
        formState: {errors},
        control
    } = useForm({
        mode: 'onChange',
    });
    const intl = useIntl();
    const navigate = useNavigate();

    return (
        <>
            <StForm
                onSubmit={handleSubmit((values) => {
                    HelperFunc(values, showNotification, navigate, BACKEND_URL.SIGN_IN, URL.MAIN_PAGE);})}>
                <h1>
                    <FormattedMessage id={idMessages.loginLabel}/>
                </h1>
                <StHeadLiner/>
                <Controller
                    name="email"
                    control={control}
                    rules={{required: true, pattern: REG_EXP.EMAIL_MAIN_REG_EXP}}
                    render={({field: {onChange}}) => {
                        return <Input hintText={intl.formatMessage({ id: idMessages.hintEmail })}
                            text={intl.formatMessage({ id: idMessages.email })}
                            onChange={onChange} error={getError(errors.email?.type,
                            intl.formatMessage({ id: idMessages.email }))}/>;
                    }}/>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: true, pattern: REG_EXP.PASSWORD_REG_EXP,
                        minLength: 8, maxLength: 20
                    }}
                    render={({field: {onChange}}) => {
                        return <Input hintText={intl.formatMessage({ id: idMessages.password })}
                            text={intl.formatMessage({ id: idMessages.password })}
                            name={intl.formatMessage({ id: idMessages.password })}
                            onChange={onChange} error={getError(errors.password?.type,
                            intl.formatMessage({ id: idMessages.password }))}/>;
                    }}/>
                <StHeadLiner/>
                <StSubmitInput type="submit" value={intl.formatMessage({ id: idMessages.submit })} />
                <StyledParagraphSignOut>
                    <FormattedMessage id={idMessages.passwordForgot}/>
                    <Link to={URL.FORGOT_PASSWORD}>
                        <FormattedMessage id={idMessages.passwordRestore}/>
                    </Link>
                </StyledParagraphSignOut>
            </StForm>
        </>
    );
};

export default SignIn;
