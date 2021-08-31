import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from 'firebase/app'
import App from './App'
import './index.css'

const rrfConfig = {
  userProfile: 'users'
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)
