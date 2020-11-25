import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Services from './components/pages/Services'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Marketing from './components/pages/Marketing'
import Contactus from './components/pages/Contactus'
import Consulting from './components/pages/Consulting'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Services' exact component={Services} />
        <Route path='/product' exact component={Product} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/contact-us' exact component={Contactus} />
        <Route path='/consulting' exact component={Consulting} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
