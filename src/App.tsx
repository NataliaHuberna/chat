import * as React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import SignIn from './components/SignIn/index';
import SignUp from './components/SignUp/index';
import ForgotPassword from './components/ForgotPassword/index';
import NewPassword from './components/NewPassword/index';
import AcceptInvitation from './components/AcceptInvitation/index';
import ErrorForgotPassword from './components/ErrorForgotPassword/ErrorForgotPassword';
import ErrorInvitation from './components/ErrorInvitation/ErrorInvitation';
import MainLayout from './components/MainLayout/MainLayout';
import Main from './components/Main/Main';
import { URL } from './constants/url';
import { LOCALES } from 'src/i18n/locales';
import { messages } from 'src/i18n/messages';
import { IntlProvider } from 'react-intl';

const App = () => {
    const locale = LOCALES.ENGLISH;

    return (
        <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={LOCALES.ENGLISH}>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path={URL.DEFAULT_PAGE} element={<SignIn/>}/>
                    <Route path={URL.SIGN_UP} element={<SignUp/>}/>
                    <Route path={URL.ACCEPT_INVITATION} element={<AcceptInvitation/>}/>
                    <Route path={URL.ERROR_INVITATION} element={<ErrorInvitation/>}/>
                    <Route path={URL.NEW_PASSWORD} element={<NewPassword/>}/>
                    <Route path={URL.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
                    <Route path={URL.ERROR_FORGOT_PASSWORD} element={<ErrorForgotPassword/>}/>
                </Route>
                <Route path={URL.MAIN_PAGE} element={<Main/>}/>
            </Routes>
        </IntlProvider>
    );
}
export default App;
