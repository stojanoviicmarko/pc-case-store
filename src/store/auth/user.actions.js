import { auth } from '../../firebase'
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR
} from '../auth/user.types'

export const signUp =
  (email, password, rePassword, callBack) => async (dispatch) => {
    try {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((signUpData) => {
          if (password === rePassword) {
            auth.onAuthStateChanged((user) => {
              dispatch({
                type: SIGNUP_SUCCESS,
                payload: 'Your account was successfully created!'
              })
              callBack()
            })
          } else {
            dispatch({
              type: SIGNUP_ERROR,
              payload: 'Enter your password twice correctly.'
            })
          }
        })
        .catch((error) => {
          dispatch({
            type: SIGNUP_ERROR,
            payload: error.message
          })
        })
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        payload: 'Something went wrong.'
      })
    }
  }

export const signIn = (email, password, callBack) => (dispatch) => {
  try {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        auth.onAuthStateChanged(() => {
          dispatch({
            type: SIGNIN_SUCCESS,
            payload: 'You successfully signed in!'
          })
          callBack()
        })
      })
      .catch((error) => {
        dispatch({
          type: SIGNIN_ERROR,
          payload: error.message
        })
      })
  } catch {
    dispatch({
      type: SIGNIN_ERROR,
      payload: 'Invalid login credentials.'
    })
  }
}

export const signOut = () => (dispatch) => {
  try {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: SIGNOUT_SUCCESS,
          payload: 'You have successfully signed out.'
        })
      })
      .catch(() => {
        dispatch({
          type: SIGNOUT_ERROR,
          payload: 'Error, we were not able to log you out. Please try again.'
        })
      })
  } catch (error) {
    dispatch({
      type: SIGNOUT_ERROR,
      payload: 'Error, we were not able to log you out. Please try again.'
    })
  }
}
