import React from 'react';

interface IButton {
    text: string,
    className: string,
    type: 'submit' | 'button',
    actionToDo: any,
}

const Button = ({text, className, type, actionToDo}: IButton) => {
    return (
        <button type={type} className={className} onClick={actionToDo}>{text}</button>
    );
};

export default Button;
