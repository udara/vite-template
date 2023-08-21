import * as React from "react";
import logoImgLight from '../../assets/logo-white.png';
import logoImgDark from '../../assets/logo.png';

const Logo = ({
                  customImageClass = 'w-[150px]',
                  customClass = null,
                  isCenter = true,
                  isColorToggleOn = false

              }) => {
    if (isColorToggleOn) {
        return (
            <div className={`${customClass}`}>
                <img src={logoImgLight}
                     className={`max-w-[300px] block md:hidden ${isCenter ? `mx-auto` : null}  ${customImageClass}`}/>
                <img src={logoImgDark}
                     className={`max-w-[300px] hidden md:block ${isCenter ? `mx-auto` : null}  ${customImageClass}`}/>
            </div>
        )
    } else {
        return <img src={logoImgDark}
                    className={`max-w-[300px] ${isCenter ? `mx-auto` : null}  ${customImageClass}`}/>
    }

}

export default Logo;