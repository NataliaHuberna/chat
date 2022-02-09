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
import { ReactComponent as HelpIcon } from "../../../icons/help.svg";

// @ts-ignore
const Input = ({onChange, error, hintText, text, name}: any) => {
    const handleChange = (e: {target: {value: any;};}) => onChange(e.target.value);
    return (
        <div className='field'>
            <label>{text}</label>
            <div className='wrapperInput'>
                <input type={name} className='input' onChange={handleChange}/>
                <div style={{"width": "50px", "color": "lightgreen"}}>
                    <HelpIcon title={hintText || null}/>
                </div>
            </div>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Input;
