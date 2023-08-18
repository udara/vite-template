import RoundedIcon from "./RoundedIcon.jsx";

const WalletSummery = ({
                           iconImg,
                           customClass = null,
                           walletName = null,
                           balanceInCrypto = null,
                           balanceInFIAT = null,
                           cryptoCurrencyCode = null
                       }) => {
    return (

        <div className={`WalletSummery ${customClass}`}>
            <RoundedIcon iconImg={iconImg}
                         outerDivCustomClass={`border-black border-2 w-[45px] h-[45px] bg-white`}
                         innerDivCustomClass={`m-1 p-1`}
            />
            <p className={`font-semibold text-sm py-2`}>{walletName}</p>
            <p className={`font-semibold text-base`}>{balanceInCrypto}</p>
            <p className={`font-semibold text-[11px] text-[#9fa6ee]`}>{balanceInFIAT}</p>
            <p className={`font-semibold text-[12px] pt-2`}>{cryptoCurrencyCode}</p>
        </div>

    )
}

export default WalletSummery;