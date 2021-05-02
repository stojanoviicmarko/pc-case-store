import { FETCH_PRODUCT, ADD_PRODUCT } from './product.types'

const INITIAL_STATE = {
  count: 0
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        count: state.count + 1
      }

    case ADD_PRODUCT:
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state
  }
}

export default reducer
