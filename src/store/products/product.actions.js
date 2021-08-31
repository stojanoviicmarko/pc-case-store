import * as types from './product.types'
import { db } from '../../firebase'

export const fetchProducts = async (dispatch) => {
  await db
    .collection('products')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: doc.data()
        })
      })
    })
}

export const addToBasket = (product) => ({
  type: types.ADD_TO_BASKET,
  product
})

export const removeFromBasket = (item) => {
  return {
    type: types.REMOVE_FROM_BASKET,
    item
  }
}
