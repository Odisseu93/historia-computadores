import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function Sobre() {
  return (
    <div className="container">
      <Header />
      <main className="sobre">
        <div className="intro">
          <p>
            Esta página foi contruída com o objetivo de agregar informações sobre computadores, tanto na parte de sofwares,com de hardware
          </p>
        </div>
        <div className='objetivo'>
          <p>O obejetivo da criação desta página foi para estudar e imprementar agumas coisas utilizando a seguintes tecnologias:</p>
          <ul className="listagem-tecnologias">
            <li><a href="https://reactjs.org/"><span className="span-React">Rect.js</span></a></li>
            <li><a href="https://www.typescriptlang.org/"><span className="span-TypeScript">TypeScript</span></a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><span className="span-HTML">HTML</span></a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><span className="span-CSS">CSS</span></a></li>
          </ul>
          <div className="contato">
            <p>Contato</p>
            <a href="https://github.com/Odisseu93"><img src="https://www.imagemhost.com.br/images/2022/04/13/733553.png" alt="Github" width={"60em"} /></a>
            <a href="https://www.linkedin.com/in/ulisses-jos%C3%A9-silv%C3%A9rio-bb5562194/"><img src="https://logospng.org/download/linkedin/logo-linkedin-icon-1024.png" alt="Linkedin" width={"60em"} /></a>
            <a href="mailto:ulissessuporteti01b@gmail.com"><img src="https://www.imagemhost.com.br/images/2022/03/20/Gmail.png" alt="E-mail" width={"60em"} /></a>

          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Sobre;