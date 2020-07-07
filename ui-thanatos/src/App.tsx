import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import CustomNavbar from './components/CustomNavbar';

function App() {
  return (
    <>
    <CustomNavbar></CustomNavbar>
    <Switch>
      <Route exact path='/'>
        <div className="container">Home</div>
      </Route>
      <Route exact path='/first-page'>
        <div className="container">First Page</div>
      </Route>
    </Switch>
    </>
  );
}

export default App;
