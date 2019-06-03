import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Inventory from './Inventory';
import Header from './Header';
import FormField from './FormField';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/inventory' component={Inventory} />
        <Route path='/form' component={FormField} />
      </BrowserRouter>
    </div>
  )
}

export default App;