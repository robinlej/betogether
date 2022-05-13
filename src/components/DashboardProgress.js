import DashboardProgressStep from './DashboardProgressStep'
import './stylesheets/DashboardProgress.css'

const DashboardProgress = () => {
  return (
    <div class='dashboard-progress'>
      <DashboardProgressStep active={true} number={1}>
        Create a new project
      </DashboardProgressStep>
      <DashboardProgressStep number={2}>
        Wait for other projects
      </DashboardProgressStep>
      <DashboardProgressStep number={3}>
        Vote for the projects
      </DashboardProgressStep>
      <DashboardProgressStep number={4}>
        Wait for all the votes
      </DashboardProgressStep>
      <DashboardProgressStep number={5}>
        Consult the results
      </DashboardProgressStep>
    </div>
  )
}

export default DashboardProgress