import MainWrapper from "../../components/shared/formatWrappers/MainWrapper.jsx";
import WrapAllInMiddle from "../../components/shared/formatWrappers/WrapAllInMiddle.jsx";
import Logo from '../../components/shared/Logo';
import Button from "../../components/shared/forms/Button";

const Signup = () => {
    return (
        <MainWrapper>
            <WrapAllInMiddle>
                <Logo  />
                <header>Start receiving cryptocurrency payments today.</header>
                <Button text={`Get started`}/>
            </WrapAllInMiddle>
        </MainWrapper>
    )
}

export default Signup;