import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { database } from '../firebase'
import { addToBasket } from '../store/products/product.actions'
import { auth } from '../firebase'
import '../styles/product.css'

interface productProps {
  id: number
  brand: string
  price: number
  image: string
  model: string
  description: string
}

export const Product: FC<productProps> = ({
  id,
  brand,
  image,
  price,
  model,
  description
}) => {
  const dispatch = useDispatch()
  const productData = {
    id: id,
    brand: brand,
    price: price,
    image: image,
    model: model,
    description: description
  }
  const handleClick = () => {
    dispatch(addToBasket(productData))
  }

  const addToWishlist = (userId) => {
    database.ref(`wishlist/${userId}`).push({
      product: productData
    })
  }

  return (
    <div className="product">
      <img className="product__image" src={image} alt="product__image" />
      <h1 className="product__title">
        {brand.toUpperCase()} : {model}
      </h1>
      <p className="product__price">${price}.00</p>
      <button
        className="product__wishlist"
        onClick={(e) => addToWishlist(auth.currentUser?.uid)}
      >
        ADD TO WISHLIST
      </button>
      <button onClick={handleClick} className="product__button">
        ADD TO CART
      </button>
    </div>
  )
}
