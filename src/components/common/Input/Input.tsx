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
const Input = ({value, onChange, error}:any)  => {
    const handleChange = (e: { target: { value: any; }; }) => onChange(e.target.value);
    console.log(value);
    return (
        <>
            <input onChange={handleChange}/>
            {error && <p>{error}</p>}
        </>
    );
};

export default Input;