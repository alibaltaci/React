import { StyledButtonSecondary, StyledButtonPrimary, StyledButtonDanger } from "./Button.Styled" 

export default function Button({onClick, variant, text}){

    if(variant === "green"){
        return(
            <StyledButtonSecondary onClick={onClick}>{text}</StyledButtonSecondary>
        )
    }else if(variant === "danger"){
        return(
           <StyledButtonDanger onClick={onClick} >{text}</StyledButtonDanger> 
        )
    }else{
        return(
            <StyledButtonPrimary onClick={onClick}>{text}</StyledButtonPrimary>
        )
    }
}