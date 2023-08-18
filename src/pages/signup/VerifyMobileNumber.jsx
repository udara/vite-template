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
                    <header>Verify your phone number with a code.</header>
                    <small className={`block py-3`}>It helps us keep your account secure. <Link className={`underline`} to={`#`}>Learn more</Link></small>
                    <div className={`flex items-center justify-center gap-2 py-2`}>
                        <input type={`text`} className={`pto-box`}/>
                        <input type={`text`} className={`pto-box`}/>
                        <input type={`text`} className={`pto-box`}/>
                        <input type={`text`} className={`pto-box`}/>
                        <input type={`text`} className={`pto-box`}/>
                        <input type={`text`} className={`pto-box`}/>
                    </div>
                    <div className={`w-full text-center pt-3`}>
                        <Button text={`Next`}/>
                    </div>
                </div>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default SubmitMobileNumber;