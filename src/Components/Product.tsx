import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../redux/Product/product.actions'

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
    <div className="flex items-center justify-center flex-col text-sm rounded-sm justify-self-center">
      <img className="h-56 p-4 bg-gray-100 hover:bg-gray-200 duration-150" src={image} alt="product__image" />
      <h1 className="mt-2 font-bold lg:text-base text-xs">
        {name.toUpperCase()} : {model}
      </h1>
      <p className="font-normal text-lg mt-2">${price}.00</p>
      <button
        onClick={handleClick}
        className="mt-2 w-36 h-8 border font-bold border-black hover:bg-primary rounded-sm hover:text-white"
      >
        ADD TO CART
      </button>
    </div>
  )
}
