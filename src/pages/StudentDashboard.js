import React, { useContext, useState, useEffect, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import StudentHeader from "../components/StudentHeader";
import DashboardStep1 from "./DashboardStep1"
import DashboardStep2 from './DashboardStep2'
import DashboardStep3 from './DashboardStep3'
import DashboardStep4 from './DashboardStep4'
import DashboardStep5 from './DashboardStep5'
import "./StudentDashboard.css";
import "../stylesheets/utils.css"
import { HoldSpinner } from '../components/HoldSpinner';
import { UserContext } from '../App';

function StudentDashboard() {
  const { token, userInfo } = useContext(UserContext)

  const [step, setStep] = useState(null)
  const [maxStudents, setMaxStudents] = useState(null)
  const [promoUsers, setPromoUsers] = useState(null)
  const [projects, setProjects] = useState(null)

  const isFirstRender = useRef(true)

  const groupProject = 1

  const nextPage = () => {
    setStep(step + 1)
  }

  const prevPage = () => {
    setStep(step - 1)
  }

  // prop function to update the projects submitted
  const updateProjects = () => {
    fetch('https://be-together-backend.herokuapp.com/learner_projects/all', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => response.json())
      .then((projectsList) => {
        const projectFetchedLearnerId = []
        const fetchedProjects = projectsList
          .map((project) => {
            // make sure to only take 1 project per user (if there was a bug and there are more than 1)
            if (
              !projectFetchedLearnerId.includes(project.user) &&
              project.group_project === groupProject
            ) {
              projectFetchedLearnerId.push(project.user)
              project.user = promoUsers.find((user) => user.id === project.user)
              return project
            }
          })
          .filter((item) => item)

        // console.log('projects: ', fetchedProjects)
        setProjects(fetchedProjects)
      })
  }

  // initialize the number of users in the promotion && the projects linked to those users
  useEffect(() => {
    if (userInfo) {
      fetch('https://be-together-backend.herokuapp.com/users/all', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const users = data.filter(
            (user) => user.promotion === userInfo.promotion.id && user.is_active
          )
          setMaxStudents(users.length)
          setPromoUsers(users)
          return users
        })
        .then((users) => {
          fetch(
            'https://be-together-backend.herokuapp.com/learner_projects/all',
            {
              method: 'GET',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
              },
            }
          )
            .then((response) => response.json())
            .then((projects) => {
              const projectFetchedLearnerId = []
              const fetchedProjects = projects
                .map((project) => {
                  // make sure to only take 1 project per user (if there was a bug and there are more than 1)
                  if (
                    !projectFetchedLearnerId.includes(project.user) &&
                    project.group_project === groupProject
                  ) {
                    projectFetchedLearnerId.push(project.user)
                    project.user = users.find(
                      (user) => user.id === project.user
                    )
                    return project
                  }
                })
                .filter((item) => item)

              // console.log('projects: ', fetchedProjects)
              setProjects(fetchedProjects)
            })
        })
    }
  }, [])

  // if the user was already in the funnel and left the page for some reason, go directly to the step in progress
  // but make this run only on the first render
  useEffect(() => {
    if (isFirstRender.current && maxStudents && projects) {
      fetch(
        'https://be-together-backend.herokuapp.com/users/profile/vote_list/all',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // all the wishlists are submitted? => step 5
          if (data.filter((wishlist) => wishlist.group_project_id === groupProject).length === maxStudents) {
            console.log(5)
            setStep(5)
          }
          // the user's wishlist is submitted? => step 4
          else if (data.some((wishlist) => wishlist.voted_by === userInfo.id && wishlist.group_project_id === groupProject)) {
            console.log(4)
            setStep(4)
          } 
          // are all the projects submitted? => step 3
          else if (projects.length >= maxStudents) {
            console.log(3)
            setStep(3)
          }
          // not all projects are submitted, but the user already submitted theirs? => step 2
          else if (projects.some(project => project.user === userInfo.id)) {
            console.log(2)
            setStep(2)
          }
          else {
            console.log(1)
            setStep(1)
          }
        })
        .catch((err) => console.error(err))

      isFirstRender.current = false
    }
  }, [maxStudents, projects])

  const setDashboardScreen = (step) => {
    switch (step) {
      case 1:
        return (
          <DashboardStep1 nextPage={nextPage} groupProject={groupProject} updateProjects={updateProjects} />
        )
      case 2:
        return (
          <DashboardStep2
            nextPage={nextPage}
            projects={projects}
            maxStudents={maxStudents}
            updateProjects={updateProjects}
          />
        )
      case 3:
        return (
          <DashboardStep3
            nextPage={nextPage}
            groupProject={groupProject}
            projectsList={projects}
            maxStudents={maxStudents}
          />
        )
      case 4:
        return (
          <DashboardStep4
            nextPage={nextPage}
            groupProject={groupProject}
            maxStudents={maxStudents}
          />
        )
      case 5:
        return (
          <DashboardStep5 nextPage={nextPage} groupProject={groupProject} />
        )
      default:
        return <HoldSpinner />
    }
  }

  return step ? (
    <>
      <StudentHeader page='dashboard' step={step} />

      <h1>Group Project Name</h1>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={step}
          appear={true}
          timeout={{ appear: 1000, exit: 600, enter: 600 }}
          classNames='slide'
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false)
          }}
        >
          {setDashboardScreen(step)}
        </CSSTransition>
      </SwitchTransition>
    </>
  ) : (
    <HoldSpinner />
  )
}

export default StudentDashboard
