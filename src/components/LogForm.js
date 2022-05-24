import { useContext, useState } from 'react'
import Button from './Button'
import DropdownMenu from './DropdownMenu'
import InnerLabelInput from './InnerLabelInput'
import Tooltip from './Tooltip'
import { setCookie, UserContext } from '../App'

import './stylesheets/logform.css'

const LogForm = ({ isLogin }) => {
  const {setToken} = useContext(UserContext)

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

  const [signupInputs, setSignupInputs] = useState({
    firstName: {
      value: null,
      valid: false,
    },
    lastName: {
      value: null,
      valid: false,
    },
    email: {
      value: null,
      valid: false,
    },
    password: {
      value: null,
      valid: false,
    },
    confirmPassword: {
      value: null,
      valid: false,
    },
    promotion: {
      value: null,
      valid: true
    }
  })

  const [loginInputs, setLoginInputs] = useState({
     email: {
       value: null,
     },
     password: {
       value: null,
     }
   })

  const login = () => {
    setIsLoginSubmitted(true)

    if (isLoginSubmitted) {
      fetch('https://be-together-backend.herokuapp.com/login/', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginInputs.email.value,
          password: loginInputs.password.value,
        }),
      })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setToken(data.token)
        setCookie('token', data.token, 7)
        if (data.error) {
          setIsLoginSubmitted(false)
        }
      })
      .catch((err) => {
        console.error(err)
        setIsLoginSubmitted(false)
      })
    }
  }

  const signup = () => {
    if (canBeSubmitted) setIsSignupSubmitted(true)

    if (isSignupSubmitted) {
      fetch('https://be-together-backend.herokuapp.com/users/', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: signupInputs.firstName.value,
          last_name: signupInputs.lastName.value,
          email: signupInputs.email.value,
          password: signupInputs.password.value,
          promotion: parseInt(signupInputs.promotion.value),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setIsSignupSubmitted(false)
        })
        .catch((err) => {
          console.error(err)
          setIsSignupSubmitted(false)
        })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleInputChangeOnSignup = (e) => {
    const newInputs = {...signupInputs}
    newInputs[e.target.name].value = e.target.value
    if (e.target.name !== 'promotion' && e.target.value) {
      newInputs[e.target.name].valid = checkValidity(
        e.target.value,
        e.target.name
      )
    }
    
    setSignupInputs(newInputs)
    
    checkFormValidity()
  }

  const handleInputChangeOnLogin = (e) => {
    const newInputs = {...loginInputs}
    newInputs[e.target.name].value = e.target.value

    setLoginInputs(newInputs)
  }

  const checkValidity = (value, type) => {
    const isValid = value
      ? (
        type === 'confirmPassword'
        ? value === signupInputs.password.value
        : regexTable[type]?.test(value)
      )
      : true

    return isValid
  }

  const checkFormValidity = () => {
    // if no input value is left uncompleted (except for the promotion which is not mandatory)
    // and all inputs are valid
    const inputsValues = Object.values(signupInputs)
    inputsValues.pop()
    if (
      inputsValues.map((input) => input.value === null).filter(input => input).length === 0 &&
      Object.values(signupInputs).find((input) => input.valid === false) === undefined
    ) {
      setCanBeSubmitted(true)
    }
  }

  const innerForm = isLogin ? (
    <form onSubmit={handleSubmit} className='log-form log-form--login'>
      <InnerLabelInput
        name='email'
        type='email'
        key='email'
        handleInputChange={handleInputChangeOnLogin}
      >
        E-mail
      </InnerLabelInput>
      <InnerLabelInput
        name='password'
        type='password'
        key='password'
        handleInputChange={handleInputChangeOnLogin}
      >
        Password
      </InnerLabelInput>
      <Button className='btn-secondary log-form--button' handleClick={login}>
        Login
      </Button>
    </form>
  ) : (
    <form
      onSubmit={handleSubmit}
      className='log-form log-form--signup'
    >
      <InnerLabelInput
        isValid={checkValidity(signupInputs.firstName.value, 'firstName')}
        handleInputChange={handleInputChangeOnSignup}
        // value={signupInputs.firstName.value}
        name='firstName'
        type='text'
        required
      >
        First name
      </InnerLabelInput>
      <InnerLabelInput
        isValid={checkValidity(signupInputs.lastName.value, 'lastName')}
        handleInputChange={handleInputChangeOnSignup}
        // value={signupInputs.lastName.value}
        name='lastName'
        type='text'
        required
      >
        Last name
      </InnerLabelInput>
      <InnerLabelInput
        isValid={checkValidity(signupInputs.email.value, 'email')}
        handleInputChange={handleInputChangeOnSignup}
        // value={signupInputs.email.value}
        name='email'
        type='email'
        key='email'
        required
      >
        E-mail
      </InnerLabelInput>
      <InnerLabelInput
        isValid={checkValidity(signupInputs.password.value, 'password')}
        handleInputChange={handleInputChangeOnSignup}
        // value={signupInputs.password.value}
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
        isValid={checkValidity(
          signupInputs.confirmPassword.value,
          'confirmPassword'
        )}
        handleInputChange={handleInputChangeOnSignup}
        // value={signupInputs.confirmPassword.value}
        name='confirmPassword'
        type='password'
        required
      >
        Confirm your password
      </InnerLabelInput>
      <DropdownMenu
        name='promotion'
        handleOptionChange={handleInputChangeOnSignup}
      >
        -- Select your promotion --
      </DropdownMenu>
      <Button className='btn-secondary log-form--button' handleClick={signup}>
        Register
      </Button>
    </form>
  )

  return innerForm
}

export default LogForm
