import MainWrapper from "../../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../../components/shared/formatWrappers/WrapAllInMiddle.jsx";


import RoundedIcon from "../../components/shared/RoundedIcon.jsx";

import userIcon from "../../assets/icon/user_small.png";
import businessIcon from "../../assets/icon/building_small.png";
import Logo from "../../components/shared/Logo.jsx";
import {Link} from "react-router-dom";

const ChooseAnAccountType = () => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>

                <Logo maxWidth={`100px`}/>
                <header className={`my-3`}>Choose an account type.</header>
                <div className={`flex items-center mx-auto justify-center max-w-[500px] gap-[10%] py-3`}>

                    <Link to={`/signup/submit-signup-details`}>
                        <div
                            className={`w-[180px] bg-opacity-50 hover:bg-opacity-75 border border-primary-form-border-color bg-primary-form-border-color  p-2 rounded`}>
                            <div className={`w-full`}></div>
                            <RoundedIcon iconImg={userIcon}
                                         outerDivCustomClass={`mx-auto`}
                                         innerDivCustomClass={'m-2 p-1'}
                            />
                            <p className={`font-semibold my-2`}>Personal account</p>
                            <small className={`max-w-[70%] mx-auto block`}>Lorem ipsum dolor sit amet, consectetur
                                tque.</small>
                        </div>
                    </Link>

                    <Link to={`/signup/submit-signup-details`}>
                        <div
                            className={`w-[180px] bg-opacity-50 hover:bg-opacity-75 border border-primary-form-border-color bg-primary-form-border-color  p-2 rounded`}>
                            <div className={`w-full`}></div>
                            <RoundedIcon iconImg={businessIcon}
                                         outerDivCustomClass={`mx-auto`}
                                         innerDivCustomClass={'m-2 p-1'}/>
                            <p className={`font-semibold my-2`}>Business account</p>
                            <small className={`max-w-[70%] mx-auto block`}>Perferendis quaerat quia quo
                                reprehenderit</small>
                        </div>
                    </Link>
                </div>
                <small className={`my-4 block`}>Find out more about <Link
                    className={`underline underline-offset-2`} to={'/signup/#'}>Account types</Link></small>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default ChooseAnAccountType;