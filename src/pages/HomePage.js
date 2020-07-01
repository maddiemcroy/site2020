import React from 'react'
import styled from 'styled-components'
import { aboutText, aboutHeadline } from '../constants'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'

const HomePage = () => {

    const Headline = styled.div`
        font-size: 1.5em;
    `

    const history = useHistory();
    const buttonOnClick = () => history.push('/resume')

    return (
        <div>
            <Headline>{aboutHeadline}</Headline>
            <p>{aboutText}</p>
            <Button 
                text='See my work'
                onClick={buttonOnClick}
            ></Button>
        </div>
    )
}

export default HomePage