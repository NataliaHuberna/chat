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
