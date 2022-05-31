import { useEffect, useRef } from "react"
import ProjectContent from "./ProjectContent"

const ProjectPreview = ({ project, expandItem, isExpanded, isDraggable }) => {
  const projectRef = useRef(null)
  const style = isDraggable ? {"cursor": "grab"} : null

  useEffect(() => {
    projectRef.current.style.maxHeight = `calc(max(264px, ${projectRef.current.scrollHeight}px) + 2rem)`

    // trick so that the images aren't cropped out in Firefox
    // 300 ms is the duration of the transition when it expands
    const timer = setTimeout(() => {
      projectRef.current.style.maxHeight = `calc(max(264px, ${projectRef.current.scrollHeight}px) + 2rem)`
    }, 300)

    return () => clearTimeout(timer)
  }, [isExpanded])

  const expandProject = () => {
    expandItem(project.id)
  }

  const dragIcon = <svg className="drag-icon" style={{"marginLeft": "auto", "marginTop":"auto", "marginBottom":"auto"}} width="24" height="24" strokeWidth="1.5" transform="rotate(45)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 9L4 4M4 4V8M4 4H8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 9L20 4M20 4V8M20 4H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 15L4 20M4 20V16M4 20H8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 15L20 20M20 20V16M20 20H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> 

  return (
    <article
      draggable
      ref={projectRef}
      className={`dashboard-project-list--item ${isExpanded ? 'expanded' : ''}`}
      style={style}
      onClick={expandProject}
      data-project-id={project.id}
    >
      <div className='dashboard-project-list--item--profile'>
        <img
          className='dashboard-project-list--item--profile-pic'
          src={
            !project.user.profile_picture
              ? 'assets/img/user-profile-picture.png'
              : project.user.profile_picture
          }
          alt={`Profile picture of ${project.user.first_name} ${project.user.last_name}`}
        />
        <p>{project.user.first_name + ' ' + project.user.last_name}</p>
      </div>
      <ProjectContent project={project} isExpanded={isExpanded} />
      {isDraggable && dragIcon}
    </article>
  )
}

// const mergeRefs = (...refs) => {
//   const filteredRefs = refs.filter(Boolean)
//   if (!filteredRefs.length) return null
//   if (filteredRefs.length === 0) return filteredRefs[0]
//   return (inst) => {
//     for (const ref of filteredRefs) {
//       if (typeof ref === 'function') {
//         ref(inst)
//       } else if (ref) {
//         ref.current = inst
//       }
//     }
//   }
// }

export default ProjectPreview