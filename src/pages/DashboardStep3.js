import React, { useContext, useEffect, useRef, useState } from 'react'
import { ReactSortable } from 'react-sortablejs'

import useExpandItem from '../hooks/useExpandItem'

import ProjectPreview from '../components/ProjectPreview'
import ProgressWheel from '../components/ProgressWheel'
import ProjectSelectorItem from '../components/ProjectSelectorItem'

import './ProjectPreview.css'
import '../components/stylesheets/ProjectSelector.css'
import '../stylesheets/utils.css'
import Button from '../components/Button'
import { UserContext } from '../App'
import { HoldSpinner } from '../components/HoldSpinner'

const DashboardStep3 = ({ nextPage, groupProject, projectsList, maxStudents }) => {
  const { token, userInfo } = useContext(UserContext)

  const { expandedItem, expandItem } = useExpandItem()

  const [projects, setProjects] = useState(projectsList)
  const projectListRef = useRef(null)
  
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

  const sendWishlist = () => {
    if (userInfo) {
      const wishlist = projects.slice(0,5).map(project => {
        console.log(project)
        return project.id
      })
  
      fetch('https://be-together-backend.herokuapp.com/users/profile/vote_list/new',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            whishlist: wishlist,
            voted_by: userInfo.id,
            group_project_id: groupProject
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          nextPage()
        })
        .catch((err) => console.error(err))
    }
  }

  const renderProject = (project) => {
    return (
      <ProjectPreview
        key={project.id}
        project={project}
        expandItem={expandItem}
        isExpanded={expandedItem === project.id}
        isDraggable
      />
    )
  }

  return projects ? (
    <main className='main-with-aside'>
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
        ref={projectListRef}
      >
        {projects.map((project) => {
          return renderProject(project)
        })}
      </ReactSortable>

      <aside className='aside-right'>
        <div>
          <ProgressWheel projectsSubmitted={maxStudents} totalProjects={maxStudents} />
          <ReactSortable
            className='project-selector'
            list={projects}
            setList={setProjects}
          >
            {projects.map((project) => {
              return <ProjectSelectorItem key={project.id} project={project} index={projects.indexOf(project)} />
            })}
          </ReactSortable>
        </div>
        <Button className='btn-primary full-width' handleClick={sendWishlist}>VOTE</Button>
      </aside>
    </main>
  ) : (
    <HoldSpinner />
  )
}

export default DashboardStep3
