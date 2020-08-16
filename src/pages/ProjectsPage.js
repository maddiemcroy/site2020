import React from 'react'
import Project from '../components/Project'
import { projects } from '../text'

const ProjectsPage = () => {


    return (
        <div>
            {projects.map((p) => (
                <Project
                    project={p}
                />
            ))}
        </div>
    )
}

export default ProjectsPage