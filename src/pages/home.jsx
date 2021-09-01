import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ISPTEC from "../images/isptec.jpg";
import ITEL from "../images/itel.jpg";
import ISUTIC from "../images/isutic.jpg";
import IMIL from "../images/imil.jpg";
import GUIDE from "../images/Guide.jpg";
import EASY from "../images/Easy.svg";
import SMILE from "../images/Smile.jpg";
import CORRECT from "../images/Correct.svg";
import ORGANIZATION from "../images/Organization.svg";
import CLOUD from "../images/Cloud.svg";
import EVALUATION from "../images/Evaluation.svg";
import CLOCK from "../images/Clock.svg";
import STATISTIC from "../images/Statistic.svg";
import PROFESSOR from "../images/professorIlustracao.jpg";
import PROFD from "../images/ProfDenise.jpg";
import PROFJ from "../images/ProfJose.jpg";
import PROFA from "../images/ProfAuria.jpg";
import PROFM from "../images/ProfMatuta.jpg";



import {
  Banner,
  SobreSistema,
  Recursos,
  Usuarios,
  ProfessorModerno,
  Cadastrar,
  FaleConnosco
} from "../styles/home/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserClock,
  faUserEdit,
  faUserCircle,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";



function Home() {
  
  const [usuarios, setUsuarios] = useState([PROFD , PROFJ, PROFA, PROFM]);
  
 

  function hundle(){
    (document.querySelector('.inputs').style.border = "solid 1px red");
  }

  return (
    <>
      <Header />

      <Banner>
        <section>
          <article id="inicio">
            <h1>Bem-Vindo (a) ao Sistema de Provas Online</h1>
            <p>Saiba sobre as suas funcionalidades e cadastra-se já!</p>

            <a href="#footer" className="link"> <button id="btn1">CONTACTA-NOS</button>
            </a>
            <button id="btn2">SABER MAIS</button>
          </article>
        </section>
      </Banner>

      <SobreSistema id="sobresistema">
        <section>
          <h1 id="h1">Por que usar o criador de provas online?</h1>
          <p>
            Precisa de um software de teste para seus alunos? Deseja configurar
            facilmente seu software de provas <br></br>e convidar seus alunos?
            Comece a usar o Criador de Provas Online e tudo isso estará ao seu
            alcance.<br></br> Dê uma olhada em todos os recursos do sistema.
          </p>
        </section>

        <article>
          <div className="cards">
          <h1>
              <img src={SMILE} alt="" id="smileIcon"></img>
            <br></br>Suporte com um sorriso 
            </h1>
           
              Um SPO com um toque humano. Somos nós, nosso objectivo é deixar
              você feliz com os recursos do nosso sistema.
           
          </div>

          <div className="cards">
          <h1>
              <img src={EASY} alt="" id="easyIcon"></img>
              <br></br>Simples e fácil de usar 
            </h1>
            
              Nosso criador de provas é simples e fácil de usar. Tanto para os
              alunos como para os professores. Ele é super intuitivo!
           
          </div>

          <div className="cards">
          <h1>
              <img src={GUIDE} alt="" id="guideIcon"></img>
              <br></br> Suporte com guia 
            </h1>
          
              Estamos disponíveis para suas perguntas e para te mostrar a
              ferramenta. Sua contribuição nos torna melhores.
          
          </div>
        </article>
      </SobreSistema>

      <Recursos id="recursos">
        <section>
          <article>
            <h1 id="h1RecursosTitle">Recursos</h1>
            <p id="p1">
              Conheça os principais benefícios da ferramenta que irá transformar
              a sua forma de organizar provas.
            </p>

            <div>
              <p className="recursosIcon">
                <img src={CLOCK} alt=""></img>
              </p>
              <h1 className="h1Recursos">Otimização do Tempo</h1>
              <p className="p2">
                Crie provas online com poucos cliques utilizando o mais completo
                banco de questões de Angola.
              </p>
            </div>

            <div>
            <p className="recursosIcon">
              <img src={EVALUATION} alt=""></img>
              </p>
              <h1 className="h1Recursos">Avaliações Online</h1>
              <p className="p2">
                Reduza os gastos com impressões e tenha maior flexibilidade no
                processo da prova.
              </p>
            </div>

            <div>
             <p className="recursosIcon">
              <img src={CORRECT} alt=""></img>
              </p>
              <h1 className="h1Recursos">Correção Automática</h1>
              <p className="p2">
                Faça correção automática das respostas da prova pelo nosso
                sistema e obtenha sua pauta
              </p>
            </div>
          </article>

          <article>
            <div>
            <p className="recursosIcon">
              <img src={CLOUD} alt=""></img>
              </p>
              <h1 className="h1Recursos">Sistema Em Nuvem</h1>
              <p className="p2">
                Acesse o sistema quando e onde quiser. Suas informações ficam
                armazenadas de forma segura.
              </p>
            </div>

            <div>
            <p className="recursosIcon">
              <img src={STATISTIC} alt=""></img>
              </p>
              <h1 className="h1Recursos">Estatísticas</h1>
              <p className="p2">
                Tenha análises estatísticas de desempenho dos seus alunos e
                turmas através de tabelas e gráficos.
              </p>
            </div>

            <div>
            <p className="recursosIcon">
              <img src={ORGANIZATION} alt=""></img>
              </p>
              <h1 className="h1Recursos">Organização</h1>
              <p className="p2">
                Tenha todas as suas avaliações, turmas e alunos organizados num
                só lugar.
              </p>
            </div>
          </article>
        </section>
      </Recursos>
           

      <Usuarios id="usuarios">   
        <section>
           <h1>
              Conheça os usuários que fizeram do SPO sua escolha para suas provas
              online, faça você também!
            </h1>

           <div>
            {usuarios.map((lista) => (
             <p>
             <img src={lista} alt="" />
             PROFESSOR (A)
           </p>
          ))}
          
          </div>
        </section>
      </Usuarios>

      <ProfessorModerno>
        <section>
          <div className="slide-container" className="slides">
            <Slide>
            <div className="each-slide">
                  <h1>Soluções Para o Professor Moderno</h1>
                  <p>
                   O professor moderno é aquele que está em constante evolução, saiba quais
                   são os seus benefícios ao acessar o sistema.
                  </p>
                  <div className="conteudo">
                    <h3>
                      <FontAwesomeIcon icon={faUserClock} className="icon" />
                      <br></br>Otimização de Processos
                    </h3>
                
                    <ul>
                    <li>Redução de custos operacionais;</li>
                    <li> Reducação do tempo gasto na elaboração e correcção de
                      provas.</li>
                    </ul>
                  </div>
              </div>

              
              <div className="each-slide">
                
                  <h1>Soluções Para o Professor Moderno</h1>
                  <p>
                   O professor moderno é aquele que está em constante evolução, saiba quais
                   são os seus benefícios ao acessar o sistema.
                  </p>
                  <div className="conteudo">
                    <h3>
                      <FontAwesomeIcon icon={faUserEdit} className="icon" />
                      <br></br>Gestão de Processos
                    </h3>
                    <ul>
                    <li>
                      Gestão de dados detalhados sobre o desempenho de seus{" "}
                      <br></br> alunos e turmas.
                      </li>
                      </ul>
                </div>
              </div>

              
              <div className="each-slide">
                  
                  <h1>Soluções Para o Professor Moderno</h1>
                  <p>
                   O professor moderno é aquele que está em constante evolução, saiba quais
                   são os seus benefícios ao acessar o sistema.
                  </p>
                  <div className="conteudo">
                    <h3>
                      <FontAwesomeIcon icon={faUserCircle} className="icon" />
                      <br></br>Flexibilidade
                    </h3>
                  
                      <ul>
                     <li>Utilização de diferentes meios e dispositivos para
                      aplicação de provas;</li>
                      <li>O estudante não precisará
                      mais de se deslocar para locais e horários específicos
                      para fazer provas.</li>
                      </ul>
                </div>
              </div>

              
              <div className="each-slide">
                <h1>Soluções Para o Professor Moderno</h1>
                  <p>
                   O professor moderno é aquele que está em constante evolução, saiba quais
                   são os seus benefícios ao acessar o sistema.
                  </p>
                  <div className="conteudo">
                    <h3>
                      <FontAwesomeIcon icon={faDatabase} className="icon" />
                      <br></br>Gerenciamento
                    </h3>
                    <ul>
                      <li>
                      Autonomia de cadastros, criação ilimitada de questões e
                      avaliações;</li>
                      <li>Armazenamento, controle e organização de conteúdo;  </li>
                      <li>Agendamento de avaliações, entrega de resultados e muito
                      mais.
                      </li>
                    </ul>
                </div>
              </div>
            </Slide>
          </div>
        </section>
      </ProfessorModerno>

      <Cadastrar>
        <section>
          <article>
          <h1>Conheça o nosso sistema</h1>
          <p>
            Não perca mais tempo! <br></br>
            Cadastre-se agora mesmo e conheça a nossa plataforma<br></br> 
            para criar, corrigir e organizar provas de forma simples e rápida.
          </p>
          <button>CADASTRA-SE JÁ!</button>
          </article> 
          
        
          <img src={PROFESSOR} alt=""></img>
       
        </section>

      </Cadastrar>

      <FaleConnosco>
        <section>
        <h1>Pretende contactar-nos?</h1>
        <p>Deixa-nos uma mensagem, nós estamos activo.</p>
        <form>
          <input type="text" id="nome" name="nome" placeholder="Nome"></input>
          <input type="email" id="email" name="email" placeholder="Email" ></input>
          <textarea id="mensagem" name="mensagem"placeholder="Escreva aqui a sua mensagem..." ></textarea>
          <input type="submit" id="enviar" name="enviar" value="Enviar" ></input>
        </form>
        </section>
      </FaleConnosco>

      <Footer />
    </>
  );
}

export default Home;
