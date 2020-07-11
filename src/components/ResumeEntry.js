import React from 'react'
import styled from 'styled-components'

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
        margin-right: 5px;
        font-size: 1.2em;
    `

    const Subtitle = styled.span`
        font-weight: 400;
    `

    const DateLocation = styled.span`
        font-size: 0.8em;
        display: block;
    `

    const Spacer = styled.span`
        font-weight: bold;
        margin: 0px 10px;
    `;

    return ( 
        <Container>
            <Title>{title}</Title> <Subtitle>{subtitle}</Subtitle>
            <DateLocation>
                {startMonth} {startYear} - {endMonth} {endYear}
                <Spacer>·</Spacer>
                {location}
            </DateLocation>
            <p>{description}</p>
        </Container>
    )
}

export default ResumeEntry