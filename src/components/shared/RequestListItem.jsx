import RoundedIcon from "./RoundedIcon.jsx";


import timerIcon from '../../assets/icon/timer.png';
import tickIcon from '../../assets/icon/tick.png';
const RequestListItem = ({
                             receivericonImg,
                             receiverName,
                             amountInCrypto,
                             amountInFiat,
                             date,
                             status,
                         }) => {

    const pendingIcon=<RoundedIcon iconImg={timerIcon} innerDivCustomClass={`p-0`} outerDivCustomClass={`h-[40px] w-[40px] p-2 bg-primary-form-light-color border-0`}/>;
    const completedIcon = <RoundedIcon iconImg={tickIcon} innerDivCustomClass={`p-0`} outerDivCustomClass={`h-[40px] w-[40px] border-0 bg-white`}/>;

    const renderStatusIcon = ({status}) => {
        return pendingIcon
    }

    return (
        <div className={`flex items-center justify-between gap-2 py-4 border-b border-b-primary-form-light-color`}>
            <RoundedIcon iconImg={receivericonImg} innerDivCustomClass={`p-2`} outerDivCustomClass={`h-[40px] w-[40px] border-0 `}/>
            <div className={`w-[30%] text-left`}>
                <p className={`font-semibold text-sm `}>{receiverName}</p>
                <p className={`text-[10px]`}>{date}</p>
            </div>
            <div className={`w-[30%] text-right`}>
                <p className={`font-semibold text-sm`}>{amountInFiat}</p>
                <p className={`text-[10px]`}>{amountInCrypto}</p>
            </div>
            {renderStatusIcon(status)}
        </div>
    );
}

export default RequestListItem;