import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { signIn } from '../store/auth/user.actions'
import '../styles/login.css'

export const Login: FC = () => {
  const dispatch = useDispatch()
  const error = useSelector((state: any) => state.auth.authMessage)
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async (e) => {
    e.preventDefault()
    dispatch(
      signIn(email, password, () => {
        history.push('/')
      })
    )
  }

  const handleRegisterRedirect = (e) => {
    history.push('/register')
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">SIGN IN TO YOUR ACCOUNT</h1>
        <form className="login__form" onSubmit={handleSignIn}>
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
        <button
          className="login__registerButton"
          onClick={handleRegisterRedirect}
        >
          Create your Account
        </button>
        <div className="error__message">{error}</div>
        <p className="disclaimer">
          By signing-in you agree to the PC Case Store Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  )
}
