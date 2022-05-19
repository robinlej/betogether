const ProjectSelectorItem = ({ project }) => {
  return (
    <img
      src={project.profilePic}
      className='project-selector-item'
      draggable
    />
  )
}

export default ProjectSelectorItem