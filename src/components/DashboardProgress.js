import DashboardProgressStep from './DashboardProgressStep'
import './stylesheets/DashboardProgress.css'

const DashboardProgress = ({ step }) => {
  return (
    <div className='dashboard-progress'>
      <DashboardProgressStep step={step} number={1}>
        Create a new project
      </DashboardProgressStep>
      <DashboardProgressStep step={step} number={2}>
        Wait for other projects
      </DashboardProgressStep>
      <DashboardProgressStep step={step} number={3}>
        Vote for the projects
      </DashboardProgressStep>
      <DashboardProgressStep step={step} number={4}>
        Wait for all the votes
      </DashboardProgressStep>
      <DashboardProgressStep step={step} number={5}>
        Consult the results
      </DashboardProgressStep>
    </div>
  )
}

export default DashboardProgress