import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { BACKEND_URL, URL } from 'src/constants/url';
import {REG_EXP} from 'src/constants/regExp';
import { HelperTokenBackFunc } from 'src/helpers/FormtInfo';
import { TProps } from '../AcceptInvitation/AcceptInvitation';
import { FormattedMessage, useIntl } from 'react-intl';
import { idMessages } from 'src/i18n/types';

const NewPassword = ({showNotification}: TProps) => {
    const {
        handleSubmit,
        formState: {errors},
        control
    } = useForm({
        mode: 'onChange',
    });
    const intl = useIntl();
    const navigate = useNavigate();
    const [searchParams,]  = useSearchParams();
    const token = searchParams.get("token");

    return (
        <>
            <StForm
                onSubmit={handleSubmit((values) => {
                    values.password === values.RePassword
                        ? HelperTokenBackFunc({password: values.password},
                            showNotification, navigate, BACKEND_URL.NEW_PASSWORD,URL.DEFAULT_PAGE, token)
                        : showNotification({ type: "fail",
                            message: `${intl.formatMessage({id: idMessages.messagePasswordNotification})}`});
                })}>
                <h1>
                    <FormattedMessage id={idMessages.newPassword}/>
                </h1>
                <StHeadLiner/>
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
                            onChange={onChange} error={getError(errors.password?.type,
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
                            onChange={onChange} error={getError(errors.RePassword?.type,
                            intl.formatMessage({id: idMessages.rePassword}))}/>;
                    }}/>
                <StHeadLiner/>
                <StSubmitInput type="submit" value={intl.formatMessage({ id: idMessages.submit })}/>
            </StForm>
        </>
    );
};

export default NewPassword;
