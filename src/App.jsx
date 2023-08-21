// React.
import React from 'react';

// React Router Dom.
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Navigation
import MainNavigation from "./components/shared/navigation/MainNavigation.jsx";

// Pages
import Home from './pages/home.jsx';
import Signup from './pages/signup/index.jsx';
import GetUserAddress from "./pages/GetUserAddress.jsx";
import ChooseAnAccountType from './pages/signup/ChooseAnAccountType.jsx';
import SubmitDetailsPersonal from './pages/signup/SubmitDetailsPersonal.jsx';
import SubmitSignupDetails from "./pages/signup/SubmitSignupDetails.jsx";
import SubmitMobileNumber from "./pages/signup/SubmitMobileNumber.jsx";
import Login from "./pages/login/Login.jsx";
import VerifyMobileNumber from "./pages/signup/VerifyMobileNumber.jsx";
import CreateYourWallet from "./pages/createYourWallet.jsx";
import Wallet from "./pages/wallet.jsx";

function App() {
    return (
        <>
            <MainNavigation/>
            <Router>
                <Routes>
                    <Route path='/home' exact element={<Home/>}/>
                    <Route path='/create-your-wallet' exact element={<CreateYourWallet/>}/>
                    <Route path='/add-user-address' exact element={<GetUserAddress/>}/>
                    <Route path='/wallet' exact element={<Wallet/>}/>
                    {/*Signup*/}
                    <Route path='/signup' exact element={<Signup/>}/>
                    <Route path='/signup/choose-account-type' exact element={<ChooseAnAccountType/>}/>
                    <Route path='/signup/submit-signup-details' exact element={<SubmitSignupDetails/>}/>
                    <Route path='/signup/submit-details-personal' exact element={<SubmitDetailsPersonal/>}/>
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
