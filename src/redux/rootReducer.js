import { combineReducers } from 'redux'
import productReducer from './Product/product.reducer'
import userReducer from './User/user.reducer'

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer
})

export default rootReducer
