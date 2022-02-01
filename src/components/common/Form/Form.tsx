import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface IForm {
    inputs: Array<any>,
    submitForm: any,
    validateField: any,

}

const Form = ({inputs, submitForm, validateField}: IForm) => {
    const inputsMapped = inputs.map((i) => (
        <Input
            label={i.label}
            type={i.type}
            validated={i.validated}
            validateField={validateField}
            key={i.id}
        />
    ));

    return (
        <form onSubmit={submitForm}>
            {inputsMapped}
            <hr/>
            <Button text="Submit" type="submit" actionToDo={validateField}/>
        </form>
    );
};

export default Form;
