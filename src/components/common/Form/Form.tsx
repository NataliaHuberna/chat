import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface IForm {
    someAction: any,
}

const Form = ({someAction}:IForm) => {
    return (
        <div>
            <form>
                <Input label="Email" type="text" className="field field-in" validated=""/>
                <Input label="Password" type="password" className="field field-in" validated=""/>
                <div>
                    <hr/>
                    <Button text="Submit" type="submit" className="submit-button" actionToDo={someAction}/>
                </div>
            </form>
        </div>
    );
};

export default Form;
