import React from 'react'
import { workExperience } from '../constants'
import ResumeEntry from '../components/ResumeEntry'

const ResumePage = () => {
    const resume = workExperience.map((job) => (
        <ResumeEntry
            job={job}
        />
    ))

    return (
        <div>
            <h1>resume</h1>
            <div>{resume}</div>
        </div>
    )
}

export default ResumePage