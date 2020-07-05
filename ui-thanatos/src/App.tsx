import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <div className="container">Home</div>
      </Route>
      <Route exact path='/first-page'>
        <div className="container">First Page</div>
      </Route>
    </Switch>
  );
}

export default App;
