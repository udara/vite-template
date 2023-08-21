import React, {useState, useEffect} from 'react';

import ToggleMenuButton from "./ToggleMenuButton.jsx";
import NavigationTop from "./NavigationTop.jsx";
import NavMenuItem from "../NavMenuItem.jsx";

import Logo from "../Logo.jsx";


import userIcon from "../../../assets/icon/user_small.png";

const MainNavigation = () => {

    const [isNavHidden, setNavHiddenStatus] = useState(true);
    const [navToggleClass, setNavToggleClass] = useState('-translate-x-full');

    const toggleMenu = () => {
        setNavHiddenStatus(!isNavHidden);
    }

    useEffect(() => {
        isNavHidden
            ? setNavToggleClass('-translate-x-full')
            : setNavToggleClass(null);
    }, [isNavHidden])


    return (
        <>
            <div className='md:bg-transparent w-full overflow-y-auto'>
                <ToggleMenuButton onClickHandle={toggleMenu}/>
            </div>
            <aside
                className={`fixed bg-primary-color md:bg-white top-0 left-0 z-10 w-64 md:w-[310px] h-screen transition-transform sm:translate-x-0 ${navToggleClass}`}
                aria-label="Sidebar">
                <div className='px-2 md:pl-[100px]'>
                    <NavigationTop onClickHandle={toggleMenu}/>
                    <Logo isColorToggleOn={true} customClass={`pb-[30px]`} customImageClass={`w-[100px]`} isCenter={false} />
                    <NavMenuItem iconImg={userIcon} text={`Wallets`} goto={``} />
                    <NavMenuItem iconImg={userIcon} text={`Senders`} isActive={false} />
                    <NavMenuItem iconImg={userIcon} text={`Account Settings`} isActive={false} />
                </div>
            </aside>
        </>
    )
}

export default MainNavigation;