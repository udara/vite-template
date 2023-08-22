import RoundedIcon from "../components/shared/RoundedIcon.jsx";
import userIcon from "../assets/icon/user_small.png";

const ContactListAddNew = () => {
    return (
        <div
            className={`flex mt-4 mb-6 items-center gap-4 max-w-[300px] mx-auto hover:bg-primary-form-light-color hover:bg-opacity-25 p-2 rounded-md`}>
            <RoundedIcon iconImg={userIcon}
                         outerDivCustomClass={`w-[40px] h-[40px] grayscale opacity-[60%]`}
                         innerDivCustomClass={`p-2 opacity-[60%]`}/>
            <div className={`flex-grow text-left text-sm`}>New contact</div>
            <div className={`text-left text-sm rotate-90`}>
                <svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24">
                    <path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
                </svg>
            </div>
        </div>
    );
}

export default ContactListAddNew;