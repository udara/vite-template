import MainWrapper from "../../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../../components/shared/formatWrappers/WrapAllInMiddle.jsx";

import InputBox from "../../components/shared/forms/InputBox.jsx";
import Button from "../../components/shared/forms/Button.jsx";

const SubmitLoginCredentials = ({}) => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>
                <div className={`mx-auto max-w-[600px]`}>
                    <header className={`text-left my-3`}>Login Credentials.</header>
                    <InputBox label={`email`} error={''} placeholder={`Email`}/>
                    <InputBox type={`password`} label={`Password`} error={''} placeholder={`Password`}/>
                    <InputBox type={`password`} label={`Confirm Password`} error={''} placeholder={`Confirm Password`}/>
                    <div className={`w-full text-right pt-2`}>
                        <Button text={`Next`}/>
                    </div>
                </div>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default SubmitLoginCredentials;