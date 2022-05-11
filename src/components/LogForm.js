import Button from './Button'
import InnerLabelInput from './InnerLabelInput'
import './logform.css'

const LogForm = ({ isLogin }) => {

  const login = () => {

  }

  const signup = () => {

  }

  const innerForm = isLogin ? (
    <form method='POST' action='' className='log-form log-form--login'>
      <InnerLabelInput name='email' type='email'>
        E-mail
      </InnerLabelInput>
      <InnerLabelInput name='password' type='password'>
        Password
      </InnerLabelInput>
      <Button className='btn-secondary' handleClick={login}>
        Login
      </Button>
    </form>
  ) : (
    <form method='POST' action='' className='log-form log-form--signup'>
      <InnerLabelInput name='firstname' type='text'>
        First name
      </InnerLabelInput>
      <InnerLabelInput name='lastname' type='text'>
        Last name
      </InnerLabelInput>
      <InnerLabelInput name='email' type='email'>
        E-mail
      </InnerLabelInput>
      <InnerLabelInput name='password' type='password'>
        Password
      </InnerLabelInput>
      <InnerLabelInput name='confirmpassword' type='password'>
        Confirm your password
      </InnerLabelInput>
      <Button className='btn-secondary' handleClick={signup}>
        Register
      </Button>
    </form>
  )

  return innerForm
}

export default LogForm