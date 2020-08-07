import React from 'react'
import styled from 'styled-components'
import { workExperience, education, skills } from '../text'
import ResumeEntry from '../components/ResumeEntry'

const SectionHeader = styled.div`
    outline: solid 1px #8e7cc3;
    color: #8e7cc3;
    font-weight: bold;
    font-size: 1.25em;
    padding: 5px;
    margin: 10px;
    overflow: auto;
    display: inline-block;
`

const Skill = styled.span`
    display: inline-block;
    font-weight: ${props => props.bold ? 'bold' : 'initial'};
`

const SkillSection = styled.div`
    margin: 10px 0;
`

const Spacer = styled.span`
    font-weight: bold;
    margin: 0 10px;
    top: 5px;
`;

const ResumePage = () => {
    const jobsSection = workExperience.map((job) => (
        <ResumeEntry
            data={job}
        />
    ))

    const formatSkills = (arr) => {
        return <SkillSection>
            {arr.map((item, i) => {
                if (i === (arr.length - 1)) {
                    return <Skill>{item}</Skill>
                } else {
                    return <Skill>{item}<Spacer>·</Spacer></Skill>
                }
            })}
        </SkillSection>
        
    }

    const languages = formatSkills(skills.languages)
    const frameworks = formatSkills(skills.frameworks)
    const concepts = formatSkills(skills.concepts)

    const skillsSection = [languages, frameworks, concepts]

    return (
        <div>
            <SectionHeader>
                education
            </SectionHeader>
            <ResumeEntry 
                data={education}
            />
            <SectionHeader>
                experience
            </SectionHeader>
            <div>{jobsSection}</div> 
            <SectionHeader>
                skills
            </SectionHeader>
            <div>{skillsSection}</div>
        </div>
        
    )
}

export default ResumePage