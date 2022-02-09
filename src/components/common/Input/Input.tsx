// import React from 'react';
//
// // @ts-ignore
// const Input = ({ type, register, options }) => {
//     return (
//         <input
//             type={type}
//             {...register(type, options)}
//         />
//     );
// };
// export default Input;
import React from 'react';

// @ts-ignore
const Input = ({value, onChange, error,hintText}:any)  => {
    const handleChange = (e: { target: { value: any; }; }) => onChange(e.target.value);
    console.log(value);
    return (
        <>
            <input onChange={handleChange}/>
            <i title={hintText || null}>!!!</i>
            {error && <p>{error}</p>}
        </>
    );
};

export default Input;