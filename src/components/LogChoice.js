import Button from "./Button"
import './logchoice.css'

const LogChoice = ({ isLogin, switchLogOption }) => {

  const content = isLogin ? (
    <div className='log-choice--container log-choice--signup'>
      <p>Don't have an account?</p>
      <Button className='btn-secondary-outline' handleClick={switchLogOption}>
        Signup
      </Button>
    </div>
  ) : (
    <div className='log-choice--container log-choice--login'>
      <p>Have an account?</p>
      <Button className='btn-secondary-outline' handleClick={switchLogOption}>
        Login
      </Button>
    </div>
  )

  return (
    <div className={`log-choice ${isLogin ? 'login' : 'signup'}`}>
      {content}
    </div>
  )
}

export default LogChoice