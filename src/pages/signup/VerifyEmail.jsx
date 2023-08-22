import {Link} from "react-router-dom";

import MainWrapper from "../../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../../components/shared/formatWrappers/WrapAllInMiddle.jsx";

import InputBox from "../../components/shared/forms/InputBox.jsx";
import Button from "../../components/shared/forms/Button.jsx";

import Logo from "../../components/shared/Logo.jsx";

const VerifyEmail = () => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>
                <div className={`mx-auto max-w-[600px]`}>
                    <Logo maxWidth={`100px`}/>
                    <header className={`text-left my-3`}>Enter email verification code</header>
                    <small className={`my-4 block`}>We have sent an email to sample@domain.com. Enter it below. <Link
                        className={`underline underline-offset-2`} to={'/signup/submit-signup-details'}>Re-enter email</Link></small>
                    <InputBox error={''} placeholder={`Code`}/>
                    <div className={`w-full text-right pt-2`}>
                        <Link className={`underline underline-offset-2`} to={'/signup/submit-mobile-number'}>
                            <Button text={`Continue`}/>
                        </Link>
                    </div>
                    <small className={`my-4 block`}>I didn't receive the code. <Link
                        className={`underline underline-offset-2`} to={'/signup/submit-signup-details'}>Re-send code</Link></small>
                </div>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default VerifyEmail;