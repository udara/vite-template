import RoundedIcon from "../components/shared/RoundedIcon.jsx";
import userIcon from "../assets/icon/user_small.png";

const ContactListItem = ({userIcon, name, email, isCickable = true}) => {
    const renderArrow = () => {
        if (isCickable) {
            return (
                <div className={`text-left text-sm rotate-90`}>
                    <svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24">
                        <path
                            d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
                    </svg>
                </div>
            )
        }
        return null;
    }
    return (
        <div
            className={`flex mb-6 items-center gap-4 max-w-[300px] mx-auto hover:bg-primary-form-light-color hover:bg-opacity-25 p-2 rounded-md`}>
            <RoundedIcon iconImg={userIcon}
                         outerDivCustomClass={`w-[40px] h-[40px] `}
                         innerDivCustomClass={`p-2`}/>
            <div className={`flex-grow text-left text-sm`}>
                <div className={`font-semibold`}>{name}</div>
                <div>{email}</div>
            </div>
            {renderArrow()}
        </div>
    )
}

export default ContactListItem;