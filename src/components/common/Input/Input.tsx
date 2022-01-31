import React from 'react';

interface Label{
    label: string,
    type: string,
    className: string,
    validated: string,
}

const Input = ({label, type, className, validated}: Label) => {
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
            <input type={type} className="input"/>
        </div>
    );
};

export default Input;
