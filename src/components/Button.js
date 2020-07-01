import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    color: white;
    background-color: #FFA083;
    font-weight: bold;
    padding: 10px;
    font-size: 1em;
    transition: 200ms;
    :hover {
        background-color: #E8846D;
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