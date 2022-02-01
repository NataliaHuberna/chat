import React from 'react';

interface Label{
    label: string,
    type: string,
    className: string,
    validated: string,
    validateField: any,
}

const Input = ({label,type, validated,validateField,className}: Label) => {
    return (
        <div className={className}>
            <label className="label">{label}
                <i
                    className={validated
                        ? "fa fa-check animate-check"
                        : ""}
                    aria-hidden="true"
                />
            </label>
            <input type={type} className="input" onBlur={validateField}/>
        </div>
    );
};

export default Input;
