const InputBox = ({
                      type = 'text',
                      name = null,
                      ref = null,
                      placeholder = null,
    value=null,
                      label = null,
                      instructions = null,
                      onKeyUpHandler = null,
                      onKeyDownHandler = null,
                      error = null,
                      customClasses=null
                  }) => {
    const renderedInstructions = () => {
        if (instructions) {
            return (<span className={`text-primary-color text-[12px] pl-2`}>{instructions}</span>)
        }
        return null;
    }
    return (
        <div className={`w-full text-left`}>
            <label className={`w-full`}>{label}{renderedInstructions()}</label>
            <input
                value={value}
                type={type}
                name={name}
                ref={ref}
                className={`inputBox ${customClasses}`}
                onKeyUp={onKeyUpHandler}
                onKeyDown={onKeyDownHandler}
                placeholder={placeholder}
            />
            <div className={`inputBoxError`}>{error}</div>
        </div>
    )
}

export default InputBox;