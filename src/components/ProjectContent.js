const ProjectContent = ({ project, isExpanded }) => {

  const description = !isExpanded ? project.description.slice(0, 60) + '...' : project.description

  let content
  if (isExpanded) {
    content = (
      <>
        <p>{description}</p>
        <div
          className='dashboard-project-list--item--content--imgs'
        >
          {project.dbSchemaPic && <img src={project.dbSchemaPic} />}
          {project.projectSketch && <img src={project.projectSketch} />}
        </div>
      </>
    )
  } else {
    content = (
      <>
        <p>{description}</p>
      </>
    )
  }

  return (
    <div className='dashboard-project-list--item--content'>
      <h2>{project.projectTitle}</h2>
      { content }
    </div>
  )
}

export default ProjectContent