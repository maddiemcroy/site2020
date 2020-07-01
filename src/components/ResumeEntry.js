import React from 'react'
import styled from 'styled-components'

const ResumeEntry = (props) => {
    const {
        role,
        company,
        startMonth,
        startYear,
        endMonth,
        endYear,
        description
    } = props.job

    const Container = styled.div`
        text-align: left;
        margin-bottom: 50px;
    `

    // const Title = styled.div`
    //     font-weight: 600;
    // `

    const Company = styled.span`
        font-weight: 600;
        margin-right: 5px;
        font-size: 1.2em;
    `

    const Role = styled.span`
        font-weight: 400;
    `

    const Date = styled.span`
        font-size: 0.8em;
        display: block;
    `

    return ( 
        <Container>
            <Company>{company}</Company> <Role>{role}</Role>
            <Date>{startMonth} {startYear} - {endMonth} {endYear}</Date>
            <p>{description}</p>
        </Container>
    )
}

export default ResumeEntry