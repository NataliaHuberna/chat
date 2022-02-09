import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Input from '../common/Input/Input';
import { getError } from '../common/Input/helper';
import { StyledParagraphSignOut } from '../common/Paragraph/styled';
import { Link } from 'react-router-dom';
import Selection from '../common/Select/Select';
import DateInput from '../common/DateInput/DateInput';

const USER_OPTIONS = [
    { value: 'male', label: 'male' },
    { value: 'female', label: 'Female' },
];

const AcceptInvitation = () => {
    const {
        handleSubmit,
        formState: {errors},
        control
    } = useForm({
        mode: 'onChange',
    });
    return (
        <form
            onSubmit={handleSubmit((values) => {
                alert(JSON.stringify(values));
            })}>
            <h1>Additional Information</h1>
            <hr/>
            <Controller
                name="first_name"
                control={control}
                rules={{required: true, minLength: 2}}
                render={({field: {onChange}}) => {
                    return <Input hintText="2+ letters" text="FirstName"
                        onChange={onChange} error={getError(errors.firstName?.type, "firstName")}/>;
                }}/>
            <Controller
                name="last_name"
                control={control}
                rules={{required: true, minLength: 2}}
                render={({field: {onChange}}) => {
                    return <Input hintText="2+ letters" text="LastName"
                        onChange={onChange} error={getError(errors.lastName?.type, "lastName")}/>;
                }}/>
            <Controller
                name="date_of_birthday"
                control={control}
                rules={{required: true}}
                render={({field: {onChange}}) => {
                    console.log(onChange);
                    return <DateInput/>;
                }}/>
            <Controller
                name="gender"
                control={control}
                rules={{required: true}}
                render={({field: {onChange}}) => {
                    return <Selection onChange={onChange} options={USER_OPTIONS}/> ;
                }}/>
            <hr/>
            <input className='submit' type="submit" value="Submit"/>
            <StyledParagraphSignOut>
                Want to Log In?
                <Link to="/">Log In</Link>
            </StyledParagraphSignOut>
        </form>
    );
};

export default AcceptInvitation;
