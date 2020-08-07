import React from 'react'
import styled from 'styled-components'
import { links } from '../text'
import githubLogo from '../assets/github-logo.png'
import linkedInLogo from '../assets/linkedin-logo.png'
import { BREAKPOINTS } from '../breakpoints'

const Container = styled.div`
    width: 100%;
    background: #8e7cc3;
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.5em;
    @media (max-width: ${BREAKPOINTS.small}) {
        position: absolute;
        bottom: 0;
    }
`

const Icon = styled.img`
    margin: 5px;
    height: 24px;
    :hover {
        opacity: 60%;
    }
`

const IconLink = (props) => {
    return (
        <a href={props.destUrl}>
            <Icon src={props.imgUrl} />
        </a>
    )
}

const Footer = () => {
    return (
        <Container>
            <IconLink
                destUrl={links.linkedIn}
                imgUrl={linkedInLogo}
            />
            <IconLink
                destUrl={links.github}
                imgUrl={githubLogo}
            />
        </Container>
    )
}

export default Footer