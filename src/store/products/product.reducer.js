import * as types from './product.types'

const initialState = {
  products: [],
  basket: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_BASKET:
      return {
        ...state,
        basket: [ ...state.basket, action.product ]
      }
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: [ ...state.products, action.payload ]
      }
    case types.REMOVE_FROM_BASKET:
      let index = state.basket.findIndex(basketItem => basketItem.id === action.item.id)
      let modifiedBasket = [ ...state.basket ]
      if (index >= 0) {
        modifiedBasket.splice(index, 1)
      } else {
        console.warn("Couldn't find basket item to remove.'")
      }
      return {
        ...state,
        basket: modifiedBasket
      }
    default:
      return state
  }
}

export default reducer
