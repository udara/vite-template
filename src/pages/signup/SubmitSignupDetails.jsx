import {Link} from "react-router-dom";

import MainWrapper from "../../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../../components/shared/formatWrappers/WrapAllInMiddle.jsx";

import InputBox from "../../components/shared/forms/InputBox.jsx";
import Button from "../../components/shared/forms/Button.jsx";

import Logo from "../../components/shared/Logo.jsx";

const SubmitSignupDetails = () => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>
                <div className={`mx-auto max-w-[600px]`}>
                    <Logo maxWidth={`100px`}/>
                    <header className={`text-left my-3`}>Create your account.</header>
                    <small className={`my-4 block`}>Already have an account? <Link
                        className={`underline underline-offset-2`} to={'/login'}>Login</Link></small>
                    <InputBox label={`Name`} error={''} placeholder={`John Smith`}/>
                    <InputBox label={`Email`} type={`email`} error={''} placeholder={`j.smith@domain.com`}/>
                    <InputBox label={`Password`} type={`password`} error={''} />
                    <InputBox label={`Confirm password`} type={`password`} error={''} />
                    <div className={`w-full text-right pt-2`}>
                        <Link className={`underline underline-offset-2`} to={'/signup/submit-mobile-number'}>
                            <Button text={`Continue`}/>
                        </Link>
                    </div>
                </div>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default SubmitSignupDetails;