import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { REG_EXP } from 'src/constants/regExp';
import { HelperFunc } from 'src/helpers/FormtInfo';
import { BACKEND_URL, URL } from 'src/constants/url';
import { TProps } from '../AcceptInvitation/AcceptInvitation';
import { FormattedMessage, useIntl } from 'react-intl';
import { idMessages } from 'src/i18n/types';

const SignUp = ({showNotification}: TProps) => {
    const {
        handleSubmit,
        formState: {errors, isDirty},
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
                    values.password === values.RePassword
                        ? HelperFunc({email: values.email, password: values.password},
                            showNotification, navigate, BACKEND_URL.SIGN_UP, URL.DEFAULT_PAGE)
                        : showNotification({
                            type: "fail",
                            message: `${intl.formatMessage({id: idMessages.messagePasswordNotification})}`
                        });
                })}>
                <h1>
                    <FormattedMessage id={idMessages.signUp}/>
                </h1>
                <StHeadLiner/>
                <Controller
                    name="email"
                    control={control}
                    rules={{required: true, pattern: REG_EXP.EMAIL_MAIN_REG_EXP}}
                    render={({field: {onChange}}) => {
                        return <Input hintText={intl.formatMessage({id: idMessages.hintEmail})}
                                      text={intl.formatMessage({id: idMessages.email})}
                                      onChange={onChange} error={getError(errors.email?.type,
                            intl.formatMessage({id: idMessages.email}))}/>;
                    }}/>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: true, pattern: REG_EXP.PASSWORD_REG_EXP,
                        minLength: 8, maxLength: 20
                    }}
                    render={({field: {onChange}}) => {
                        return <Input hintText={intl.formatMessage({id: idMessages.password})}
                                      text={intl.formatMessage({id: idMessages.password})}
                                      name={intl.formatMessage({id: idMessages.password})}
                                      onChange={onChange}
                                      error={getError(errors.password?.type,
                                          intl.formatMessage({id: idMessages.password}))}/>;
                    }}/>
                <Controller
                    name="RePassword"
                    control={control}
                    rules={{
                        required: true, pattern: REG_EXP.PASSWORD_REG_EXP,
                        minLength: 8, maxLength: 20
                    }}
                    render={({field: {onChange}}) => {
                        return <Input hintText={intl.formatMessage({id: idMessages.password})}
                                      text={intl.formatMessage({id: idMessages.rePassword})}
                                      name={intl.formatMessage({id: idMessages.password})}
                                      onChange={onChange}
                                      error={getError(errors.RePassword?.type,
                                          intl.formatMessage({id: idMessages.rePassword}))}/>;
                    }}/>
                <StHeadLiner/>
                <StSubmitInput type="submit" value={intl.formatMessage({ id: idMessages.submit })}
                               disabled={!isDirty || !!(Object.keys(errors).length)}/>
            </StForm>
        </>
    );
};

export default SignUp;
