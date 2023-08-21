import MainWrapper from "../../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../../components/shared/formatWrappers/WrapAllInMiddle.jsx";

import InputBox from "../../components/shared/forms/InputBox.jsx";
import Button from "../../components/shared/forms/Button.jsx";

const SubmitDetailsPersonal = ({}) => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>
                <div className={`mx-auto max-w-[600px]`}>
                    <header className={`text-left my-3`}>Tell us a bit about yourself</header>
                    <small className={`my-4 block`}>By law, we may need to ask for proof of your address.</small>
                    <InputBox label={`Contact name`} error={''} placeholder={`Contact name`}/>
                    <hr className={`text-primary-form-border-color border my-6 `}/>
                    <InputBox label={`Address 1`} error={''} placeholder={`Address 1`}/>
                    <InputBox label={`Address 2`} error={''} placeholder={`Address 2`}/>
                    <InputBox label={`City`} error={''} placeholder={`City`}/>
                    <InputBox label={`Postcode`} error={''} placeholder={`Postcode`}/>
                    <div className={`w-full text-right pt-2`}>
                        <Button text={`Next`}/>
                    </div>
                </div>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default SubmitDetailsPersonal;