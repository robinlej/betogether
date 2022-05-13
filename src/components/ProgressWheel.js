import { useEffect, useRef } from "react"
import './stylesheets/ProgressWheel.css'

const ProgressWheel = ({ projectsSubmitted, totalProjects }) => {
  const circleLine = useRef('')
  const circleGlow = useRef('')

  useEffect(() => {
    circleLine.current.style.strokeDashoffset =
      (378 / totalProjects) * (totalProjects - projectsSubmitted)
    circleGlow.current.style.strokeDashoffset =
      (378 / totalProjects) * (totalProjects - projectsSubmitted)
  })

  return (
    <aside className='progress-wheel'>
      <div className='progress-wheel--number'>
        {projectsSubmitted} / { totalProjects }
        <svg width='130px' height='130px'>
          <circle
            ref={circleLine}
            id='circle-line'
            cx='65'
            cy='65'
            r='60'
            stroke-linecap='round'
          />
          <circle
            ref={circleGlow}
            id='circle-glow'
            cx='65'
            cy='65'
            r='60'
            stroke-linecap='round'
          />
        </svg>
      </div>
      <p>Waiting for other projects...</p>
    </aside>
  )
}

export default ProgressWheel