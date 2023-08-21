/**
 * Aligns all components in the middle / center horizontally and vertically
 * @param children
 * @param customClass
 * @param minHeight
 * @returns {JSX.Element}
 * @constructor
 */
const WrapAllInMiddle = ({ children, customClass = null, minHeight = 'min-h-screen' }) => {
    return (
        <div className={`flex items-center justify-center ${minHeight} ${customClass}`}>
            <div className={'inline-block w-full align-middle text-center'}>
                {children}
            </div>
        </div>

    )
}

export default WrapAllInMiddle;