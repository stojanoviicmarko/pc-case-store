import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'
import { db } from '../firebase'
import '../styles/home.css'
import homeImage from '../assets/jumbotron-image.png'

export const Home: FC = () => {
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

  return (
    <div className="home">
      <div className="home__jumbotron">
        <img src={homeImage} alt="case" />
        <h1 className="jumbotron__title">Buy the best PC Cases today!</h1>
        <p className="jumbotron__paragraph">Quiet, cool, and brilliant.</p>
        <button className="jumbotron__button">SHOP NOW</button>
      </div>
      <div className="home__products">
        {products.map((p: any) => {
          return (
            <Product
              key={p.id}
              id={p.id}
              name={p.brand}
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
