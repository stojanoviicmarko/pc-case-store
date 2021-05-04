import { useSelector } from 'react-redux'

const Checkout = () => {
  const item = useSelector((state: any) => state.productReducer.basket)
  return (
    <div className="flex flex-row justify-center items-end mt-24 flex-wrap-reverse">
      <div className="flex flex-col w-full sm:w-1/2">
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
      <div className="w-128 h-36 flex flex-col justify-center items-center md:ml-8 mb-8 md:mb-0">
        <h1 className="font-semibold">
          SUBTOTAL: <span className="font-bold">19.00</span>
        </h1>
        <button className="mt-8 w-48 h-8 border border-gray-500 hover:bg-gray-500 rounded-sm hover:text-white active:bg-gray-800 font-semibold">
          Proceed to Checkout
        </button>
        <p className="text-sm mt-4">Shipping & taxes calculated at checkout</p>
      </div>
    </div>
  )
}

export default Checkout
