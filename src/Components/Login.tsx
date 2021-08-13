import { FC, useState } from 'react'
import { useHistory } from 'react-router'
import { auth } from '../firebase'
import '../styles/login.css'

export const Login: FC = () => {
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState<any | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const signIn = (e: any) => {
    e.preventDefault()
    try {
      auth.signInWithEmailAndPassword(email, password)
      setCurrentUser(true)
    } catch (error) {
      setErrorMessage(error.message)
      console.log(error.message)
    }
    if (currentUser) {
      history.push('/')
    }
  }

  const handleRegister = () => {
    history.push('/register')
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">SIGN IN TO YOUR ACCOUNT</h1>
        <form className="login__form" onSubmit={signIn}>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="email__input"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="password__input"
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="login__signInButton">
            SIGN IN
          </button>
        </form>
        <button onClick={handleRegister} className="login__registerButton">
          Create your Account
        </button>
        <div className="error__message">{errorMessage}</div>
        <p className="disclaimer">
          By signing-in you agree to the PC Case Store Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  )
}