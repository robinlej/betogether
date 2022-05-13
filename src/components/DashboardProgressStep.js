const DashboardProgressStep = ({ active, number, children }) => {
  return (
    <div class={`dashboard-progress--step ${ active ? 'active' : '' }`}>
      <div class='dashboard-progress--step--number'>{number}</div>
      <div class='dashboard-progress--step--label'>{children}</div>
    </div>
  )
}

export default DashboardProgressStep