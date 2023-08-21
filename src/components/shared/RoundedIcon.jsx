const RoundedIcon = ({
                         iconImg,
                         outerDivCustomClass = null,
                         innerDivCustomClass = 'm-2 p-1',
                         isActive = true
                     }) => {
    return (

        <div className={`RoundedIcon ${outerDivCustomClass} ${isActive ? null : `grayscale opacity-30`} `}>
            <div className={`${innerDivCustomClass} rounded-full`}>
                <img src={iconImg}/>
            </div>
        </div>

    )
}

export default RoundedIcon;