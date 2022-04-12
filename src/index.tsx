import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './css/index.css';
import Historia from './pages/Historia';
import Hardwares from './pages/Hardwares';
import Softwares from './pages/Softwares';
import Mobile from './pages/Mobile';
import Sobre from './pages/Sobre';
import Article from './components/articles';
import App from './App';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

