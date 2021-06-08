import { FC, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NumberFormat from 'react-number-format'
import { removeFromBasket } from '../redux/Product/product.actions'
import '../styles/checkout.css'

export const Checkout: FC = () => {
  const dispatch = useDispatch()
  const item = useSelector((state: any) => state.product.basket)
  const [ total, setTotal ] = useState(0)

  useEffect(
    () => {
      let total = 0
      item.map((i: any) => (total += i.price))
      setTotal(total)
    },
    [ item ]
  )

  return (
    <div className="checkout">
      <div className="checkout__products">
        {item.map((i: any, index: number) => {
          return (
            <div key={index} className="checkout__product">
              <img className="checkout__product__image" src={i.image} alt="product__image" />
              <div className="checkout__product__info">
                <h1 className="checkout__product__title">{i.brand}</h1>
                <p className="checkout__product__description">{i.description}</p>
              </div>
              <div className="checkout__product__wrapper">
                <p className="checkout__product__price">${i.price}</p>
                <button onClick={() => dispatch(removeFromBasket(i))} className="checkout__remove__button">
                  Remove
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <div className="checkout__total">
        <h1 className="total__price">
          SUBTOTAL:
          <NumberFormat
            value={total}
            displayType={'text'}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'$'}
          />
        </h1>
        <button className="total__button">PROCEED TO CHECKOUT</button>
        <p className="total__paragraph">Shipping & taxes calculated at checkout</p>
      </div>
    </div>
  )
}
