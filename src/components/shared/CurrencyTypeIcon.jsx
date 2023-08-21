import RoundedIcon from "./RoundedIcon.jsx";

const currencyTypeIcon = ({
                              iconImg = null,
                              name = null,
                              outerDivCustomClass = `border-black border-2 w-[45px] h-[45px] bg-white mx-auto`,
                              innerDivCustomClass = `m-1 p-1`,
                              onclickHandler = null
                          }) => {
    return (
        <div className={`currencyTypeIcon`} onClick={onclickHandler}>
            <div className={``}>
                <RoundedIcon iconImg={iconImg}
                             outerDivCustomClass={outerDivCustomClass}
                             innerDivCustomClass={innerDivCustomClass}
                />
                <p className={`font-semibold text-sm py-2`}>{name}</p>
            </div>
        </div>
    )
};

export default currencyTypeIcon;