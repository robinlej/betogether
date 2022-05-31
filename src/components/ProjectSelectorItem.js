const ProjectSelectorItem = ({ project, index }) => {
  return (
    <div className='project-selector-item' draggable>
      <img src={
            !project.user.profile_picture
              ? 'assets/img/user-profile-picture.png'
              : project.user.profile_picture
          } />
      <div className='project-selector-item-hover'>{index + 1}</div>
      <div className='project-selector-item--tooltip'>
        <svg
          className='tooltip-triangle'
          width='24'
          height='24'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.4752 2.94682C11.7037 2.53464 12.2963 2.53464 12.5248 2.94682L21.8985 19.8591C22.1202 20.259 21.831 20.75 21.3738 20.75H2.62625C2.16902 20.75 1.87981 20.259 2.10146 19.8591L11.4752 2.94682Z'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        {project.name}
      </div>
    </div>
  )
}

export default ProjectSelectorItem