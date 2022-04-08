import React from 'react';
import Header from './components/header';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <h1>A História dos Computadores</h1>
        <article className='art'>
          <p>
            O primeiro computador eletromecânico foi construído por Konrad Zuse (1910–1995). Em 1936, esse engenheiro alemão construiu, a partir de relês que executavam os cálculos e dados lidos em fitas perfuradas, o Z1.
          </p>
          <p>
            <img src="http://zuse.zib.de/resources/images/z1/zusez1livingroom.jpg" width="50%" alt="Construction of Z1 in living room" className="art-img"/>
            constução do Z1 na sala de estar fonte: <a href='http://zuse.zib.de/z1' className='link'>Konrad Zuse Internet Archive Project</a>
          </p>
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
          <p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Harvard_Mark_I_Computer_-_Right_Segment.JPG/1024px-Harvard_Mark_I_Computer_-_Right_Segment.JPG" className="art-img" alt="Harvard Mark I Computer - Right Segment.JPG" width="50%" />
            Harvard Mark I Computer
          </p>
          <p>
            O computador pesava quase 5 toneladas, e era composto por 78 máquinas de adição e calculadoras, controladas por dispositivos mecânicos e elétricos.
            A máquina era operada através de uma fita de papel, na qual se armazenavam, por meio de perfurações, as instruções codificadas. Uma vez programado, o computador conseguia calcular automaticamente sequências de operações aritméticas com números compostos por até 23 dígitos de extensão.
            O Mark I foi usado apenas para fins militares, incluindo o desenvolvimento da bomba atómica.
            Entre 1947 e 1952, Howard Aiken construiu versões melhoradas do Mark I, os Mark II, III e IV.
          </p>
          <p>
            <span className="ref-info">
              Porto Editora – <em>Harvard Mk I</em> na Infopédia. Porto: Porto Editora. Disponível em <label className="current-url"><a href='https://www.infopedia.pt/$harvard-mk-i' className='link'>https://www.infopedia.pt/$harvard-mk-i</a></label>
            </span>
          </p>
        </article>

      </main>
    </div >
  );
}

export default App;
