import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Components/Checkout'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
