import React from 'react'
import { workExperience } from '../constants'
import ResumeEntry from '../components/ResumeEntry'

const ResumePage = () => {
    const jobs = workExperience.map((job) => (
        <ResumeEntry
            job={job}
        />
    ))

    return (
        <div>{jobs}</div>
    )
}

export default ResumePage