import React from 'react'
import styled from 'styled-components'
import { aboutText, aboutHeadline } from '../text'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'
import logo from '../assets/m-logo.svg'
import { BREAKPOINTS } from './../breakpoints'

const HomePage = () => {

    const Container = styled.div`
        display: flex;
        @media (min-width: ${BREAKPOINTS.medium}) {
            padding: 30px 0px;
        }
    `

    const Headline = styled.div`
        font-size: 1.5em;
    `

    const InfoSection = styled.div`
    `

    const Image = styled.img`
        overflow: auto;
        width: 100%;
        object-fit: contain;
        max-width: 150px;
        margin-right: 50px;
        @media (max-width: ${BREAKPOINTS.small}) {
            display: none;
        }
    `

    const history = useHistory();

    return (
        <Container>
            <Image src={logo} />
            <InfoSection>
                <Headline>{aboutHeadline}</Headline>
                <p>{aboutText}</p>
                <Button
                    text='View my experience'
                    onClick={() => history.push('/resume')}
                ></Button>
                <Button
                    text='Explore my projects'
                    onClick={() => history.push('/projects')}
                ></Button>
            </InfoSection>
        </Container>
    )
}

export default HomePage