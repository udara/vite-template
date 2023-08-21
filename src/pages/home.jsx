import { Link } from "react-router-dom";

import MainWrapper from "../components/shared/formatWrappers/MainWrapper.jsx";
import WrapApplication from "../components/shared/formatWrappers/WrapApplication.jsx";


import Logo from '../components/shared/Logo';
import Button from "../components/shared/forms/Button";
import InputBox from "../components/shared/forms/InputBox";
import RoundedIcon from "../components/shared/RoundedIcon.jsx";
import WalletSummery from "../components/shared/WalletSummery.jsx";

import userIcon from '../assets/icon/user_small.png';
import buildingIcon from '../assets/icon/building_small.png';
import bitcoinIcon from '../assets/icon/bitcoin.png';
import WrapHeader from "../components/shared/formatWrappers/WrapHeader.jsx";
import AddWalletButton from "../components/shared/AddWalletButton.jsx";


const GetStarted = () => {
    return (
        <MainWrapper>
            <WrapApplication>
                <WrapHeader>
                    <header>My Wallets</header>
                </WrapHeader>

                <div className={`max-w-[400px] max-w-[650px]`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <WalletSummery
                            iconImg={bitcoinIcon}
                            walletName={`personal`}
                            balanceInCrypto={'0.000140'}
                            balanceInFIAT={'$9,453.00'}
                            cryptoCurrencyCode={'BTC'}
                        />
                        <WalletSummery
                            iconImg={bitcoinIcon}
                            walletName={`personal`}
                            balanceInCrypto={'0.000140'}
                            balanceInFIAT={'$9,453.00'}
                            cryptoCurrencyCode={'BTC'}
                        />
                        <WalletSummery
                            iconImg={bitcoinIcon}
                            walletName={`personal`}
                            balanceInCrypto={'0.000140'}
                            balanceInFIAT={'$9,453.00'}
                            cryptoCurrencyCode={'BTC'}
                        />
                        <Link  to={'/create-your-wallet'}>
                            <AddWalletButton/>
                        </Link>
                    </div>
                </div>
            </WrapApplication>
        </MainWrapper>
    )
}

export default GetStarted;