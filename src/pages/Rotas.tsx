import React from "react";
import Historia from './historia/Historia';
import Hardwares from './Hardwares';
import Softwares from './Softwares';
import Mobile from './Mobile';
import Sobre from './Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Rotas() { 
  return(
  <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Historia/>} />
          <Route path="Historia" element={<Historia/>} />
          <Route path="Hardwares" element={<Hardwares/>} />
          <Route path="Softwares" element={<Softwares/>} />
          <Route path="Mobile" element={<Mobile/>} />
          <Route path="Sobre" element={<Sobre/>} />
        </Routes>
        </BrowserRouter>

  </div>  
);
}

export default Rotas;