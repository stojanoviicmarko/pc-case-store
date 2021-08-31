import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About } from './components/About'
import { Checkout } from './components/Checkout'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Registration } from './components/Registration'
import Wishlist from './components/Wishlist'

const App = () => {
  return (
    <Router>
      <div className="content-container">
        <Switch>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/wishlist">
            <Header />
            <Wishlist />
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
      </div>
      <Footer />
    </Router>
  )
}

export default App
