/**
 * Wrap application pages with margin left to leave space for main van on left
 * @param children
 * @param customClass
 * @param minHeight
 * @returns {JSX.Element}
 * @constructor
 */
const WrapHeader = ({ children, customClass = null}) => {
    return (
        <div className={`WrapHeader ${customClass}`}>
            {children}
        </div>


    )
}

export default WrapHeader;