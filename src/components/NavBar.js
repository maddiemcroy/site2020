import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    background: #FFA083;
    display: flex;
    overflow: hidden;
    text-align: left;
    color: white;
    align-items: center;
`;

const NavLink = styled(Link)`
    font-weight: bold;
    margin: 0px 10px;
`

const LinksContainer = styled.div`
    text-align: right;
    flex: 1;
`

const TitleContainer = styled.div`
    flex: 1;
    padding: 10px;
`

const Title = styled.span`
    display: block;
    font-weight: bold;
    font-size: 2em;
`

const Subtitle = styled.span`
`;

const NavBar = (props) => {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    madison mcroy
                </Title>
                <Subtitle>
                    software engineer
                </Subtitle>
            </TitleContainer>
            <LinksContainer>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/resume'>resume</NavLink>
                <NavLink to='/projects'>projects</NavLink>
            </LinksContainer>
        </Container>
    )
}

export default NavBar