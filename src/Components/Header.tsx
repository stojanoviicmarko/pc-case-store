import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const Header = () => {
  const basketItems = useSelector((state: any) => state.productReducer.basket)
  return (
    <div className="w-full bg-primary">
      <div className="px-12 flex justify-between items-center">
        <Link to="/">
          <img className="w-20 p-2" src="https://image.flaticon.com/icons/png/512/1/1480.png" alt="logo" />
        </Link>
        <div className="flex">
          <div className="text-xl font-bold">
            <Link to="/login">LOG IN</Link>
          </div>
          <div className="ml-12 flex justify-center items-center text-xl font-bold">
            <Link to="/checkout">
              <ShoppingCartIcon />
            </Link>
            <h1 className="w-12 ml-2 text-sm">{basketItems.length}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
