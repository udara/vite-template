// React.
import React from 'react';

const CloseMainNavButton = ({onClickHandle}) => {
    return (
        <>
            <div className='md:hidden text-white font-light hover:font-medium cursor-pointer float-right mb-4 rounded-full w-7 h-7 border-2 text-center  leading-2' onClick={onClickHandle}>X</div>
        </>
    )
}

export default CloseMainNavButton;
