import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { BACKEND_URL, URL } from 'src/constants/url';
import { REG_EXP } from 'src/constants/regExp';
import { HelperFunc } from 'src/helpers/FormtInfo';
import { TProps } from '../AcceptInvitation/AcceptInvitation';
import { idMessages } from 'src/i18n/types';
import { FormattedMessage, useIntl } from 'react-intl';

const ForgotPassword = ({showNotification}:TProps) => {
    const {
        handleSubmit,
        formState: { errors },
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
                    HelperFunc(values, showNotification, navigate,BACKEND_URL.FORGOT_PASSWORD,URL.DEFAULT_PAGE);})}>
                <h1>
                    <FormattedMessage id={idMessages.passwordForgotString}/>
                </h1>
                <StHeadLiner/>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true, pattern: REG_EXP.EMAIL_MAIN_REG_EXP }}
                    render={({ field: { onChange } }) => {
                        return <Input hintText={intl.formatMessage({ id: idMessages.hintEmail })}
                            text={intl.formatMessage({ id: idMessages.email })}
                            onChange={onChange} error={getError(errors.email?.type,
                            intl.formatMessage({ id: idMessages.email }))}/>;
                    }}/>
                <StHeadLiner/>
                <StSubmitInput type="submit" value={intl.formatMessage({ id: idMessages.submit })}/>
                <StyledParagraphSignOut>
                    <FormattedMessage id={idMessages.login}/>
                    <Link to={URL.DEFAULT_PAGE}>
                        <FormattedMessage id={idMessages.loginLabel}/>
                    </Link>
                </StyledParagraphSignOut>
            </StForm>
        </>
    );
};

export default ForgotPassword;
