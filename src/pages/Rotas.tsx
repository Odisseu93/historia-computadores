import React from "react";
import Historia from './Historia';
import Hardwares from './Hardwares';
import Softwares from './Softwares';
import Mobile from './Mobile';
import Sobre from './Sobre';
import { Route, Routes } from 'react-router-dom';


function Rotas() { 
  return(
  <div className="container">
        <Routes>
          <Route path='/' element={<Historia/>}/>
          <Route path='/Historia' element={<Historia/>} />
          <Route path="/Hardwares" element={<Hardwares/>} />
          <Route path="/Softwares" element={<Softwares/>} />
          <Route path="/Mobile" element={<Mobile/>} />
          <Route path="/Sobre" element={<Sobre/>} />
          </Routes>
  </div>  
);
}

export default Rotas;
