import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Header = () => {
  const basketItems = useSelector((state: any) => state.productReducer.basket)
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
          <div className="ml-4 flex">
            <Link to="/checkout">Basket</Link>
            <h1 className="ml-4">{basketItems.length}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
