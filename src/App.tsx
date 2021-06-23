import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About } from './Components/About'
import { Checkout } from './Components/Checkout'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { Registration } from './Components/Registration'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <Header />
          <About />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
