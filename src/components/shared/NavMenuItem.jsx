import RoundedIcon from "./RoundedIcon.jsx";
import userIcon from "../../assets/icon/user_small.png";

const NavMenuItem = ({
                         text = 'Text',
                         link = null,
                         iconImg,
                         outerDivCustomClass = `h-[40px] w-[40px]`,
                         innerDivCustomClass = `m-1 p-1`,
                         isActive = true
                     }) => {
    return (
        <div className={`flex items-center justify-start gap-4 my-4 text-white md:text-black`}>
            <RoundedIcon iconImg={userIcon} isActive={isActive} outerDivCustomClass={`h-[40px] w-[40px]`}
                         innerDivCustomClass={'m-1 p-1'}/>
            <p className={`font-semibold`}>{text}</p>
        </div>
    )
}

export default NavMenuItem;