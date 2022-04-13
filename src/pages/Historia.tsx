import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import References from "../components/references";

function Historia() {
  return (
    <div className="container">
      <Header />
      <main className='historia'>
        <h1 className='title'>A História dos Computadores</h1>
        <br />
        <article className='art'>
          <p>
            O primeiro computador eletromecânico foi construído por Konrad Zuse (1910–1995). Em 1936, esse engenheiro alemão construiu, a partir de relês que executavam os cálculos e dados lidos em fitas perfuradas, o Z1.
          </p>
          <div className='picture-and-text'>
            <img src="http://zuse.zib.de/resources/images/z1/zusez1livingroom.jpg" width="50%" alt="Construction of Z1 in living room" className="art-img" />
            <p>
              <p className="ref-info">
                Constução do Z1 na sala de estar fonte: <a href='http://zuse.zib.de/z1' className='link'>Konrad Zuse Internet Archive Project</a>
                <br />
              </p>
            </p>
          </div>
          <p>
            Zuse tentou vender o computador ao governo alemão, que desprezou a oferta, já que não poderia auxiliar no esforço de guerra.Os projetos de Zuse ficariam parados durante a guerra, dando a chance aos americanos de desenvolver seus computadores.
          </p>
        </article>
        <br />
        <br />
        <article className='art'>
          <p>
            O Harvard Mark I, também chamado Harvard-IBM Automatic Sequence Controlled Calculator (Calculador controlado de sequências automáticas Harvard - IBM), foi terminado em 1944 pelo engenheiro de computadores e matemático Howard H. Aiken (1900-1973), em colaboração com uma equipa de engenheiros da IBM, liderados por Clair D. Lake.
            Apoiado e financiado pela International Business Machines (IBM) e pela marinha dos Estados Unidos, o grupo começou em 1937 a projetar o computador, tendo como objetivo a construção de uma máquina que ajudasse no desenho de novas armas, no cálculo de trajetórias de artilharia e também no desvendar de códigos secretos do inimigo.
          </p>
          <div className='picture-and-text'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Harvard_Mark_I_Computer_-_Right_Segment.JPG/1024px-Harvard_Mark_I_Computer_-_Right_Segment.JPG" className="art-img" alt="Harvard Mark I Computer - Right Segment.JPG" width="50%" />
            <br />
          </div>
          <p>
            O computador pesava quase 5 toneladas, e era composto por 78 máquinas de adição e calculadoras, controladas por dispositivos mecânicos e elétricos.
            A máquina era operada através de uma fita de papel, na qual se armazenavam, por meio de perfurações, as instruções codificadas. Uma vez programado, o computador conseguia calcular automaticamente sequências de operações aritméticas com números compostos por até 23 dígitos de extensão.
            O Mark I foi usado apenas para fins militares, incluindo o desenvolvimento da bomba atómica.
            <p><iframe src="https://www.youtube.com/embed/SaFQAoYV1Nw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='video'></iframe></p>
            Entre 1947 e 1952, Howard Aiken construiu versões melhoradas do Mark I, os Mark II, III e IV.
          </p>
          <p>
            <span className="ref-info">
              Porto Editora – <em>Harvard Mk I</em> na Infopédia. Porto: Porto Editora. Disponível em <label className="current-url"><a href='https://www.infopedia.pt/$harvard-mk-i' className='link'>https://www.infopedia.pt/$harvard-mk-i</a></label>
            </span>
          </p>
        </article>
        <article className='art'>
          <br />
          <p>
            Simultaneamente, e em segredo, o Exército dos Estados Unidos desenvolvia um projeto semelhante, chefiado pelos engenheiros J. Presper Eckert e John Mauchly, cujo resultado foi o primeiro computador a válvulas, o Eletronic Numeric Integrator And Calculator (ENIAC),[4] capaz de fazer quinhentas multiplicações por segundo. Tendo sido projetado para calcular trajetórias balísticas, o ENIAC foi mantido em segredo pelo governo americano até o final da guerra, quando foi anunciado ao mundo.
          </p>
          <div className='picture-and-text'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Eniac.jpg/785px-Eniac.jpg" width="50%" alt="Construction of Z1 in living room" className="art-img" />
            <p>
              <p className="ref-info">
                ENIAC (Electronic Numerical Integrator And Computer) na Filadélfia, Pensilvânia. Glen Beck (Fundo) e Betty Snyder (Frente) programa ENIAC no edifífio 328 do Ballistic Research Laboratory (BRL): <a href='https://pt.wikipedia.org/wiki/Ficheiro:Eniac.jpg#filehistory' className='link'>Wiki</a>
                <br />
              </p>
            </p>
          </div>
          <ul />
          No ENIAC, o programa era feito rearranjando a fiação em um painel. Nesse ponto John von Neumann propôs a ideia que transformou os calculadores eletrônicos em “cérebros eletrônicos”: modelar a arquitetura do computador segundo o sistema nervoso central. Para isso, eles teriam que ter três características:
          <li>Codificar as instruções de uma forma possível de ser armazenada na memória do computador. Von Neumann sugeriu que fossem usados uns e zeros.</li>
          <li>Armazenar as instruções na memória, bem como toda e qualquer informação necessária a execução da tarefa, e</li>
          <li>Quando processar o programa, buscar as instruções diretamente na memória, ao invés de lerem um novo cartão perfurado a cada passo.</li>
          <br />
          <p>
            Este é o conceito de programa armazenado, cujas principais vantagens são: rapidez, versatilidade e automodificação. Assim, o computador programável que conhecemos hoje, onde o programa e os dados estão armazenados na memória ficou conhecido como Arquitetura de von Neumann.
          </p>
          <br />
          <p>
            Para divulgar essa ideia, von Neumann publicou sozinho um artigo. Eckert e Mauchy não ficaram muito contentes com isso, pois teriam discutido muitas vezes com ele. O projeto ENIAC acabou se dissolvendo em uma chuva de processos, mas já estava criado o computador moderno.
          </p>
          <div className='picture-and-text'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Arquiteturavn.png?20080429061059" width="50%" alt="Construction of Z1 in living room" className="art-img" />
            <p>
              <p className="ref-info">
                Visão simplificada da arquitetura de Von Neumann: <a href='https://pt.wikipedia.org/wiki/Arquitetura_de_von_Neumann' className='link'>Wiki</a>
                <br />
              </p>
            </p>
          </div>
        </article>
        <br />
        <article className='art'>
          Caso queira saber mais detalhes sobre a historia dos compotadores e si aprofundar,aqui está alguns sites interessantes que encontrei na WEB:
          <References reference_title="Wikipédia - História dos computadores" reference_url="https://pt.wikipedia.org/wiki/Computador" />
          <References reference_title="Historia do computador em minutos" reference_url="https://www.youtube.com/watch?v=F3qWg1JBPZg" />
          <References reference_title="A Evolução dos Computadores" reference_url="https://www.diferenca.com/evolucao-dos-computadores" />
          <References reference_title="Podcast Scicast #86: Arquitetura de Computadores" reference_url="https://www.deviante.com.br/podcasts/scicast/86-arquitetura-de-computadores" />
          <References reference_title="Vídeo: A criação dos computadores pessoais | Nerdologia" reference_url="https://www.youtube.com/watch?v=Vb0iORewZDA" />
        </article>
      </main>
      <Footer/>
    </div >
  );
}

export default Historia;