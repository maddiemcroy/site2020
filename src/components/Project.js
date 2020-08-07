import React from 'react'
import styled from 'styled-components'
import Spacer from '../components/Spacer'
import Button from '../components/Button'

const ProjectContainer = styled.div`
    outline: solid 1px #8e7cc3;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
`

const ProjectTitle = styled.span`
    font-weight: 600;
    margin-right: 5px;
    font-size: 1.2em;
`

const Subtitle = styled.span`
    font-size: 0.8em;
    display: block;
`
const Description = styled.span`
    display: block;
    margin-top: 10px;
`

const Image = styled.img`
`

const Text = styled.div`
    text-align: left;
`

const ButtonContainer = styled.div`
    display: block;
    align-self: end;
`

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Project = (props) => {
    return (
        <ProjectContainer>
            <Image src={props.img} />
            <Container>
                <Text>
                    <ProjectTitle>{props.title}</ProjectTitle>
                    <Subtitle>{props.tags} <Spacer /> {props.date} </Subtitle>
                    <Description>{props.description}</Description>
                </Text>
                <ButtonContainer>
                    <Button
                        text='View source'
                        onClick={() => window.location.href = props.src}
                    />
                </ButtonContainer>
            </Container>
        </ProjectContainer>
    )
}

export default Project