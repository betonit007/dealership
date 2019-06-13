import React from 'react';
import { Router, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Inventory from './Inventory';
import Header from './Header';
import FormField from './FormField';
import EditCar from './EditCar';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/inventory' exact component={Inventory} />
        <Route path='/form' exact component={FormField} />
        <Route path='/edit/:id' exact component={EditCar} />
      </Router>
    </div>
  )
}

export default App;