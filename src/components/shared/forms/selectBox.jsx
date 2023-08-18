const SelectBox = ({
                       type = 'text',
                       name = null,
                       optionList = [],
                       ref = null,
                       placeholder = null,
                       label = null,
                       onSelectHandler = null,
                       error = null,

                   }) => {
    return (
        <div className={`w-full text-left`}>
            <label className={`w-full`}>{label}</label>
            <select
                name={name}
                ref={ref}
                className={`selectBox`}
                placeholder={placeholder}
                onSelect={onSelectHandler}
            >
                <option selected>+44</option>
                <option>+61</option>

            </select>
            <div className={`inputBoxError`}>{error}</div>
        </div>
    )
}

export default SelectBox;