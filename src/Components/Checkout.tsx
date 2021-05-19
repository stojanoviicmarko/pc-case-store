import { FC } from 'react'
import { useSelector } from 'react-redux'
import '../styles/checkout.css'

export const Checkout: FC = () => {
  const item = useSelector((state: any) => state.product.basket)
  console.log(item)
  return (
    <div className="checkout">
      <div className="checkout__products">
        {item.map((i: any, index: number) => {
          return (
            <div key={index} className="border flex flex-col md:flex-row h-48 items-center p-4 mb-4">
              <img className="flex-grow-0 h-full" src={i.image} alt="product__image" />
              <h1 className="flex-grow text-xl md:ml-8">{i.brand}</h1>
              <p className="flex-grow-0 text-lg">Price: {i.price}</p>
            </div>
          )
        })}
      </div>
      <div className="checkout__total">
        <h1 className="total__price">
          SUBTOTAL: <span className="font-bold">19.00</span>
        </h1>
        <button className="total__button">Proceed to Checkout</button>
        <p className="total__paragraph">Shipping & taxes calculated at checkout</p>
      </div>
    </div>
  )
}
