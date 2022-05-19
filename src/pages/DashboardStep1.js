import Button from '../components/Button'
import OuterLabelInput from '../components/OuterLabelInput'
import OuterLabelFileInput from '../components/OuterLabelFileInput'
import OuterLabelTextarea from '../components/OuterLabelTextarea'

const DashboardStep1 = ({ nextPage }) => {
  return (
    <main>
      <h1>Group Project Name</h1>

      <section className='dashboard-add-project'>
        <h2 className='banner-title'>Add Your Project</h2>
        <form method='POST' action='/' className='dashboard-add-project--form'>
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
          <Button className='btn-primary' handleClick={nextPage}>
            Submit
          </Button>
        </form>
      </section>
    </main>
  )
}

export default DashboardStep1