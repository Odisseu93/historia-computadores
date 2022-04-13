import React from "react";
import Header from "../components/header";
import Article from "../components/articles";
import References from "../components/references";

function Softwares() {
  return (
    <div className="container">
      <Header />
      <main className="coftwares">
        <br />
        <section>
          <h2>Sistema Operacional</h2>
          <Article
            textP="Um sistema operacional (SO) é uma coleção de programas que inicializam o hardware do computador. Fornece rotinas básicas para controle de dispositivos. Fornece gerência, escalonamento e interação de tarefas. Mantém a integridade de sistema."
            url_image="https://s.zst.com.br/cms-assets/2021/02/sistema-operacional-windows-macos-linux.jpg"
            alt_image="imagens das logos de sitemas operacionais"
            ref_text="O que é um SO"
            ref_a_url="https://www.oficinadanet.com.br/artigo/851/o_que_e_um_sistema_operacional"
            ref_a_text="Clique aqui!"
          />
        </section>
        <br />
        <article className='art'>
          <p>Links, Referencias e Informações:</p>
          <References
            reference_title="O Primeiro Software Criado: História da Informática"
            reference_url="https://tecnologia.culturamix.com/tecnologias/o-primeiro-software-criado-historia-da-informatica"
          />
        </article>
      </main>
    </div>
  );
}

export default Softwares;