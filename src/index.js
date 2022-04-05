import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom'
import Search_Page from './Search_Page';

ReactDOM.render(
  <React.StrictMode>
    <Search_Page />
  </React.StrictMode>,
  document.getElementById('root')
);

