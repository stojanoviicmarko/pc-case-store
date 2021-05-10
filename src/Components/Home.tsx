import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'

export const Home: FC = () => {
  const products = useSelector((state: any) => state.product.arrayOfProducts)
  return (
    <div>
      <div className="home container mx-auto px-6 sm:px-4 mt-8 h-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 grid-rows-1 gap-8">
          {products.map((p: any) => {
            return <Product key={p.id} id={p.id} name={p.brand} price={p.price} image={p.image} model={p.model} />
          })}
        </div>
      </div>
    </div>
  )
}
