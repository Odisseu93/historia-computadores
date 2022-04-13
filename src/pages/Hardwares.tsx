import React from "react";
import Header from "../components/header";
import Article from "../components/articles";
import References from "../components/references";

function Hardwares() {
  return (
    <div className="container">
      <Header />
      <main className="hardwares">
        <br />
        <section>
          <h2>Armazenamento de dados</h2>
          <Article
            textP="Os dispositivos de armazenamento por meio magnético são os mais antigos e mais utilizados atualmente, por permitir uma grande densidade de informação, ou seja, armazenar grande quantidade de dados em um pequeno espaço físico. São mais antigos, porém foram se aperfeiçoando no decorrer do tempo.
           Os dispositivos de armazenamento magnéticos que possuem mídias removíveis normalmente não possuem capacidade e confiabilidade equivalente aos dispositivos fixos, pois sua mídia é frágil e possui capacidade de armazenamento muito pequena se comparada a outros tipos de dispositivos de armazenamento magnéticos. Como exemplo de dispositivos de armazenamento por meio magnético, podemos citar os Discos Rígidos."
           url_image="https://br.crucial.com/content/dam/crucial/articles/pc-users/why-is-my-laptop-so-slow-/hard-disk-drive.jpg.transform/large-jpg/img.jpg"
            alt_image="hard drive"
            ref_text="O que um disco rígido"
            ref_a_url="https://www.infoescola.com/informatica/disco-rigido/"
            ref_a_text="Clique aqui!"
          />
        </section>
        <br/>
        <article className='art'>
          <p>Links, Referencias e Informações:</p>
          <References
            reference_title="A Evolução dos Discos Rígidos"
            reference_url="https://www.techtudo.com.br/platb/hardware/2011/01/06/evolucao-discos-rigidos-hd/"
          />
          <References
            reference_title="Memórias RAM e ROM"
            reference_url="https://www.infowester.com/memoria.php"
          />
        </article>
      </main>
    </div>
  );
}
export default Hardwares;