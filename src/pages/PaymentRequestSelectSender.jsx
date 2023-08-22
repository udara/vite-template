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


const PaymentRequestSelectSender = () => {
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
                    <div className={`font-semibold text-center mb-2`}>Who do you want to send the request to?</div>
                    <InputBox error={''} placeholder={`name, email, phone`}/>

                    <ContactListAddNew />

                    <div className={`text-sm `}>Your contacts</div>
                    <hr className={`text-primary-form-light-color border mb-6 `}/>
                    <Link to={'/payment-request-sent'}>
                    <ContactListItem userIcon={userIcon} name={'Lawrence O\'Donnell'} email={`lawrence@domain.com`}/>
                    <ContactListItem userIcon={businessIcon} name={'Avast Accountancy'} email={`contact@avast.com`}/>
                    <ContactListItem userIcon={userIcon} name={'Lawrence O\'Donnell'} email={`lawrence@domain.com`}/>
                    </Link>
                </div>
            </WrapApplication>
        </MainWrapper>
    )
}

export default PaymentRequestSelectSender;