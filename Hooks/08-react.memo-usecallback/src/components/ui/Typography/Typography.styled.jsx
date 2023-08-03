import { styled, css } from "styled-components"

const sharedTextStyles = css`
    color: black;
`

export const StayledParagraph = styled.p`
    ${ sharedTextStyles }
    padding: 5px;
`

export const StayledSpan = styled.span`
    ${ sharedTextStyles }
`

export const StayledH1 = styled.h1`
    ${ sharedTextStyles }
`

export const StayledH2 = styled.h2`
    ${ sharedTextStyles }
    font-size: 18px;
`

export const StayledH3 = styled.h3`
    ${ sharedTextStyles }
    font-size: 15px
`