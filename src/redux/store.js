import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { fetchProducts } from '../redux/Product/product.actions'

const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(fetchProducts)

export default store
