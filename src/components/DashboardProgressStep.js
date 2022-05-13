const DashboardProgressStep = ({ step, number, children }) => {
  return (
    <div className={`dashboard-progress--step ${ step >= number ? 'active' : '' }`}>
      <div className='dashboard-progress--step--number'>{number}</div>
      <div className='dashboard-progress--step--label'>{children}</div>
    </div>
  )
}

export default DashboardProgressStep