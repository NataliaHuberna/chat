// @ts-ignore
export const getError = ( type, fieldName ) => {
    switch (true) {
        case type === "minLength":
            return `Your ${fieldName} too low`;
        case type === "maxLength":
            return `Your ${fieldName} too many symbols`;
        case type === "pattern":
            return `Your ${fieldName} is invalid`;
        case type === "required":
            return `Field ${fieldName} is required`;
        default:
            return null;
    }
};
//     if (type ==="minLength") return `Your ${fieldName} is not correct`
// }
//     {errors?.password?.type === "minLength" && (<p>Your password is not correct</p>)}
//         {errors?.password?.type === "maxLength" && (<p>Password cannot exceed 20 characters</p>)}
//             {errors?.password?.type === "pattern" && (<p>Your password is unvalid</p>)}
// }