import { StayledH1, StayledH2, StayledH3, StayledParagraph, StayledSpan } from "./Typography.styled";

export default function Typography({text, children, elementType}){

    if(elementType === "span"){
        return(
            <StayledSpan>
                {text}
                {children}
            </StayledSpan>
        )
    }
    else if(elementType === "h1"){
        return(
            <StayledH1>
                {text}
                {children}
            </StayledH1>
        )
    }
    else if(elementType === "h2"){
        return(
            <StayledH2>
                {text}
                {children}
            </StayledH2>
        )
    }
    else if(elementType === "h3"){
        return(
            <StayledH3>
                {text}
                {children}
            </StayledH3>
        )
    }
    else{
        return(
            <StayledParagraph>
                {text}
                {children}
            </StayledParagraph>
        )
    }

}