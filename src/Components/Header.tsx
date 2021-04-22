import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

function Header() {
  return (
    <div className="w-full">
      <div className="px-24 pt-4 flex justify-between items-center">
        <Link to="/">
          <img className="w-24" src={logo} alt="logo" />
        </Link>
        <div className="flex">
          <div className="login__page">
            <Link to="/login">
              <h1>Login/Sign Up</h1>
            </Link>
          </div>
          <div className="ml-4">
            <Link to="/checkout">
              <h1>Basket</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
