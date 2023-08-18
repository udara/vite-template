
const Button = ({ text = 'Button Text', customClass = null, onClickHandle = null  }) => {
    return (
        <button
            onClick={onClickHandle}
            className={`customClass`}>
            {text}
        </button>
    )
}

export default Button;