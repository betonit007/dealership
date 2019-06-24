import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Inventory from './Inventory';
import Header from './Header';
import FormField from './FormField';
import EditCar from './EditCar';
import DeleteCar from '../components/CarDelete';
import ShowCar from '../components/ShowCar';
import history from '../history';


const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/inventory' exact component={Inventory} />
          <Route path='/form' exact component={FormField} />
          <Route path='/edit/:id' exact component={EditCar} />
          <Route path='/delete/:id' exact component={DeleteCar} />
          <Route path='/cars/:id' exact component={ShowCar} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;