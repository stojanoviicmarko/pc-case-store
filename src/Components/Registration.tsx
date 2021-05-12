import { FC, useState } from 'react'
import { useHistory } from 'react-router'
import { auth } from '../firebase.js'

export const Registration: FC = () => {
  const history = useHistory()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ rePassword, setRepassword ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')

  const signUp = async (e: any) => {
    e.preventDefault()
    try {
      if (password === rePassword) {
        const user = await auth.createUserWithEmailAndPassword(email, password)
        console.log(user)
        history.push('/')
      } else {
        setErrorMessage('Password should be the same in both fields')
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">REGISTER YOUR NEW ACCOUNT</h1>
        <form className="login__form">
          <input
            onChange={e => {
              setEmail(e.target.value)
            }}
            className="email__input"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={e => {
              setPassword(e.target.value)
            }}
            className="password__input"
            type="password"
            placeholder="Password"
          />
          <input
            onChange={e => {
              setRepassword(e.target.value)
            }}
            className="password__input"
            type="password"
            placeholder="Enter your password again"
          />

          <button onClick={signUp} type="submit" className="login__signInButton">
            CREATE YOUR ACCOUNT
          </button>
        </form>
        <div className="error__message">{errorMessage}</div>
        <p className="disclaimer">
          By signing-in you agree to the PC Case Store Conditions of Use & Sale. Please see our Privacy Notice, our
          Cookies Notice and our Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  )
}
