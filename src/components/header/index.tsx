//importando o react
import React from "react";

//criando uma class "Header" extendedo react component
class Header extends React.Component {
  render() { //função obrigatória
    return ( //return  obrigatório
      <header>
        <nav>
          <a href="#home">inicio</a>
          <a href="Historia">A Historia dos Computadores</a>
          <a href="Hardwares">Hardwares</a>
          <a href="#software">Softwares</a>
          <a href="#mobile">Mobile</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </header>
    )
  }
}

export default Header;