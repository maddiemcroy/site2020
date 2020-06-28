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
        margin: 50px 0px;
    `

    // const Title = styled.div`
    //     font-weight: 600;
    // `

    const Company = styled.span`
        font-weight: 600;
        margin-right: 5px;
        font-size: 1.2em;
    `;

    const Role = styled.span`
        font-weight: 400;
    `;

    return ( 
        <Container>
            <Company>{company}</Company> <Role>{role}</Role>
            <p>{startMonth} {startYear} - {endMonth} {endYear}</p>
            <p>{description}</p>
        </Container>
    )
}

export default ResumeEntry