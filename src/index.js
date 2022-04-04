import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Product_Page from './Product_Page'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Product_Page />
  </React.StrictMode>,
  document.getElementById('root')
);

