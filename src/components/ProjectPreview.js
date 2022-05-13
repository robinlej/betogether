import { useEffect, useRef } from "react"
import ProjectContent from "./ProjectContent"

const ProjectPreview = ({ project, expandItem, isExpanded }) => {

  const projectRef = useRef(null)

  const expandProject = () => {
    expandItem(project)
  }

  useEffect(() => {
      projectRef.current.style.maxHeight = `calc(${projectRef.current.scrollHeight}px + 2rem`
  }, [isExpanded])
  
  return (
    <article ref={projectRef} className={`dashboard-project-list--item ${isExpanded ? 'expanded' : ''}`} onClick={expandProject}>
      <div className='dashboard-project-list--item--profile'>
        <img
          className='dashboard-project-list--item--profile-pic'
          src={project.profilePic}
          alt={`Profile picture of ${project.name}`}
        />
        <p>{project.name}</p>
      </div>
      <ProjectContent project={project} isExpanded={isExpanded} />
    </article>
  )
}

export default ProjectPreview