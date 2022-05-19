import { useState } from 'react'
import ProjectPreview from '../components/ProjectPreview'
import ProgressWheel from '../components/ProgressWheel'
import './ProjectPreview.css'
import '../stylesheets/utils.css'

const DashboardStep2 = ({ nextPage }) => {
  // To be updated when the API & DB is ready
  // array of objects with: student name, picture, title of the project, description, db schema image, project sketch, links
  const projects = [
    {
      name: 'Dylan',
      profilePic: 'assets/img/janedoe.jpg',
      projectTitle: 'My Great Project',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      dbSchemaPic: 'https://unsplash.it/300',
      projectSketch: 'https://unsplash.it/300',
      links: '',
    },
    {
      name: 'Charlotte',
      profilePic: 'assets/img/janedoe.jpg',
      projectTitle: 'My Great Project',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      dbSchemaPic: 'https://unsplash.it/300',
      projectSketch: 'https://unsplash.it/300',
      links: '',
    },
    {
      name: 'Anthony',
      profilePic: 'assets/img/janedoe.jpg',
      projectTitle: 'My Great Project',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      dbSchemaPic: 'https://unsplash.it/300',
      projectSketch: 'https://unsplash.it/300',
      links: '',
    },
  ]

  const [expandedItem, setExpandedItem] = useState('')

  const expandItem = (item) => {
    if (expandedItem === item.name) setExpandedItem('')
    else setExpandedItem(item.name)
  }

  return (
    <main className='main-with-aside'>
      <h1>Group Project Name</h1>

      <section className='dashboard-project-list main-with-aside__main-content'>
        {projects.map((project) => {
          return (
            <ProjectPreview
              project={project}
              key={project.name}
              expandItem={expandItem}
              isExpanded={expandedItem === project.name ? true : false}
              // isDraggable
            />
          )
        })}
      </section>
      <aside className='aside-right'>
        <ProgressWheel projectsSubmitted={projects.length} totalProjects={20} />
      </aside>
    </main>
  )
}

export default DashboardStep2
