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
            Esta página foi construída para agregar informações sobre computadores, tanto na parte de softwares, com de hardwares.
          </p>
        </div>
        <div className='objetivo'>
          <p>Foi utilizando as seguintes tecnologias:</p>
          <ul className="listagem-tecnologias">
            <li><a target={"_blank"} href="https://reactjs.org/"><span className="span-React">React.js</span></a></li>
            <li><a target={"_blank"} href="https://www.typescriptlang.org/"><span className="span-TypeScript">TypeScript</span></a></li>
            <li><a target={"_blank"} href="https://developer.mozilla.org/en-US/docs/Web/HTML"><span className="span-HTML">HTML</span></a></li>
            <li><a target={"_blank"} href="https://developer.mozilla.org/en-US/docs/Web/CSS"><span className="span-CSS">CSS</span></a></li>
          </ul>
          <div className="contato">
            <p>Contato:</p>
            <a target={"_blank"} href="https://github.com/Odisseu93"><img src="https://www.imagemhost.com.br/images/2022/04/13/733553.png" alt="Github" width={"60em"} /></a>
            <a target={"_blank"} href="https://www.linkedin.com/in/ulisses-jos%C3%A9-silv%C3%A9rio-bb5562194/"><img src="https://logospng.org/download/linkedin/logo-linkedin-icon-1024.png" alt="Linkedin" width={"60em"} /></a>
            <a target={"_blank"} href="mailto:ulissessuporteti01b@gmail.com"><img src="https://www.imagemhost.com.br/images/2022/03/20/Gmail.png" alt="E-mail" width={"60em"} /></a>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Sobre;