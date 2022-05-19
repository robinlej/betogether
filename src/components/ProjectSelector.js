import { forwardRef } from "react"
import { ReactSortable } from "react-sortablejs"

import ProjectSelectorItem from "./ProjectSelectorItem"
import './stylesheets/ProjectSelector.css'

const ProjectSelector = forwardRef(({ projects }, ref) => {
  return (
    <div ref={ref} className='project-selector' id='project-selector'>
      {projects.map((project) => {
        return (
          <ProjectSelectorItem
            key={project.id}
            project={project}
          />
        )
      })}
    </div>
  )
})

export default ProjectSelector