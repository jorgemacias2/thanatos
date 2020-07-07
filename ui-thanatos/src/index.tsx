import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss'

import App from './App';

const rootElement = document.getElementById('root');
export const dom = ReactDOM.render(
    <Router>
      <App />
    </Router>,
  rootElement
);
