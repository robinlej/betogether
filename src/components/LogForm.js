import Button from './Button'
import DropdownMenu from './DropdownMenu'
import InnerLabelInput from './InnerLabelInput'
import './stylesheets/logform.css'

const LogForm = ({ isLogin }) => {

  const login = () => {

  }

  const signup = () => {

  }

  const innerForm = isLogin ? (
    <form method='POST' action='' className='log-form log-form--login'>
      <InnerLabelInput name='email' type='email' key='email'>
        E-mail
      </InnerLabelInput>
      <InnerLabelInput name='password' type='password' key='password'>
        Password
      </InnerLabelInput>
      <Button className='btn-secondary log-form--button' handleClick={login}>
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
      <InnerLabelInput name='email' type='email' key='email'>
        E-mail
      </InnerLabelInput>
      <InnerLabelInput name='password' type='password' key='password'>
        Password
      </InnerLabelInput>
      <InnerLabelInput name='confirmpassword' type='password'>
        Confirm your password
      </InnerLabelInput>
      <DropdownMenu name='promotion'>-- Select your promotion --</DropdownMenu>
      <Button className='btn-secondary log-form--button' handleClick={signup}>
        Register
      </Button>
    </form>
  )

  return innerForm
}

export default LogForm