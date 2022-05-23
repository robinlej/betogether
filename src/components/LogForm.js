import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import DropdownMenu from './DropdownMenu'
import InnerLabelInput from './InnerLabelInput'
import Tooltip from './Tooltip'

import './stylesheets/logform.css'

const LogForm = ({ isLogin }) => {
  const regexTable = {
    firstName:
      /^[A-Za-z\u00C0-\u00FF]([A-Za-z\u00C0-\u00FF\'\-]?)+([\ A-Za-z\u00C0-\u00FF][A-Za-z\u00C0-\u00FF\'\-]+)?$/,
    lastName:
      /^[A-Za-z\u00C0-\u00FF]([A-Za-z\u00C0-\u00FF\'\-]?)+([\ A-Za-z\u00C0-\u00FF][A-Za-z\u00C0-\u00FF\'\-]+)?$/,
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password:
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*\-]).{8,}$/,
  }

  const [isLoginSubmitted, setIsLoginSubmitted] = useState(false)
  const [isSignupSubmitted, setIsSignupSubmitted] = useState(false)
  const [canBeSubmitted, setCanBeSubmitted] = useState(false)

  const [inputs, setInputs] = useState({
    firstName: {
      value: '',
      valid: false,
    },
    lastName: {
      value: '',
      valid: false,
    },
    email: {
      value: '',
      valid: false,
    },
    password: {
      value: '',
      valid: false,
    },
    confirmPassword: {
      value: '',
      valid: false,
    },
    // promotion: {
    //   value: '',
    //   valid: true
    // }
  })

  // useEffect(() => {
  //   fetch('https://infinite-oasis-89157.herokuapp.com/login/', {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username,
  //       first_name: firstName,
  //       last_name: lastName,
  //       email,
  //       password,
  //     }),
  //   })
  // }, [isLoginSubmitted])

  useEffect(() => {
    if (isSignupSubmitted) {
      fetch('https://infinite-oasis-89157.herokuapp.com/users/', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: inputs.firstName.value + inputs.lastName.value,
          first_name: inputs.firstName.value,
          last_name: inputs.lastName.value,
          email: inputs.email.value,
          password: inputs.password.value,
        }),
      })
    }
  }, [isSignupSubmitted])

  const login = () => {
    setIsLoginSubmitted(true)
  }

  const signup = () => {
    if (canBeSubmitted) setIsSignupSubmitted(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e)
  }

  const handleInputChange = (e) => {
    const newInputs = {...inputs}
    newInputs[e.target.name].value = e.target.value
    if (e.target.value) {
      newInputs[e.target.name].valid = checkValidity(
        e.target.value,
        e.target.name
      )
    }

    setInputs(newInputs)
    
    checkFormValidity()
    // console.log(inputs);
  }

  const checkValidity = (value, type) => {
    const isValid = value
      ? (
        type === 'confirmPassword'
        ? value === inputs.password.value
        : regexTable[type]?.test(value)
      )
      : true

    return isValid
  }

  const checkFormValidity = () => {
    // if no input value is left uncompleted
    // and all inputs are valid
    if (
      Object.values(inputs).find((input) => input.value === '') === undefined &&
      Object.values(inputs).find((input) => input.valid === false) === undefined
    ) {
      setCanBeSubmitted(true)
    }
  }

  const innerForm = isLogin ? (
    <form method='POST' action='' className='log-form log-form--login'>
      <InnerLabelInput name='email' type='email' key='email'>
        E-mail
      </InnerLabelInput>
      <InnerLabelInput name='password' type='password' key='password'>
        Password
      </InnerLabelInput>
      <Link to='/welcome'>
        <Button className='btn-secondary log-form--button' handleClick={login}>
          Login
        </Button>
      </Link>
    </form>
  ) : (
    <form
      onSubmit={handleSubmit}
      // method='POST'
      // action='https://infinite-oasis-89157.herokuapp.com/users/'
      className='log-form log-form--signup'
    >
      <InnerLabelInput
        isValid={checkValidity(inputs.firstName.value, 'firstName')}
        handleInputChange={handleInputChange}
        value={inputs.firstName.value}
        name='firstName'
        type='text'
        required
      >
        First name
      </InnerLabelInput>
      <InnerLabelInput
        isValid={checkValidity(inputs.lastName.value, 'lastName')}
        handleInputChange={handleInputChange}
        value={inputs.lastName.value}
        name='lastName'
        type='text'
        required
      >
        Last name
      </InnerLabelInput>
      <InnerLabelInput
        isValid={checkValidity(inputs.email.value, 'email')}
        handleInputChange={handleInputChange}
        value={inputs.email.value}
        name='email'
        type='email'
        key='email'
        required
      >
        E-mail
      </InnerLabelInput>
      <InnerLabelInput
        isValid={checkValidity(inputs.password.value, 'password')}
        handleInputChange={handleInputChange}
        value={inputs.password.value}
        name='password'
        type='password'
        key='password'
        required
      >
        Password
        <Tooltip>
          Passwords must be at least 8 characters long with:
          <br />
          <ul>
            <li>1 lowercase letter</li>
            <li>1 uppercase letter</li>
            <li>1 number</li>
            <li>
              1 special character among <em>#?!@$ %^&*-</em>
            </li>
          </ul>
        </Tooltip>
      </InnerLabelInput>
      <InnerLabelInput
        isValid={checkValidity(inputs.confirmPassword.value, 'confirmPassword')}
        handleInputChange={handleInputChange}
        value={inputs.confirmPassword.value}
        name='confirmPassword'
        type='password'
        required
      >
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
