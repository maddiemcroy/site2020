import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { BREAKPOINTS } from '../breakpoints'

const ProjectContainer = styled.div`
    outline: solid 1px #8e7cc3;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    :hover {
        outline: solid 5px #8e7cc3;
        transition: 50ms;
    }
    @media (max-width: ${BREAKPOINTS.small}) {
        flex-direction: column;
    }
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
    object-fit: contain;
    overflow: auto;
    max-width: 20%;
    align-self: flex-start;
    @media (max-width: ${BREAKPOINTS.small}) {
        max-width: 100%;
    }
`

const Text = styled.div`
    text-align: left;
    flex: 1;
`

const ButtonContainer = styled.div`
    display: block;
    align-self: flex-end;
`

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    @media (max-width: ${BREAKPOINTS.small}) {
        margin-left: 0;
        margin-top: 20px;
    }
`

const Project = (props) => {
    const {
        title,
        desc,
        created,
        imgName,
        sourceUrl
    } = props.project

    return (
        <ProjectContainer>
            <Image src={require(`../assets/projects/${imgName}`)} />
            <Container>
                <Text>
                    <ProjectTitle>{title}</ProjectTitle>
                    <Subtitle>{created}</Subtitle>
                    <Description>{desc}</Description>
                </Text>
                <ButtonContainer>
                    <Button
                        text='View source'
                        onClick={() => window.location.href = sourceUrl}
                    />
                </ButtonContainer>
            </Container>
        </ProjectContainer>
    )
}

export default Project