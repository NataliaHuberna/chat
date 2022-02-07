export const getNextRoute = (currentLink) => {
    switch (currentLink){
        case '/':
            return {link:'/signUp', content: 'Sing Up'};
        case '/sing-up':
            return {link:'/', content: 'Sing In'};
        case '/forgotPassword':
            return {link:'/signUp', content: 'Sing Up'};
        default:
            return {link:'/', content: 'Sing In'};
    }
};