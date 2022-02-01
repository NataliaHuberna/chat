import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface IForm {
    inputs: Array<any>,
    submitForm: any,
    validateField:any,

}

const Form = ({inputs,submitForm,validateField}:IForm) => {
    const inputsMapped = inputs.map((i) => (
        <Input
            label={i.label}
            type={i.type}
            validated={i.validated}
            validateField={validateField}
            className="field field-in"
            key={i.id}
        />
    ));

    return (
        <div>
            <form onSubmit={submitForm}>
                {inputsMapped}
                <div>
                    <hr/>
                    <Button text="Submit" type="submit" className="submit-button" actionToDo={validateField}/>
                </div>
            </form>
        </div>
    );
};

export default Form;
