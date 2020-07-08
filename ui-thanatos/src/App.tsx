import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CustomNavbar from './components/CustomNavbar';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <>
    <CustomNavbar></CustomNavbar>
    <Switch>
      <Route exact path='/login'>
        <LoginForm />
      </Route>
      <Route exact path='/signup'>
        <SignupForm />
      </Route>
    </Switch>
    </>
  );
}

export default App;
