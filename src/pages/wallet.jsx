import MainWrapper from "../components/shared/formatWrappers/MainWrapper.jsx";
import WrapApplication from "../components/shared/formatWrappers/WrapApplication.jsx";
import WrapHeader from "../components/shared/formatWrappers/WrapHeader.jsx";

import CurrencyTypeIcon from "../components/shared/CurrencyTypeIcon.jsx";

import bitcoinIcon from '../assets/icon/bitcoin.png';
import ethereumIcon from '../assets/icon/ethereum.png';
import InputBox from "../components/shared/forms/InputBox.jsx";
import {Link} from "react-router-dom";
import Button from "../components/shared/forms/Button.jsx";



const wallet = () => {
    const onclickHandler= () => {
        console.log('currency type clicked')
    }
    return (
        <MainWrapper>
            <WrapApplication>
                <WrapHeader>
                    <div className={`flex`}>
                        <div className={`flex items-center justify-center h-[30px] w-[30px]  mr-3 text-xl rounded-full bg-opacity-[30%] bg-primary-form-color`}>&#9664;</div>
                        <header>My Personal</header>
                    </div>

                    <Link className={`underline underline-offset-2`} to={'/add-user-address'}>
                        <Button text={`Request Payment Link`}/>
                    </Link>
                </WrapHeader>

                <div className={`max-w-[400px] max-w-[650px]`}>
                    <p className={`font-semibold my-5`}>Choose currency type</p>
                    <div className="grid grid-cols-3 justify-items-center ">
                        <CurrencyTypeIcon iconImg={bitcoinIcon} name={`Bitcoin`} code={`BTC`} onclickHandler={onclickHandler} />
                        <CurrencyTypeIcon iconImg={ethereumIcon} name={`Ethereum`} code={`ETH`} onclickHandler={onclickHandler}/>
                        <CurrencyTypeIcon iconImg={bitcoinIcon} name={`Bitcoin`} code={`BTC`} onclickHandler={onclickHandler} />
                        <CurrencyTypeIcon iconImg={ethereumIcon} name={`Ethereum`} code={`ETH`} onclickHandler={onclickHandler}/>
                        <CurrencyTypeIcon iconImg={bitcoinIcon} name={`Bitcoin`} code={`BTC`} onclickHandler={onclickHandler} />
                        <CurrencyTypeIcon iconImg={ethereumIcon} name={`Ethereum`} code={`ETH`} onclickHandler={onclickHandler}/>
                    </div>
                    <hr className={`text-primary-form-border-color border my-6 `}/>
                    <InputBox label={`Wallet short name`} error={''} placeholder={`e.g. "Personal", "Business"`}/>
                    <hr className={`text-primary-form-border-color border my-6 `}/>
                    <InputBox label={`Wallet Address`} error={''} placeholder={`xxx-xxxx-xxxxx-xxx`}/>
                    <InputBox label={`Confirm wallet address`} error={''} placeholder={`xxx-xxxx-xxxxx-xxx`}/>
                    <div className={`w-full text-right pt-2`}>
                        <Link className={`underline underline-offset-2`} to={'/add-user-address'}>
                            <Button text={`Create Wallet`}/>
                        </Link>
                    </div>
                </div>
            </WrapApplication>
        </MainWrapper>
    )
}

export default wallet;