// React.
import React from 'react';

// React Router Dom.
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Pages
import GetStarted from './pages/GetStarted.jsx';
import Signup from './pages/signup/index.jsx';
import ChooseAnAccountType from './pages/signup/ChooseAnAccountType.jsx';
import SubmitDetails from './pages/signup/SubmitDetails.jsx';
import SubmitLoginCredentials from "./pages/signup/SubmitLoginCredentials.jsx";
import SubmitMobileNumber from "./pages/signup/SubmitMobileNumber.jsx";
import Login from "./pages/login/Login.jsx";
import VerifyMobileNumber from "./pages/signup/VerifyMobileNumber.jsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/home' exact element={<GetStarted/>}/>
                    {/*Signup*/}
                    <Route path='/signup' exact element={<Signup/>}/>
                    <Route path='/signup/choose-account-type' exact element={<ChooseAnAccountType/>}/>
                    <Route path='/signup/submit-details' exact element={<SubmitDetails/>}/>
                    <Route path='/signup/submit-login-details' exact element={<SubmitLoginCredentials/>}/>
                    <Route path='/signup/submit-mobile-number' exact element={<SubmitMobileNumber/>}/>
                    <Route path='/signup/verify-mobile-number' exact element={<VerifyMobileNumber/>}/>
                    {/*Signup*/}
                    <Route path='/login' exact element={<Login/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
