const RoundedIcon = ({
                         iconImg,
                         outerDivCustomClass = null,
                         innerDivCustomClass = 'm-2 p-1'
                     }) => {
    return (

        <div className={`RoundedIcon ${outerDivCustomClass}`}>
            <div className={`${innerDivCustomClass} rounded-full`}>
                <img src={iconImg}/>
            </div>
        </div>

    )
}

export default RoundedIcon;