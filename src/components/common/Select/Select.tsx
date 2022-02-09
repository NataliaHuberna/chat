import React from 'react';
import Select from 'react-select';

const Selection = ({onChange,options }: any) => {
    const handleChange = (value:any) => onChange(value.label);
    return (
        <Select options={options} onChange={handleChange}/>
    );
};

export default Selection;
