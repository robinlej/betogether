import Button from '../components/Button'
import OuterLabelInput from '../components/OuterLabelInput'
import OuterLabelFileInput from '../components/OuterLabelFileInput'
import OuterLabelTextarea from '../components/OuterLabelTextarea'
import showWidget from '../components/CloudinaryWidget'
import { useContext, useState } from 'react'
import { UserContext } from '../App'

const DashboardStep1 = ({ nextPage }) => {
  const [uploadConfirmation, setUploadConfirmation] = useState({
    mockup:'Nothing was uploaded yet',
    db:'Nothing was uploaded yet',

})
  const { token, userInfo } = useContext(UserContext)

  const [inputs, setInputs] = useState({
    projectTitle: null,
    description: null,
    mockupImg: null,
    dbSchemaImg: null,
    // links: null
  })
  
  const handleInputChange = (e) => {
    const newInputs = { ...inputs }
    newInputs[e.target.name] = e.target.value

    setInputs(newInputs)
  }

  const getMockupPictureUrl = async () => {
    await showWidget('UserMockupImages', token, updateMockUpPicture)
  }

  const getDbPictureUrl = async () => {
    await showWidget('UserDbSchemaImages', token, updatedBPicture)
  }

  const updateMockUpPicture = (url) => {
    setInputs({...inputs, mockupImg: url})
    setUploadConfirmation({...uploadConfirmation, mockup:'Mockup image uploaded'})
  }
  const updatedBPicture = (url) => {
    setInputs({...inputs, dbSchemaImg: url})
    setUploadConfirmation({...uploadConfirmation, db:'Database schema image uploaded'})
  }

  const handleClick = (e) => {
    e.preventDefault()

    if (inputs.projectTitle && inputs.description) {
      fetch('https://be-together-backend.herokuapp.com/learner_projects/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          name: inputs.projectTitle,
          description: inputs.description,
          database_schema_picture: inputs.dbSchemaImg,
          mockup_picture: inputs.mockupImg,
          user: userInfo.id,
          group_project: 1,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          console.log('Your project has been submitted')
          nextPage()
        })
        .catch((err) => console.error(err))
    } else {
      console.log('Please provide a title and a description.')
      e.target.classList.add('shake')
      setTimeout(() => {
        e.target.classList.remove('shake')
      }, 500)
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
          <div className='flex' style={{ gap: '2em' }}>
            <OuterLabelFileInput
              handleClick={getMockupPictureUrl}
              value='Add a Mockup'
              name='mockup'
              accept='image/*'
            ></OuterLabelFileInput>
            <div className='file-added-confirmation'>{uploadConfirmation.mockup}</div>
            <OuterLabelFileInput
              handleClick={getDbPictureUrl}
              value='Add a Database Schema'
              name='db-schema'
              accept='image/*'
            ></OuterLabelFileInput>
            <div className='file-added-confirmation'>{uploadConfirmation.db}</div>
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