import { FC, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/solid'
import '../styles/header.css'

export const Header: FC = () => {
  const [currentUser, setCurrentUser] = useState<any | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      console.log(currentUser)
    })
  }, [currentUser])

  const renderSignedOut = () => {
    return (
      <div className="navbar__links">
        <Link to="/login">
          <h1>Login/Register</h1>
        </Link>
      </div>
    )
  }

  const renderSignedIn = () => {
    return (
      <div className="navbar__links">
        <Link to="/account">
          <h1>My Account</h1>
        </Link>
      </div>
    )
  }

  return (
    <div className="header">
      <div className="header__navbar">
        <Link to="/">
          <h1 className="home__icon">CASE STORE</h1>
        </Link>
        {auth.currentUser ? renderSignedIn() : renderSignedOut()}
        <Link to="/checkout">
          <ShoppingBagIcon className="shopping__bag" />
        </Link>
      </div>
    </div>
  )
}
