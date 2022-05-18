import { useEffect, useState } from 'react'
import Sortable from 'sortablejs'

import ProjectPreview from '../components/ProjectPreview'
import ProgressWheel from '../components/ProgressWheel'
import './ProjectPreview.css'
import '../stylesheets/utils.css'

const DashboardStep3 = ({ nextPage }) => {
  // To be updated when the API & DB is ready
  // array of objects with: student name, picture, title of the project, description, db schema image, project sketch, links
  const projects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      name: 'Anthony',
      profilePic: 'assets/img/janedoe.jpg',
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
      profilePic: 'assets/img/janedoe.jpg',
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
      profilePic: 'assets/img/janedoe.jpg',
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

  const [expandedItem, setExpandedItem] = useState("")
  let wishlist = projects.map((project) => project.id)

  const expandItem = (item) => {
    if (expandedItem === item) {
      setExpandedItem('')
    } else {
      setExpandedItem(item)
    }
  }

  useEffect(() => {
    const el = document.querySelector('#sortable-dashboard-project-list')
    let sortable = new Sortable(el, {
      fallbackTolerance: 10,
      onUnchoose: function (e) {
        // console.log(e);
        const index = e.newIndex === null ? e.oldDraggableIndex : e.newIndex

        const ranks = [...document.querySelector('.dashboard-project-list--item-rank--container').children]
        ranks.forEach((rank, i) => {
          setTimeout(() => {
            rank.style.removeProperty('height')
            rank.style.maxHeight = el.children[i].style.maxHeight
            if (i === index && e.item.classList.contains('expanded')) {
              rank.style.height = '100%'
            }
          }, 10)
        })
      },
      onUpdate: function (e) {
        const oldIndex = e.oldDraggableIndex
        const newIndex = e.newDraggableIndex
        let updatedWishlist = [...wishlist]
        const currentProject = updatedWishlist.filter((p, i) => i === oldIndex)[0]
        updatedWishlist.splice(oldIndex, 1)
        updatedWishlist.splice(newIndex, 0, currentProject)
        wishlist = updatedWishlist
      },
    })
  }, [])
  
  useEffect(() => {
    document.querySelector('.dashboard-project-list--item-rank--container')
  }, [expandItem])

  const renderProject = (project, index) => {
    return (
      <ProjectPreview
        key={project.name}
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
            <div 
              key={i}
              style={{"height": ""}}
              className='dashboard-project-list--item-rank'
            >
              {i + 1}
            </div>
          ))}
      </aside>
      <section id='sortable-dashboard-project-list' className='dashboard-project-list main-with-aside__main-content'>
        {projects.map((project, index) => {
          return (
            renderProject(project, index)
          )
        })}
      </section>

      <aside className="aside-right">
        <ProgressWheel projectsSubmitted={20} totalProjects={20} />
      </aside>
    </main>
  )
}

export default DashboardStep3
