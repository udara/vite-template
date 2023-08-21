import {Link} from "react-router-dom";

import MainWrapper from "../../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../../components/shared/formatWrappers/WrapAllInMiddle.jsx";
import Logo from '../../components/shared/Logo';
import Button from "../../components/shared/forms/Button";

const Signup = () => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>
                <Logo/>
                <header className={`my-3`}>Start receiving cryptocurrency payments today.</header>
                <div className={`w-full pt-2`}>
                    <Link to={'/signup/choose-account-type'}>
                        <Button text={`Get started`}/>
                    </Link>
                </div>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default Signup;