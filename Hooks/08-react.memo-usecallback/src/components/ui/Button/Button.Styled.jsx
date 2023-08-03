import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    font-size: 12px;
    padding: 5px 10px;
    cursor:  pointer;
    border-radius: 4px;
    color: white;
`

export const StyledButtonPrimary = styled(StyledButton)`
    background-color: blue;
    border: 1px solid blue;

    &:hover,
    &:active,
    &:focus{
        background-color: white;
        border: 1px solid blue;
        color: blue;
    }
`

export const StyledButtonSecondary = styled(StyledButton)`
     background-color: green;
     border: 1px solid green;

     &:hover,
     &:focus,
     &:active{
        background-color: white;
        border: 1px solid green;
        color: green;
     }
`

export const StyledButtonDanger = styled(StyledButton)`
     background-color: red;
     border: 1px solid red;

     &:hover,
     &:focus,
     &:active{
        background-color: white;
        border: 1px solid red;
        color: red;
     }
`