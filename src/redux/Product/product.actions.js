import { FETCH_PRODUCT } from './product.types'

export const fetchProducts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data =>
    dispatch({
      type: FETCH_PRODUCT,
      payload: data
    })
  )
}
