const GroupProjectContent = ({ group, isExpanded }) => {
  
    let content
    if (isExpanded) {
      content = (
        <>
          <p>{group.description}</p>
          <div
            className='dashboard-project-list--item--content--imgs'
          >
            {group.dbSchemaPic && <img src={group.dbSchemaPic} alt={`Db schema of ${group.groupProjectTitle}`}/>}
            {group.projectSketch && <img src={group.projectSketch} alt={`ProjectSketch of ${group.groupProjectTitle}`} />}
          </div>
        </>
      )
    } 
  
    return (
      <div className='dashboard-project-list--item--content'>
        <h2>{group.projectTitle}</h2>
        { content }
      </div>
    )
  }
  
  export default GroupProjectContent