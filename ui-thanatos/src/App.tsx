import React from 'react';
import { Switch } from 'react-router-dom';

import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CustomNavbar from './components/CustomNavbar';


function App() {
  return (
    <>
    <CustomNavbar />
    <Switch>

    </Switch>
    </>
  );
}

export default App;
