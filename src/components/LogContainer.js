import { useState } from "react";
import LogChoice from "./LogChoice";
import LogForm from "./LogForm";
import './stylesheets/logcontainer.css'

const LogContainer = () => {
  const [isLogin, setIsLogin] = useState(true)

  const switchLogOption = () => {
    setIsLogin(!isLogin)
  }

  return (
    <section className='log-container'>
      <LogChoice isLogin={isLogin} switchLogOption={switchLogOption} />
      <LogForm isLogin={isLogin} />
    </section>
  )
}

export default LogContainer