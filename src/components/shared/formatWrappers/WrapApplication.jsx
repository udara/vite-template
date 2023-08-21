/**
 * Wrap application pages with margin left to leave space for main van on left
 * @param children
 * @param customClass
 * @param minHeight
 * @returns {JSX.Element}
 * @constructor
 */
const WrapApplication = ({ children, customClass = null, minHeight = 'min-h-screen' }) => {
    return (
        <div className={`w-full text-left pt-7 space-y-6 ${customClass}`}>
                {children}
        </div>

    )
}

export default WrapApplication;