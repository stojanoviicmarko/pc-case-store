import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Header = () => {
  return (
    <div className="w-full">
      <div className="px-24 pt-4 flex justify-between items-center">
        <Link to="/">
          <img className="w-24" src={logo} alt="logo" />
        </Link>
        <div className="flex">
          <div className="login__page">
            <Link to="/login">Login/Sign Up</Link>
          </div>
          <div className="ml-4">
            <Link to="/checkout">Basket</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
