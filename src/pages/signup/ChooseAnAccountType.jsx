import MainWrapper from "../../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../../components/shared/formatWrappers/WrapAllInMiddle.jsx";


import RoundedIcon from "../../components/shared/RoundedIcon.jsx";

import userIcon from "../../assets/icon/user_small.png";
import businessIcon from "../../assets/icon/building_small.png";
import Logo from "../../components/shared/Logo.jsx";

const ChooseAnAccountType = () => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>
                <Logo/>
                <header>Choose an account type.</header>
                <div className={`flex items-center mx-auto justify-center max-w-[500px] gap-[20%]`}>
                    <div className={``}>
                        <RoundedIcon iconImg={userIcon} innerDivCustomClass={'m-2 p-1'}/>
                        <p className={`font-semibold my-2`}>Personal</p>
                    </div>
                    <div>
                        <RoundedIcon iconImg={businessIcon} innerDivCustomClass={'m-2 p-1'}/>
                        <p className={`font-semibold my-2`}>Business</p>
                    </div>
                </div>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default ChooseAnAccountType;