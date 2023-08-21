import MainWrapper from "../../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../../components/shared/formatWrappers/WrapAllInMiddle.jsx";

import InputBox from "../../components/shared/forms/InputBox.jsx";
import Button from "../../components/shared/forms/Button.jsx";
import Logo from "../../components/shared/Logo.jsx";
import {Link} from "react-router-dom";

const Login = ({}) => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>
                <div className={`mx-auto max-w-[600px]`}>
                    <Logo maxWidth={`100px`}/>
                    <header className={`text-left my-3`}>Login.</header>
                    <small className={`my-4 block`}>Do not have an account with yet?  <Link
                        className={`underline underline-offset-2`} to={'/signup/register-email'}>Signup</Link></small>
                    <InputBox label={`email`} error={''} placeholder={`Email`}/>
                    <InputBox type={`password`} label={`Password`} error={''} placeholder={`Password`}/>
                    <div className={`w-full text-right pt-2`}>
                        <Link className={`underline underline-offset-2`} to={'/home'}>
                            <Button text={`Next`}/>
                        </Link>
                    </div>
                </div>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default Login;