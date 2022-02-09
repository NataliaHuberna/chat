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
import {ReactComponent as HelpIcon} from "../../../icons/help.svg";
// import {ReactComponent as Help2 }from "../../../icons/216643_help_icon.svg";

// @ts-ignore
const Input = ({value, onChange, error }:any)  => {
    const handleChange = (e: { target: { value: any; }; }) => onChange(e.target.value);
    console.log(value);
    return (
        <>
            <input onChange={handleChange}/>
            <div style={{"width":"50px", "color": "lightgreen"}}>
                <HelpIcon/>
            </div>
            {/*<div style={{"width":"50px"}}>*/}
            {/*    <Help2/>*/}
            {/*</div>*/}
            {/*<i title={hintText || null}>!!!</i>*/}
            {error && <p>{error}</p>}
        </>
    );
};

export default Input;