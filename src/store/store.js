import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { fetchProducts } from './products/product.actions'
import { getFirebase } from 'react-redux-firebase'

const middlewares = [thunk.withExtraArgument(getFirebase)]

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)))

store.dispatch(fetchProducts)

export default store
