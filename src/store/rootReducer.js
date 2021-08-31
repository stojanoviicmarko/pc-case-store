import { combineReducers } from 'redux'
import productReducer from './products/product.reducer'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './auth/user.reducer'

const rootReducer = combineReducers({
  product: productReducer,
  firebase: firebaseReducer,
  auth: authReducer
})

export default rootReducer
