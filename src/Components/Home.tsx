import { FC } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const Home: FC = () => {
  const products = useSelector((state: any) => state.productReducer.products)
  return (
    <div className="home container mt-48 mx-auto">
      <div className="grid grid-cols-3 grid-rows-1 gap-24">
        {products.map((p: any) => {
          return <Product key={p.id} name={p.brand} price={p.price} image={p.image} />
        })}
      </div>
    </div>
  )
}

export default Home
