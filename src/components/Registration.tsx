import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signUp } from '../store/auth/user.actions.js'

export const Registration: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const error = useSelector((state: any) => state.auth.authMessage)

  const handleSignUp = async (e: any) => {
    e.preventDefault()
    dispatch(
      signUp(email, password, rePassword, () => {
        history.push('/')
      })
    )
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">REGISTER YOUR NEW ACCOUNT</h1>
        <form className="login__form" onSubmit={handleSignUp}>
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
          <input
            onChange={(e) => {
              setRePassword(e.target.value)
            }}
            className="password__input"
            type="password"
            placeholder="Retype your password"
          />

          <button type="submit" className="login__signInButton">
            CREATE YOUR ACCOUNT
          </button>
          <div className="error__message">{error}</div>
        </form>
        <p className="disclaimer">
          By signing-in you agree to the PC Case Store Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  )
}
