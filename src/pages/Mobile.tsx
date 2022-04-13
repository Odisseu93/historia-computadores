import React from "react";
import Header from "../components/header";
import Article from "../components/articles";
import References from "../components/references";


function Mobile() {
  return (
    <div className="container">
      <Header />
      <main className="mobile">
        <section>
          <br />
          <h2>Smartphone</h2>
          <br />
          <Article
            textP='Um smartphone (palavra inglesa que significa "telefone inteligente", ainda sem correspondente em português) é um celular (telemóvel em Portugal) que combina recursos de computadores pessoais, com funcionalidades avançadas que podem ser estendidas por meio de programas aplicativos executados pelo seu sistema operacional (SO - sistema operativo, ou OS – operating system), chamados simplesmente aplicações.'
            url_image="https://www.apple.com/br/iphone/home/images/meta/iphone__btp62hy2cbea_og.png"
            alt_image="iPhone - Apple (BR)"
            ref_text="Wiki"
            ref_a_url="https://pt.wikipedia.org/wiki/Smartphone"
            ref_a_text="Clique aqui!"
          />
          <br />
          <h2>Tablets</h2>
          <br />

          <Article
            textP="Um tablet[1] ou táblete[2] é um dispositivo pessoal em formato de prancheta que pode ser usado para acesso à Internet, organização pessoal, visualização de fotos, vídeos, leitura de livros, jornais e revistas, para entretenimento com jogos e interação com pessoas distantes usando o Skype e o Hangouts. "
            url_image="https://images.samsung.com/is/image/samsung/africa_pt-galaxy-tab-2-10-1-p5100-gt-p5100tsexfa-006-front-black-39622603"
            alt_image="Galaxy Tab2 (10,1”, 3G) | GT-P5100TSEXFA | Samsung Business África  (Português)"
            ref_text="Wiki"
            ref_a_url="https://pt.wikipedia.org/wiki/Tablet"
            ref_a_text="Clique aqui!"
          />
        </section>
        <br />
        <article className='art'>
          <p>Links, Referencias e Informações:</p>
          <References
            reference_title="Evolução do celular: confira uma linha do tempo..."
            reference_url="https://melhorplano.net/tecnologia/evolucao-do-celular"
          />
          <References
            reference_title="4 curiosidades sobre a corrida dos tablets e smartphones"
            reference_url="https://cutt.ly/gFEJIhH"
          />
        </article>
      </main>
    </div>
  );
}

export default Mobile;