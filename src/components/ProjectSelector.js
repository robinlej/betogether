import ProjectSelectorItem from "./ProjectSelectorItem"
import './stylesheets/ProjectSelector.css'

const ProjectSelector = ({ projects }) => {
  return (
    <div className='project-selector' id='project-selector'>
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
}

export default ProjectSelector