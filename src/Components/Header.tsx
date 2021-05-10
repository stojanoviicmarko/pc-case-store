import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CartLogo } from '../assets/icons/bag.svg'
import { ReactComponent as UserLogo } from '../assets/icons/user.svg'

export const Header: FC = () => {
  return (
    <div className="w-full">
      <div className="px-12 flex justify-between items-center">
        <Link to="/">
          <img className="w-20 p-2" src="https://image.flaticon.com/icons/png/512/1/1480.png" alt="logo" />
        </Link>
        <div className="flex">
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
        <div className="flex">
          <div className="mr-4 w-8">
            <Link to="/login">
              <UserLogo />
            </Link>
          </div>
          <div className="w-8">
            <Link to="/checkout">
              <CartLogo />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
