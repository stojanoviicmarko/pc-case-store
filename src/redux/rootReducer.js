import { combineReducers } from 'redux'
import counterReducer from './Product/product.reducer'

const rootReducer = combineReducers({
  counter: counterReducer
})

export default rootReducer
