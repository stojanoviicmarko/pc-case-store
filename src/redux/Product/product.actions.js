import * as types from './product.types'

export const addToBasket = product => ({
  type: types.ADD_TO_BASKET,
  product
})
