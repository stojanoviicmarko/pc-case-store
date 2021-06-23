import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../redux/Product/product.actions'
import '../styles/product.css'

interface productProps {
  id: number
  brand: string
  price: number
  image: string
  model: string
  description: string
}

export const Product: FC<productProps> = ({ id, brand, image, price, model, description }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(
      addToBasket({
        id: id,
        brand: brand,
        price: price,
        image: image,
        model: model,
        description: description
      })
    )
  }

  return (
    <div className="product">
      <img className="product__image" src={image} alt="product__image" />
      <h1 className="product__title">
        {brand.toUpperCase()} : {model}
      </h1>
      <p className="product__price">${price}.00</p>
      <button onClick={handleClick} className="product__button">
        ADD TO CART
      </button>
    </div>
  )
}
