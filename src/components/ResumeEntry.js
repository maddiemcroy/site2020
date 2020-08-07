import React from 'react'
import styled from 'styled-components'
import Spacer from '../components/Spacer'

const ResumeEntry = (props) => {
    const {
        title,
        subtitle,
        startMonth,
        startYear,
        endMonth,
        endYear,
        location,
        description
    } = props.data

    const Container = styled.div`
        text-align: left;
        margin-bottom: 50px;
    `

    const Title = styled.span`
        font-weight: 600;
        font-size: 1.2em;
    `

    const Subtitle = styled.span`
        font-weight: 400;
    `

    const DateLocation = styled.span`
        font-size: 0.8em;
        display: block;
    `
    return ( 
        <Container>
            <Title>{title} /</Title> <Subtitle>{subtitle}</Subtitle>
            <DateLocation>
                {startMonth} {startYear} - {endMonth} {endYear}
                <Spacer />
                {location}
            </DateLocation>
            <p>{description}</p>
        </Container>
    )
}

export default ResumeEntry