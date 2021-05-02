import { FETCH_PRODUCT, ADD_PRODUCT } from './product.types'

export const increaseCounter = () => {
  return {
    type: FETCH_PRODUCT
  }
}

export const decreaseCounter = () => {
  return {
    type: ADD_PRODUCT
  }
}
