import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR
} from '../auth/user.types'

const initialState = {
  authMessage: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case SIGNUP_ERROR:
    case SIGNIN_SUCCESS:
    case SIGNIN_ERROR:
    case SIGNOUT_SUCCESS:
    case SIGNOUT_ERROR:
      return {
        ...state,
        authMessage: action.payload
      }
    default:
      return state
  }
}

export default authReducer
