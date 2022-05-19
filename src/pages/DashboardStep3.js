import React, { useEffect, useRef, useState } from 'react'
// import Sortable from 'sortablejs'
import { ReactSortable } from 'react-sortablejs'

import ProjectPreview from '../components/ProjectPreview'
import ProgressWheel from '../components/ProgressWheel'
// import ProjectSelector from '../components/ProjectSelector'
import ProjectSelectorItem from '../components/ProjectSelectorItem'

import './ProjectPreview.css'
import '../components/stylesheets/ProjectSelector.css'
import '../stylesheets/utils.css'
import Button from '../components/Button'

// To be updated when the API & DB is ready
// array of objects with: student name, picture, title of the project, description, db schema image, project sketch, links
const PROJECTS = [
  {
    id: 1,
    name: 'Dylan',
    profilePic: 'https://thispersondoesnotexist.com/image',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 2,
    name: 'Charlotte',
    profilePic: 'https://source.unsplash.com/random',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 3,
    name: 'Anthony',
    profilePic: 'https://source.unsplash.com/user/wsanter',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 4,
    name: 'Kristine',
    profilePic: 'https://source.unsplash.com/random/?happy',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 5,
    name: 'Georgiana',
    profilePic: 'https://source.unsplash.com/random/?eat',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 6,
    name: 'Tim',
    profilePic: 'assets/img/janedoe.jpg',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 7,
    name: 'Laurent',
    profilePic: 'assets/img/janedoe.jpg',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 8,
    name: 'Nashwan',
    profilePic: 'assets/img/janedoe.jpg',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 9,
    name: 'Taguhi',
    profilePic: 'assets/img/janedoe.jpg',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 10,
    name: 'Antoine',
    profilePic: 'assets/img/janedoe.jpg',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 11,
    name: 'Diogo',
    profilePic: 'assets/img/janedoe.jpg',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
  {
    id: 12,
    name: 'Raphael',
    profilePic: 'assets/img/janedoe.jpg',
    projectTitle: 'My Great Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    dbSchemaPic: 'https://unsplash.it/300',
    projectSketch: 'https://unsplash.it/300',
    links: '',
  },
]

const DashboardStep3 = ({ nextPage }) => {
  const [expandedItem, setExpandedItem] = useState("")
  const [projects, setProjects] = useState(PROJECTS)
  const projectListRef = useRef(null)

  const expandItem = (item) => {
    if (expandedItem === item) {
      setExpandedItem('')
    } else {
      setExpandedItem(item)
    }
  }
  
  useEffect(() => {
    document.querySelector('.dashboard-project-list--item-rank--container')
  }, [expandItem])


  useEffect(() => {
    const ranks = [
      ...document.querySelector(
        '.dashboard-project-list--item-rank--container'
      ).children,
    ]

    // timeout to let the changes happen, otherwise it doesn't work
    setTimeout(() => {
      const projectsOnList = projectListRef.current.ref.current.children

      ranks.forEach((rank, i) => {
        rank.style.removeProperty('height')
        rank.style.maxHeight = projectsOnList[i].style.maxHeight
        if (projectsOnList[i].classList.contains('expanded')) {
          rank.style.height = '100%'
        }
      })
    }, 10)
  }, [projects])

  const renderProject = (project, index) => {
    return (
      <ProjectPreview
        key={project.id}
        project={project}
        expandItem={expandItem}
        isExpanded={expandedItem === project.id ? true : false}
        isDraggable
      />
    )
  }

  return (
    <main className='main-with-aside'>
      <h1>Group Project Name</h1>

      <aside className='aside-left dashboard-project-list--item-rank--container'>
        {projects.map((p, i) => (
          <div key={i} className='dashboard-project-list--item-rank'>
            {i + 1}
          </div>
        ))}
      </aside>
      <ReactSortable
        tag='section'
        className='dashboard-project-list main-with-aside__main-content'
        list={projects}
        setList={setProjects}
        // onUnchoose={handleUnchoose}
        ref={projectListRef}
      >
        {projects.map((project, index) => {
          return renderProject(project, index)
        })}
      </ReactSortable>

      <aside className='aside-right'>
        <ProgressWheel projectsSubmitted={20} totalProjects={20} />
        <ReactSortable
          className='project-selector'
          list={projects}
          setList={setProjects}
          // onUnchoose={handleUnchoose}
        >
          {projects.map((project) => {
            return <ProjectSelectorItem key={project.id} project={project} index={projects.indexOf(project)} />
          })}
        </ReactSortable>
        <Button className='btn-primary full-width' style={{"position": "absolute", "bottom": "2rem"}} handleClick={nextPage}>VOTE</Button>
      </aside>
    </main>
  )
}

export default DashboardStep3
