import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css'
import './css/index.css';
import App from './App';

import { HashRouter as Router } from 'react-router-dom';



<style>
  @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>


ReactDOM.render(
   <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
