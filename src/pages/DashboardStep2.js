import useExpandItem from '../hooks/useExpandItem'

import ProjectPreview from '../components/ProjectPreview'
import ProgressWheel from '../components/ProgressWheel'

import './ProjectPreview.css'
import '../stylesheets/utils.css'
import { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import { HoldSpinner } from '../components/HoldSpinner'

const DashboardStep2 = ({ nextPage, projects, maxStudents, updateProjects }) => {
  const { userInfo } = useContext(UserContext)
  
  const { expandedItem, expandItem } = useExpandItem()

  // call the DB every 5s to check for new projects
  useEffect(() => {
    if (projects?.length !== maxStudents) {
      const updater = setInterval(updateProjects, 5000)

      return () => clearInterval(updater)
    }
  }, [])

  // if all the projects are submitted, go to the next page
  useEffect(() => {
    if (projects?.length === maxStudents) {
      setTimeout(() => {
        nextPage()
      }, 1000)
    }
  }, [projects])

  return (userInfo && projects) ? (
    <main className='main-with-aside'>

      <section className='dashboard-project-list main-with-aside__main-content'>
        {projects.map((project) => {
          return (
            <ProjectPreview
              project={project}
              key={project.id}
              expandItem={expandItem}
              isExpanded={expandedItem === project.id}
            />
          )
        })}
      </section>

      <aside className='aside-right'>
        <ProgressWheel projectsSubmitted={projects.length} totalProjects={maxStudents} />
      </aside>
    </main>
  ) : (
    <HoldSpinner />
  )
}

export default DashboardStep2
