import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import StudentHeader from "../components/StudentHeader";
import DashboardStep from './DashboardStep'
import DashboardStep1 from "./DashboardStep1"
import DashboardStep2 from './DashboardStep2'
import DashboardStep3 from './DashboardStep3'
import DashboardStep4 from './DashboardStep4'
import DashboardStep5 from './DashboardStep5'
import "./StudentDashboard.css";
import "../stylesheets/utils.css"

function StudentDashboard() {
  const [step, setStep] = useState(1)

  const nextPage = () => {
    setStep(step + 1)
  }

  const prevPage = () => {
    setStep(step - 1)
  }

  const setDashboardScreen = (step) => {
    switch(step) {
      case 1:
        return <DashboardStep1 nextPage={nextPage} />
      case 2:
        return <DashboardStep2 nextPage={nextPage} />
      case 3:
        return <DashboardStep3 nextPage={nextPage} />
      case 4:
        return <DashboardStep4 nextPage={nextPage} prevPage={prevPage} />
      case 5:
        return <DashboardStep5 nextPage={nextPage} />
    }
  }

  return (
    <>
      <StudentHeader page='dashboard' step={step} />

      {step !== 4 && <h1>Group Project Name</h1>}
      <SwitchTransition mode='out-in'>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          // classNames='slide-in'

          key={step}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false)
          }}
          // timeout={5000}
          classNames='slide'
        >
          {setDashboardScreen(step)}
          {/* <DashboardStep step={step} nextPage={nextPage} /> */}
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}

export default StudentDashboard
