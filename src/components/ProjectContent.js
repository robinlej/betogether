import ClickableImage from "./ClickableImage"

const ProjectContent = ({ project, isExpanded }) => {

  const description = !isExpanded ? project.description.slice(0, 60) + '...' : project.description

  let content
  if (isExpanded) {
    content = (
      <>
        <p>{description}</p>
        <div className='dashboard-project-list--item--content--imgs'>
          {project.database_schema_picture && (
            <ClickableImage src={project.database_schema_picture} />
          )}
          {project.mockup_picture && <ClickableImage src={project.mockup_picture} />}
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
      <h2>{project.name}</h2>
      { content }
    </div>
  )
}

export default ProjectContent