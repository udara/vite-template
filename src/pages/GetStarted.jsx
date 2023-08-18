import MainWrapper from "../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../components/shared/formatWrappers/WrapAllInMiddle.jsx";


import Logo from '../components/shared/Logo';
import Button from "../components/shared/forms/Button";
import InputBox from "../components/shared/forms/InputBox";
import RoundedIcon from "../components/shared/RoundedIcon.jsx";
import WalletSummery from "../components/shared/WalletSummery.jsx";

import userIcon from '../assets/icon/user_small.png';
import buildingIcon from '../assets/icon/building_small.png';
import bitcoinIcon from '../assets/icon/bitcoin.png';
import ethereumIcon from '../assets/icon/ethereum.png';

const GetStarted = () => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>
                <Logo maxWidth={`100px`}/>
                <header>Start reciving cryptocurrency payments today.</header>
                <Button/>
                <InputBox label={`Contact name`} error={'Required'} placeholder={`Contact name`}/>
                <RoundedIcon iconImg={userIcon} innerDivCustomClass={'m-2 p-1'} />
                <RoundedIcon iconImg={buildingIcon} innerDivCustomClass={'m-3 p-1'} />
                <WalletSummery
                    iconImg={bitcoinIcon}
                    walletName={`personal`}
                    balanceInCrypto={'0.000140'}
                    balanceInFIAT={'$9,453.00'}
                    cryptoCurrencyCode={'BTC'}
                />
                
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default GetStarted;