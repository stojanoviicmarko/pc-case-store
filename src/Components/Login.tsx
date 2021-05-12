import { FC, useState } from 'react'
import { useHistory } from 'react-router'
import '../styles/login.css'

export const Login: FC = () => {
  const history = useHistory()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  console.log(email)
  console.log(password)
  const handleRegister = () => {
    history.push('/register')
  }
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">SIGN IN TO YOUR ACCOUNT</h1>
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
          <button type="submit" className="login__signInButton">
            SIGN IN
          </button>
        </form>
        <button onClick={handleRegister} className="login__registerButton">
          Create your Account
        </button>
        <p className="disclaimer">
          By signing-in you agree to the PC Case Store Conditions of Use & Sale. Please see our Privacy Notice, our
          Cookies Notice and our Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  )
}
