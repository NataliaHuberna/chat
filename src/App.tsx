import * as React from 'react';
import './App.css';
import {
    Routes,
    Route,
    // useRoutes,
} from "react-router-dom";
import SignIn from './Components/Common/SignIn/SignIn';

function App() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            {/* <Route element={<MainLayout />}>
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/asseptInvitation" element={<AsseptInvitation />} />
              <Route path="/errorInvitation" element={<ErrorInvitation />} />
              <Route path="/newPassword" element={<NewPassword />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/errorForgotPassword" element={<ErrorForgotPassword />} />
            </Route>
            <Route path="/maim" element={<Main />} /> */}
        </Routes>
    );
}

export default App;
