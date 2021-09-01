import React, {useEffect, useState} from "react";
import { Style, Header } from "./style.js";
import Logo from "../../images/Logo_FundoAzul.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../../services/api";

import {
  faFileAlt,
  faHome,
  faUser,
  faSignOutAlt,
  faComments,
  faBell,
  faSortDown,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function FormProva() {
    const [prova, setProva ] = useState([]);
    useEffect(() => {
        async function prova() {
          const result = await api.get("/provaAll");
          setProva(result.data);
        }
        prova();
      }, []);
  return (
    <>
      <Style>
        <section>
          <Header>
            <header>
              <div id="logo">
                <Link to="/pageProfessor" className="link">
                  <img src={Logo} alt=""></img>
                </Link>
              </div>

              <input type="search" id="search" placeholder="pesquisar" />

              <div id="itemsUser">
                <FontAwesomeIcon
                  icon={faComments}
                  className="icons"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faBell}
                  className="icons"
                ></FontAwesomeIcon>
                <div id="imagePerfil"></div>
              </div>

              <div id="nomeUser">
                <label>
                  Margarida André{" "}
                  <FontAwesomeIcon
                    icon={faSortDown}
                    id="iconNome"
                  ></FontAwesomeIcon>
                </label>
              </div>
            </header>
          </Header>

          <div id="dashboard">
            <div id="circulo"></div>

            <article id="article1">
              <ul id="listaNavegacao">
                <h4>Painel do Utilizador</h4>
                <Link to="/AmbienteDoEstudante" className="link">
                  {" "}
                  <li className="listaNavegacao">
                    <FontAwesomeIcon icon={faHome} /> Painel Inicial
                  </li>
                </Link>
                <Link to="/PerfilEstudante" className="link">
                  {" "}
                  <li className="listaNavegacao">
                    <FontAwesomeIcon icon={faUser} /> Perfil
                  </li>
                </Link>

                <li className="listaNavegacao">
                  <FontAwesomeIcon icon={faFileAlt} /> Provas
                </li>
                <Link to="./PaginaInicial" className="link">
                  {" "}
                  <li className="listaNavegacao">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Sair
                  </li>
                </Link>
              </ul>

              <br></br>
            </article>
          </div>

          <div id="disciplinas">
            <h4 id="h4Disciplinas">As Minhas Disciplinas</h4>
            <br></br>
            <hr></hr>
            <ul id="listaDisciplinas">
              <li className="listaDisciplinas">
                <h3>Disciplina 1</h3>
                <p className="paragTestes">
                  <FontAwesomeIcon className="Icon" icon={faFileAlt} />
                  <Link to="./pageEstudanteProva" className="link">
                    {" "}
                    Atenção aos testes, clique aqui para mais informações
                  </Link>
                </p>
              </li>

              <li className="listaDisciplinas">
                <h3>Disciplina 2</h3>
                <p className="paragTestes">
                  <FontAwesomeIcon className="Icon" icon={faFileAlt} />
                  <Link to="./PainelDaProva" className="link">
                    {" "}
                    Atenção aos testes, clique aqui para mais informações{" "}
                  </Link>
                </p>
              </li>

              <li className="listaDisciplinas">
                <h3>Disciplina 3</h3>
                <p className="paragTestes">
                  <FontAwesomeIcon className="Icon" icon={faFileAlt} />
                  <Link to="./PainelDaProva" className="link">
                    {" "}
                    Atenção aos testes, clique aqui para mais informações{" "}
                  </Link>
                </p>
              </li>

              <li className="listaDisciplinas">
                <h3>Disciplina 4</h3>
                <p className="paragTestes">
                  <FontAwesomeIcon className="Icon" icon={faFileAlt} />
                  <Link to="./PainelDaProva" className="link">
                    {" "}
                    Atenção aos testes, clique aqui para mais informações{" "}
                  </Link>
                </p>
              </li>

              <li className="listaDisciplinas">
                <h3>Disciplina 5</h3>
                <p className="paragTestes">
                  <FontAwesomeIcon className="Icon" icon={faFileAlt} />{" "}
                  <Link to="./PainelDaProva" className="link">
                    {" "}
                    Atenção aos testes, clique aqui para mais informações{" "}
                  </Link>
                </p>
              </li>
            </ul>
          </div>

          <div id="dashboard2">
            <div id="pautas">
              <h4 id="h4Pautas">Pautas</h4>
              <p id="paragPautas">Não há ficheiros disponíveis</p>
            </div>

            <br></br>

            <div id="pautas">
              <h4 id="h4Pautas">Medalhas</h4>
              <p id="paragPautas">Não há medalhas para mostrar</p>
            </div>

            <br></br>

            <div id="calendario">
              <div id="SobreClass">
                <div id="calendarioProvas">
                  <div id="ul">
                    <li>
                      <div id="conteudoLeft">
                        <h4 id="titlecalender">Medalhas</h4>
                        <p>4 provas hoje</p>
                      </div>

                      <div id="conteudoRight">
                        <select name="cars" id="cars">
                          <option value="volvo">Hoje</option>
                          <option value="saab">Quinta-Feira</option>
                          <option value="mercedes">Sexta-Feira</option>
                          <option value="audi">Abril</option>
                        </select>
                      </div>
                    </li>

                    {prova.map((lista) => (
                  <li>
                    <div id="conteudoLeft2">
                      <label key={lista.id}>{lista.horaInicio}</label>
                      <br></br>
                      <label key={lista.id}>{lista.horaFinal}</label>
                      <div id="hr"></div>
                    </div>

                    <div id="conteudoRight2">
                      <div id="disciplina">
                        <p id="paragrafDisciplina">{lista.titulo}</p>
                        <p id="paragrafHorarioProva">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="icon"
                          ></FontAwesomeIcon>{" "}
                          <label>{lista.horaInicio}</label>-<label>{lista.horaFinal}</label>,{" "}
                          <label>B</label>
                        </p>
                      </div>
                    </div>
                  </li>
                  ))}
                   
                

                    <input id="ver" type="submit" value="Ver tudo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Style>
    </>
  );
}
export default FormProva;
