import Product from './Product'
import caseImage from '../Assets/_images/case-1.png'

const Home = () => {
  return (
    <div className="home container mt-48 mx-auto">
      <div className="">
        <div className="grid grid-cols-3 grid-rows-1 gap-24">
          <Product name="Corsair" image={caseImage} price="19.99" />
          <Product name="Corsair" image={caseImage} price="19.99" />
          <Product name="Corsair" image={caseImage} price="19.99" />
        </div>
        <div className="grid grid-cols-4 grid-rows-1 gap-24 mt-24">
          <Product name="Corsair" image={caseImage} price="19.99" />
          <Product name="Corsair" image={caseImage} price="19.99" />
          <Product name="Corsair" image={caseImage} price="19.99" />
          <Product name="Corsair" image={caseImage} price="19.99" />
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-48 mt-24">
          <Product name="Corsair" image={caseImage} price="19.99" />
          <Product name="Corsair" image={caseImage} price="19.99" />
        </div>
      </div>
    </div>
  )
}

export default Home
