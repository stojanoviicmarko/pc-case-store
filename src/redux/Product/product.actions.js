import * as types from './product.types'

export const addToBasket = product => ({
  type: types.ADD_TO_BASKET,
  product
})

export const removeFromBasket = item => {
  return {
    type: types.REMOVE_FROM_BASKET,
    item
  }
}
