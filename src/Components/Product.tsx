import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../redux/Product/product.actions'
import '../styles/product.css'

interface productProps {
  id: number
  name: string
  price: number
  image: string
  model: string
}

export const Product: FC<productProps> = ({ id, name, image, price, model }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(
      addToBasket({
        id: id,
        brand: name,
        price: price,
        image: image,
        model: model
      })
    )
  }

  return (
    <div className="product">
      <img className="product__image" src={image} alt="product__image" />
      <h1 className="product__title">
        {name.toUpperCase()} : {model}
      </h1>
      <p className="product__price">${price}.00</p>
      <button onClick={handleClick} className="product__button">
        ADD TO CART
      </button>
    </div>
  )
}
