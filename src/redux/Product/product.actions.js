import * as types from './product.types'

export const addToBasket = product => ({
  type: types.ADD_TO_BASKET,
  product
})

const recieveProducts = products => {
  return {
    type: types.RECEIVE_PRODUCTS,
    products
  }
}

export const fetchProducts = () => dispatch => {
  fetch('./products.json').then(data => data.json()).then(products => dispatch(recieveProducts(products)))
}

export const removeFromBasket = item => {
  return {
    type: types.REMOVE_FROM_BASKET,
    item
  }
}
