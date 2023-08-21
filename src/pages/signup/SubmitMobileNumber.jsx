import { Link } from "react-router-dom";

import MainWrapper from "../../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../../components/shared/formatWrappers/WrapAllInMiddle.jsx";

import InputBox from "../../components/shared/forms/InputBox.jsx";
import SelectBox from "../../components/shared/forms/selectBox.jsx";
import Button from "../../components/shared/forms/Button.jsx";

import IddData from "../../data/CountryCodes.json";
import Logo from "../../components/shared/Logo.jsx";

const SubmitMobileNumber = () => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>
                <div className={`mx-auto max-w-[600px]`}>
                    <Logo customClass={`py-2`} customImageClass={`w-[150px]`} />
                    <header className={`my-3`}>Verify your phone number with a code.</header>
                    <small className={`my-4 block`}>It helps us keep your account secure. <Link className={`underline`} to={`#`}>Learn more</Link></small>
                    <div className={`flex items-center justify-center mx-auto gap-1 max-w-[300px]`}>
                        <div className={`w-3/12`}>
                            <SelectBox/>
                        </div>
                        <div className={`w-9/12`}>
                            <InputBox error={''} placeholder={`Mobile`}/>
                        </div>
                    </div>
                    <div className={`w-full text-center pt-2`}>
                        <div className={`w-full text-right pt-2`}>
                            <Link className={`underline underline-offset-2`} to={'/signup/verify-mobile-number'}>
                                <Button text={`Continue`}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default SubmitMobileNumber;