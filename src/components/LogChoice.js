import Button from "./Button"

const LogChoice = ({ isLogin, switchLogOption }) => {

  const content = isLogin ? (
    <>
      <p>Don't have an account?</p>
      <Button className='btn-secondary-outline' handleClick={switchLogOption}>
        Signup
      </Button>
    </>
  ) : (
    <>
      <p>Have an account?</p>
      <Button className='btn-secondary-outline' handleClick={switchLogOption}>
        Login
      </Button>
    </>
  )

  return (
    <div className='log-choice'>
      {content}
    </div>
  )
}

export default LogChoice