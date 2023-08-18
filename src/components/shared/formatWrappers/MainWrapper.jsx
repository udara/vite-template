/**
 * Handles
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const MainWrapper = ({ children }) => {
    return (
        <div className={`main-wrapper`}>
            {children}
        </div>
    )
}

export default MainWrapper;