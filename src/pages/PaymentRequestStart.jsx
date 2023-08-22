import {Link} from "react-router-dom";

import MainWrapper from "../components/shared/formatWrappers/MainWrapper.jsx";
import WrapApplication from "../components/shared/formatWrappers/WrapApplication.jsx";
import WrapHeader from "../components/shared/formatWrappers/WrapHeader.jsx";

import doubleHeadedArrowIcon from '../assets/icon/double-headed-arrow.png';
import userIcon from '../assets/icon/user_small.png';
import businessIcon from '../assets/icon/building_small.png';
import svgArrow from '../assets/icon/arrow.svg';

import InputBox from "../components/shared/forms/InputBox.jsx";
import RoundedIcon from "../components/shared/RoundedIcon.jsx";
import ContactListItem from "./ContactListItem.jsx";
import ContactListAddNew from "./ContactListAddNew.jsx";
import Button from "../components/shared/forms/Button.jsx";


const PaymentRequestStart = () => {
    const onclickHandler = () => {
        console.log('currency type clicked')
    }
    return (
        <MainWrapper>
            <WrapApplication>
                <WrapHeader>
                    <div className={`flex`}>
                        <header>Payment Request</header>
                    </div>
                </WrapHeader>

                <div className={`max-w-[400px] mx-auto `}>
                    <div className={`text-sm mb-2`}>The value of the invoice you want to send?</div>
                    <div className={`flex items-center h-5 mb-4 border-2 h-[75px] border-primary-form-light-color rounded-xl p-2`}>
                        <div className={`w-full`}>
                            <p className={`font-medium text-xl`}>0.0022456</p>
                            <p className={`font-medium text-primary-light-color`}>$9,534.00</p>
                        </div>
                        <div className={`w-fit px-3`}>
                            <img src={doubleHeadedArrowIcon} className={` h-[40px]`}/>
                        </div>
                        <div
                            className={`w-fit flex items-center justify-center font-semibold border-l-primary-form-light-color px-2 border-l h-full`}>
                            BTC
                        </div>
                    </div>

                    <InputBox  error={''} placeholder={`Message`} customClasses={`h-[150px]`}/>
                    <div className={`w-full text-right pt-2`}>
                        <Link className={`underline underline-offset-2`} to={'/payment-request-select-sender'}>
                            <Button text={`Select Contact`}/>
                        </Link>
                    </div>
                </div>
            </WrapApplication>
        </MainWrapper>
    )
}

export default PaymentRequestStart;