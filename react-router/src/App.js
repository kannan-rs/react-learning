import React from 'react'
import './App.css';
import About from './components/About';
import Navigation from './components/Nav';
import Shop from './components/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Product from './components/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        {/* <About />
        <Shop /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>Home</div>
)

export default App;
