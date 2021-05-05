import { useSelector } from 'react-redux'
import Product from './Product'
import caseImage from '../Assets/_images/case-2.png'
import headerImage from '../Assets/_images/header-image.jpg'

const Home = () => {
  const products = useSelector((state: any) => state.productReducer.products)
  return (
    <div>
      <div className="w-full h-auto relative">
        <img className="w-auto h-auto p-12 pt-0" src={headerImage} alt="header__image" />
      </div>
      <div className="home container mx-auto px-6 sm:px-4 mt-8 h-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 grid-rows-1 gap-8">
          {products.map((p: any) => {
            return <Product key={p.id} id={p.id} name={p.brand} price={p.price} image={caseImage} model={p.model} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
