import Button from '../components/Button'
import OuterLabelInput from '../components/OuterLabelInput'
import OuterLabelFileInput from '../components/OuterLabelFileInput'
import OuterLabelTextarea from '../components/OuterLabelTextarea'
import showWidget from '../components/CloudinaryWidget'
import { useState } from 'react'

const DashboardStep1 = ({ nextPage }) => {
  const [uploadConfirmation, setUploadConfirmation] = useState("Nothing was yet uploaded")

  const handleClick = (e) => {
    e.preventDefault()
    nextPage()
  }

  return (
    <main>
      {/* <h1>Group Project Name</h1> */}

      <section className='dashboard-add-project'>
        <h2 className='banner-title'>Add Your Project</h2>
        <form className='dashboard-add-project--form'>
          <OuterLabelInput name='project-title' type='text'>
            Your Project's Title *
          </OuterLabelInput>
          <OuterLabelTextarea name='description' rows={8}>
            Description *
          </OuterLabelTextarea>
          <div className='flex' style={{"gap":"2em"}}>
            <OuterLabelFileInput handleClick={()=> showWidget("UserMockupImages")} value='Add a Mockup' name='mockup' accept='image/*'>
            </OuterLabelFileInput>
            <div className='file-added-confirmation'>{uploadConfirmation}</div>
            <OuterLabelFileInput handleClick={()=> showWidget("UserDbSchemaImages")} value='Add a Database Schema' name='db-schema' accept='image/*'>
            </OuterLabelFileInput>
            <div className='file-added-confirmation'>{uploadConfirmation}</div>
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

export default DashboardStep1
