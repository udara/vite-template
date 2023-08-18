const InputBox = ({
                      type = 'text',
                      name = null,
                      ref = null,
                      placeholder = null,
                      label = null,
                      onKeyUpHandler = null,
                      onKeyDownHandler = null,
                      error = null
                  }) => {
    return (
        <div className={`w-full text-left`}>
            <label className={`w-full`}>{label}</label>
            <input
                type={type}
                name={name}
                ref={ref}
                className={`inputBox`}
                onKeyUp={onKeyUpHandler}
                onKeyDown={onKeyDownHandler}
                placeholder={placeholder}
            />
            <div className={`inputBoxError`}>{error}</div>
        </div>
    )
}

export default InputBox;