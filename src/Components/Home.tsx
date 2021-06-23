import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'
<<<<<<< HEAD
=======
import { db } from '../firebase'
import '../styles/home.css'
>>>>>>> b6cb80dccf47023091df6832630f199813b4a9d3
import homeImage from '../assets/jumbotron-image.png'
import '../styles/home.css'

export const Home: FC = () => {
<<<<<<< HEAD
  const products = useSelector((state: any) => state.product.products)
=======
  const products = useSelector((state: any) => state.product.arrayOfProducts)

  useEffect(() => {
    fetchBlogs()
  })

  const fetchBlogs = async () => {
    db.collection('products').get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log(snapshot)
      })
    })
  }

>>>>>>> b6cb80dccf47023091df6832630f199813b4a9d3
  return (
    <div className="home">
      <div className="home__jumbotron">
        <img src={homeImage} alt="case" />
        <h1 className="jumbotron__title">Buy the best PC Cases today!</h1>
        <p className="jumbotron__paragraph">Quiet, cool, and brilliant.</p>
        <button className="jumbotron__button">SHOP NOW</button>
      </div>
      <div className="home__products">
        {products.map((p: any, index: number) => {
          return (
            <Product
              key={index}
              id={p.id}
              brand={p.brand}
              price={p.price}
              image={p.image}
              model={p.model}
              description={p.description}
            />
          )
        })}
      </div>
    </div>
  )
}
