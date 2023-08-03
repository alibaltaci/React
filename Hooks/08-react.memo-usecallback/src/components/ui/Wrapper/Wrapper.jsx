import { StayledWrapper } from "./Wrapper.style";

export default function Wrapper({children}){

    return(
        <StayledWrapper>
            {children}
        </StayledWrapper>
    )
}