import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import { auth as authFirebase } from '../firebase'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/solid'
import '../styles/header.css'

export const Header: FC = () => {
  const auth = useSelector((state: any) => state.firebase.auth)

  const renderNotAuthed = () => {
    return (
      <div className="navbar__links">
        <Link to="/login">
          <h1>Login/Register</h1>
        </Link>
      </div>
    )
  }

  const renderAuthed = () => {
    return (
      <div className="navbar__links">
        <Link to="/account">
          <h1>{authFirebase.currentUser?.uid}</h1>
        </Link>
        <Link to="/wishlist">
          <HeartIcon width="40px" fill="darkred" cursor="pointer" />
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
        {isLoaded(auth) && isEmpty(auth) ? renderNotAuthed() : renderAuthed()}
        <Link to="/checkout">
          <ShoppingBagIcon width="40px" fill="white" />
        </Link>
      </div>
    </div>
  )
}
