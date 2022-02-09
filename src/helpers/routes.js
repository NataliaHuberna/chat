export const getNextRoute = (currentLink) => {
    switch (currentLink){
        case '/':
            return {link:'/signUp', content: 'Sing Up'};
        case '/forgotPassword':
            return {link:'/signUp', content: 'Sing Up'};
        default:
            return {link:'/', content: 'Sing In'};
    }
};