import MainWrapper from "../components/shared/formatWrappers/MainWrapper.jsx";
import WrapApplication from "../components/shared/formatWrappers/WrapApplication.jsx";
import WrapHeader from "../components/shared/formatWrappers/WrapHeader.jsx";

import CurrencyTypeIcon from "../components/shared/CurrencyTypeIcon.jsx";

import bitcoinIcon from '../assets/icon/bitcoin.png';
import ethereumIcon from '../assets/icon/ethereum.png';
import InputBox from "../components/shared/forms/InputBox.jsx";
import {Link} from "react-router-dom";
import Button from "../components/shared/forms/Button.jsx";



const GetUserAddress = () => {
    const onclickHandler= () => {
        console.log('currency type clicked')
    }
    return (
        <MainWrapper>
            <WrapApplication>
                <WrapHeader>
                    <header>Your address details</header>
                </WrapHeader>

                <div className={`max-w-[400px] max-w-[650px]`}>
                    <p className={`font-semibold my-5`}>Your address details</p>
                    <small className={`my-4 block`}>By law, we may need to ask for proof of your address.</small>
                    <InputBox label={`Country`} error={''} placeholder={`UK`}/>
                    <hr className={`text-primary-form-border-color border my-6 `}/>
                    <InputBox label={`Address 1`} error={''} placeholder={`Unit`}/>
                    <InputBox label={`Address 2`} error={''} placeholder={`Street`}/>
                    <InputBox label={`City`} error={''} placeholder={`City`}/>
                    <InputBox label={`Postcode`} error={''} placeholder={`Postcode`}/>
                    <div className={`w-full text-right pt-2`}>
                        <Link className={`underline underline-offset-2`} to={'/home'}>
                            <Button text={`Update User Address`}/>
                        </Link>
                    </div>
                </div>
            </WrapApplication>
        </MainWrapper>
    )
}

export default GetUserAddress;