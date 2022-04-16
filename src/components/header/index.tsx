//importando o react
import React from "react";

//criando uma class "Header" extendedo react component
function Header() {
  return ( //return  obrigatório
    <div className="container">
      <header className="hdr">
        <nav className="hdrmenu">
          <a href='/'>A Historia dos Computadores</a>
          <a href="/#/Hardwares">Hardwares</a>
          <a href="/#/Softwares">Softwares</a>
          <a href="/#/Mobile">Mobile</a>
          <a href="/#/Sobre">Sobre</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;