import React from "react";

import CloseMainNavButton from "./CloseMainNavButton";


const NavigationTop = ({onClickHandle}) => {
    return (
        <div className="px-3 py-1">
            <div className='mt-5'>
                <CloseMainNavButton onClickHandle={onClickHandle}/>
            </div>
        </div>
    )
}

export default NavigationTop;
