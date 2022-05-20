import useExpandItem from '../hooks/useExpandItem'

import Button from '../components/Button'
import OuterLabelInput from '../components/OuterLabelInput'
import OuterLabelFileInput from '../components/OuterLabelFileInput'
import OuterLabelTextarea from '../components/OuterLabelTextarea'

import ProjectPreview from '../components/ProjectPreview'
import ProgressWheel from '../components/ProgressWheel'

import './ProjectPreview.css'
import '../stylesheets/utils.css'

const DashboardStep = ({ step, nextPage }) => {

  const { expandedItem, expandItem } = useExpandItem()

  if (step === 1) {
    const handleClick = (e) => {
      e.preventDefault()
      nextPage()
    }
  
    return (
      <main>
        <h1>Group Project Name</h1>
  
        <section className='dashboard-add-project'>
          <h2 className='banner-title'>Add Your Project</h2>
          <form className='dashboard-add-project--form'>
            <OuterLabelInput name='project-title' type='text'>
              Your Project's Title *
            </OuterLabelInput>
            <OuterLabelTextarea name='description' rows={8}>
              Description *
            </OuterLabelTextarea>
            <div className='flex'>
              <OuterLabelFileInput name='mockup' accept='image/*'>
                Add a Mockup
              </OuterLabelFileInput>
              <OuterLabelFileInput name='db-schema' accept='image/*'>
                Add a Database Schema
              </OuterLabelFileInput>
            </div>
            <OuterLabelInput name='links' type='text'>
              Add Links
            </OuterLabelInput>
            <Button className='btn-primary' handleClick={handleClick}>
              Submit
            </Button>
          </form>
        </section>
      </main>
    )
  }



  if (step === 2) {
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
    ]
    const totalProjects = 20


    if (projects.length === totalProjects) {
      nextPage()
    }

    return (
      <main className='main-with-aside'>
        <h1>Group Project Name</h1>

        <section className='dashboard-project-list main-with-aside__main-content'>
          {projects.map((project) => {
            return (
              <ProjectPreview
                project={project}
                key={project.id}
                expandItem={expandItem}
                isExpanded={expandedItem === project.id ? true : false}
              />
            )
          })}
        </section>
        <aside className='aside-right'>
          <ProgressWheel
            projectsSubmitted={projects.length}
            totalProjects={totalProjects}
          />
        </aside>
      </main>
    )
  }
}

export default DashboardStep