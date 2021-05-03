import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Components/Checkout'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'

const App = () => {
  return (
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
  )
}

export default App
