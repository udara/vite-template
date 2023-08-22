import {Link} from "react-router-dom";

import MainWrapper from "../components/shared/formatWrappers/MainWrapper.jsx";
import WrapApplication from "../components/shared/formatWrappers/WrapApplication.jsx";
import WrapHeader from "../components/shared/formatWrappers/WrapHeader.jsx";

import doneIcon from '../assets/icon/tick.png';
import userIcon from '../assets/icon/user_small.png';

import RoundedIcon from "../components/shared/RoundedIcon.jsx";
import ContactListItem from "./ContactListItem.jsx";
import Logo from "../components/shared/Logo.jsx";
import InputBox from "../components/shared/forms/InputBox.jsx";
import Button from "../components/shared/forms/Button.jsx";


const PaymentRequestConfirmation = () => {

    return (
        <MainWrapper>
            <WrapApplication>
                <div className={`max-w-[400px] mx-auto text-center `}>
                    <div className={`w-full space-y-6`}>

                    <header>Payment Request sent!</header>
                    <small className={`block`}>Your request expires on 21 September 2023.</small>
                        <RoundedIcon iconImg={doneIcon} innerDivCustomClass={`p-0`}
                                     outerDivCustomClass={`mx-auto border-0`}/>
                    <InputBox  value={`https://zapup.com/pay/r/HhIE-MJG-9BIxjA`} customClasses={`text-center`} error={''} placeholder={``}/>
                        <Link to={'#'}>
                            <Button text={`Copy Link`}/>
                        </Link>
                    <div className={`text-sm`}>Your payment link was sent to:</div>
                        <div>
                            <div className={`font-semibold`}>Lawrence O'Donnell</div>
                            <div>lawrence@domain.com</div>
                        </div>
                    </div>

                </div>
            </WrapApplication>
        </MainWrapper>
    )
}

export default PaymentRequestConfirmation;