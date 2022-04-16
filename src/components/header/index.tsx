//importando o react
import React from "react";

//criando uma class "Header" extendedo react component
// function Header() {
//   return ( //return  obrigatório
//     <div className="container">
//       <header className="hdr">
//         <nav className="hdrmenu">
//           <a href='/'>A Historia dos Computadores</a>
//           <a href="/#/Hardwares">Hardwares</a>
//           <a href="/#/Softwares">Softwares</a>
//           <a href="/#/Mobile">Mobile</a>
//           <a href="/#/Sobre">Sobre</a>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Header;

//header depois do Deployment
function Header() {
  return ( //return  obrigatório
    <div className="container">
      <header className="hdr">
        <nav className="hdrmenu">
          <a href='https://odisseu93.github.io/historia-computadores/'>A Historia dos Computadores</a>
          <a href="https://odisseu93.github.io/historia-computadores/#/Hardwares">Hardwares</a>
          <a href="https://odisseu93.github.io/historia-computadores/#/softwares">Softwares</a>
          <a href="https://odisseu93.github.io/historia-computadores/#/mobile">Mobile</a>
          <a href="https://odisseu93.github.io/historia-computadores/#/sobre">Sobre</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;