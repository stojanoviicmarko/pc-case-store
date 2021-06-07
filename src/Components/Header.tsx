import { FC } from 'react'
import { Link } from 'react-router-dom'
import userLogo from '../assets/icons/user.svg'
import cartLogo from '../assets/icons/bag.svg'
import '../styles/header.css'

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__navbar">
        <Link to="/">
          <h1 className="home__icon">HOME</h1>
        </Link>
        <div className="navbar__links">
          <div className="mx-8">
            <Link to="/products">
              <h1>PRODUCTS</h1>
            </Link>
          </div>
          <div className="mx-8">
            <Link to="/about">
              <h1>ABOUT</h1>
            </Link>
          </div>
          <div className="mx-8">
            <Link to="/blog">
              <h1>BLOG</h1>
            </Link>
          </div>
        </div>
        <div className="navbar__icons">
          <div className="navbar__login">
            <Link to="/login">
              <img src={userLogo} alt="user__logo" />
            </Link>
          </div>
          <div className="navbar__cart">
            <Link to="/checkout">
              <img src={cartLogo} alt="cart__logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
