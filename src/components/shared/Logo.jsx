import * as React from "react";
import logoImg from '../../assets/logo.jpg';
const Logo = ({ customImageClass = 'w-[150px]', customClass = null }) => {
    return (
        <div className={`${customClass}`}>
            <img src={logoImg} className={`max-w-[300px] mx-auto ${customImageClass}`} />
        </div>
    )
}

export default Logo;