import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About } from './Components/About'
import { Checkout } from './Components/Checkout'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Login } from './Components/Login'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <Header />
          <About />
          <Footer />
        </Route>
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
          <Footer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
