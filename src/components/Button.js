import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    color: white;
    background-color: #8e7cc3;
    font-weight: bold;
    padding: 10px;
    font-size: 1em;
    transition: 200ms;
    margin: 10px;
    :hover {
        background-color: #674ea7;
    }
`

const Button = (props) => {
    return (
        <StyledButton onClick={props.onClick}>
            {props.text}
        </StyledButton>
    )
}

export default Button