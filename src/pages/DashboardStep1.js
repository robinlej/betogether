import Button from '../components/Button'
import OuterLabelInput from '../components/OuterLabelInput'
import OuterLabelFileInput from '../components/OuterLabelFileInput'
import OuterLabelTextarea from '../components/OuterLabelTextarea'
import { useContext, useState } from 'react'
import { UserContext } from '../App'

const DashboardStep1 = ({ nextPage }) => {
  const {token} = useContext(UserContext)

  const [inputs, setInputs] = useState({
    projectTitle: null,
    description: null,
    mockupImg: null,
    dbSchemaImg: null,
    // links: null
  })

  const handleInputChange = (e) => {
    const newInputs = {...inputs}
    newInputs[e.target.name] = e.target.value

    setInputs(newInputs)
  }

  const handleClick = (e) => {
    e.preventDefault()

    if(inputs.projectTitle && inputs.description) {
      fetch('https://be-together-backend.herokuapp.com/learner_projects/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          "name": inputs.projectTitle,
          "description": inputs.description,
          "database_schema_picture": inputs.dbSchemaImg,
          "mockup_picture": inputs.mockupImg,
          "user": 1,
          "group_project": 1
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log('Your project has been submitted')
        nextPage()
      })
      .catch(err => console.error(err))
    }
    else {
      console.log('Please provide a title and a description.')
    }
  }

  return (
    <main>
      <section className='dashboard-add-project'>
        <h2 className='banner-title'>Add Your Project</h2>
        <form className='dashboard-add-project--form'>
          <OuterLabelInput
            name='projectTitle'
            type='text'
            handleInputChange={handleInputChange}
          >
            Your Project's Title *
          </OuterLabelInput>
          <OuterLabelTextarea
            name='description'
            rows={8}
            handleInputChange={handleInputChange}
          >
            Description *
          </OuterLabelTextarea>
          <div className='flex'>
            <OuterLabelFileInput name='mockupImg' accept='image/*'>
              Add a Mockup
            </OuterLabelFileInput>
            <OuterLabelFileInput name='dbSchemaImg' accept='image/*'>
              Add a Database Schema
            </OuterLabelFileInput>
          </div>
          {/* <OuterLabelInput name='links' type='text'>
            Add Links
          </OuterLabelInput> */}
          <Button className='btn-primary' handleClick={handleClick}>
            Submit
          </Button>
        </form>
      </section>
    </main>
  )
}

export default DashboardStep1
