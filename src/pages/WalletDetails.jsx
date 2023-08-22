import {Link} from "react-router-dom";

import MainWrapper from "../components/shared/formatWrappers/MainWrapper.jsx";
import WrapApplication from "../components/shared/formatWrappers/WrapApplication.jsx";
import WrapHeader from "../components/shared/formatWrappers/WrapHeader.jsx";

import walletIcon from '../assets/icon/wallet_small.png';
import businessAccountIcon from '../assets/icon/building_small.png';
import personalAccountIcon from '../assets/icon/user_small.png';
import linkIcon from '../assets/icon/link.png';


import Button from "../components/shared/forms/Button.jsx";
import RoundedIcon from "../components/shared/RoundedIcon.jsx";
import RequestListItem from "../components/shared/RequestListItem.jsx";


const WalletDetails = () => {
    const onclickHandler = () => {
        console.log('currency type clicked')
    }
    return (
        <MainWrapper>
            <WrapApplication>
                <WrapHeader>
                    <div className={`flex`}>
                        <div
                            className={`flex items-center justify-center h-[30px] w-[30px]  mr-3 text-xl rounded-full bg-opacity-[30%] bg-primary-form-color`}>&#9664;</div>
                        <header>My Personal</header>
                    </div>

                    <Link to={'/add-user-address'}>
                        <Button customClass={`hidden md:block`} text={`Request Payment Link`}/>
                        <RoundedIcon outerDivCustomClass={`block md:hidden h-[40px] w-[40px] `} iconImg={linkIcon}/>
                    </Link>
                </WrapHeader>

                <div className={`max-w-[400px] max-w-[650px]`}>
                    <p className={`font-semibold my-5`}>Last transaction</p>
                    <div className={`flex justify-between items-center`}>
                        <div>
                            <p className={`font-medium text-2xl`}>0.0022456</p>
                            <p className={`font-medium text-primary-light-color`}>$9,534.00</p>
                        </div>
                        <div className={`flex justify-between items-center gap-4`}>
                            <p className={`font-semibold hidden md:block`}>Your wallet detail</p>
                            <RoundedIcon iconImg={walletIcon} outerDivCustomClass={`h-[40px] w-[40px]`}/>
                        </div>

                    </div>

                    <div className={`flex items-center justify-between mt-10 mb-2`}>
                        <div className={`font-semibold `}>Requests</div>
                        <div className={`font-semibold `}>Pending ⮟</div>
                    </div>

                    <hr className={`text-primary-form-light-color border mb-6 `}/>
                    <RequestListItem
                        receivericonImg={businessAccountIcon}
                        receiverName={`Micheal Smith`}
                        amountInCrypto={`BTC 0.0000585`}
                        amountInFiat={`250 USD`}
                        date={`Thu 3 Aug`}
                        status={`pending`}
                    />
                    <RequestListItem
                        receivericonImg={personalAccountIcon}
                        receiverName={`Brooms Cleaning`}
                        amountInCrypto={`BTC 0.0000105`}
                        amountInFiat={`200 USD`}
                        date={`Thu 3 Aug`}
                        status={`pending`}
                    />
                    <RequestListItem
                        receivericonImg={businessAccountIcon}
                        receiverName={`Micheal Smith`}
                        amountInCrypto={`BTC 0.0000585`}
                        amountInFiat={`250 USD`}
                        date={`Thu 3 Aug`}
                        status={`pending`}
                    />
                    <RequestListItem
                        receivericonImg={businessAccountIcon}
                        receiverName={`Micheal Smith`}
                        amountInCrypto={`BTC 0.0000585`}
                        amountInFiat={`250 USD`}
                        date={`Thu 3 Aug`}
                        status={`pending`}
                    />
                </div>
            </WrapApplication>
        </MainWrapper>
    )
}

export default WalletDetails;