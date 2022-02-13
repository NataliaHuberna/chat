import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import Selection from '../common/Select/Select';
import DateInput from '../common/DateInput/DateInput';
import { StForm, StHeadLiner } from '../common/Form/styled';
import { StSubmitInput } from '../common/Input/styled';
import { getFormattedDate } from '../../helpers/generatorDate';
import { TEXT_VALUES,HINTS } from '../../constants/textValues';
import { BACKEND_URL,URL } from '../../constants/url';
import { NotificationContext } from '../../context/NotificationContent';
import Notification from '../common/Notification/Notification';
import { HelperTokenBackFunc } from '../../helpers/FormtInfo';

const USER_OPTIONS = [
    { value: TEXT_VALUES.MALE, label: TEXT_VALUES.MALE },
    { value: TEXT_VALUES.FEMALE, label: TEXT_VALUES.FEMALE },
];

const AcceptInvitation = () => {
    const {
        handleSubmit,
        formState: { errors },
        control
    } = useForm({
        mode: 'onChange',
    });
    const navigate = useNavigate();
    // @ts-ignore
    const {notification, showNotification} = useContext(NotificationContext);
    const [searchParams,]  = useSearchParams();
    const token = searchParams.get("token");

    return (
        <>
            { notification.type && <Notification message={notification.message} type={notification.type} />}
            <StForm
                onSubmit={handleSubmit((values) => {
                    const res = getFormattedDate(values.date_of_birthday);
                    HelperTokenBackFunc({
                        first_name: values.first_name,
                        last_name: values.last_name,
                        date_of_birthday: res,
                        gender: values.gender,
                    },showNotification, navigate,BACKEND_URL.ACCEPT_INVITATION,URL.MAIN_PAGE,token);
                })}>
                <h1>Additional Information</h1>
                <StHeadLiner/>
                <Controller
                    name="first_name"
                    control={control}
                    rules={{ required: true, minLength: 2 }}
                    render={({ field: { onChange } }) => {
                        return <Input hintText={HINTS.ADDITIONAL_INFO_NAMES} 
                            text={TEXT_VALUES.HEADER_FIRST_NAME[0].toUpperCase()+TEXT_VALUES.HEADER_FIRST_NAME.slice(1)}
                            onChange={onChange} 
                            error={getError(errors.first_name?.type, TEXT_VALUES.HEADER_FIRST_NAME)}/>;
                    }}/>
                <Controller
                    name="last_name"
                    control={control}
                    rules={{ required: true, minLength: 2 }}
                    render={({ field: { onChange } }) => {
                        return <Input hintText={HINTS.ADDITIONAL_INFO_NAMES} 
                            text={TEXT_VALUES.HEADER_LAST_NAME[0].toUpperCase()+TEXT_VALUES.HEADER_LAST_NAME.slice(1)}
                            onChange={onChange} 
                            error={getError(errors.last_name?.type, TEXT_VALUES.HEADER_LAST_NAME)}/>;
                    }}/>
                <Controller
                    name="date_of_birthday"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => {
                        return <DateInput hintText={HINTS.BIRTHDAY_HINT} 
                            text={TEXT_VALUES.HEADER_DATE[0].toUpperCase()+TEXT_VALUES.HEADER_DATE.slice(1)}
                            onChange={onChange} value={value}
                            error={getError(errors.date_of_birthday?.type, TEXT_VALUES.HEADER_DATE)}/>;
                    }}/>
                <Controller
                    name="gender"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => {
                        return <Selection hintText={HINTS.GENDER_HINT} 
                            text={TEXT_VALUES.HEADER_GENDER[0].toUpperCase()+TEXT_VALUES.HEADER_GENDER.slice(1)}
                            onChange={onChange}
                            options={USER_OPTIONS}
                            error={getError(errors.gender?.type, TEXT_VALUES.HEADER_GENDER)}/>;
                    }}/>
                <StHeadLiner/>
                <StSubmitInput type="submit" value={TEXT_VALUES.SUBMIT_VALUE}/>
            </StForm>
        </>
    );
};

export default AcceptInvitation;
