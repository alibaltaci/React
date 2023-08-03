import { StyledButtonSecondary, StyledButtonPrimary } from "./Button.Styled" 

export default function Button({onClick, variant, text}){

    if(variant === "green"){
        return(
            <StyledButtonSecondary onClick={onClick}>{text}</StyledButtonSecondary>
        )
    }else{
        return(
            <StyledButtonPrimary onClick={onClick}>{text}</StyledButtonPrimary>
        )
    }
}