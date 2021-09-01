import React, { useEffect, useState } from "react";
import {
  Dashboard,
  Header,
  Lista,
} from "../../styles/pageProfessor/styleProfessor";
import Logo from "../../images/Logo_FundoAzul.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faBell,
  faSortDown,
  faBook,
  faUser,
  faUsers,
  faAddressBook,
  faEdit,
  faCog,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Graficos from "../../components/graficos/graficos";
import { Link } from "react-router-dom";
import api from "../../services/api";

function PageProfessor() {
  const [estudantes, setEstudantes] = useState([]);
  const [disciplina, setDisciplina] = useState([]);
  const [turma, setTurma] = useState([]);
  const [prova, setProva] = useState([]);

  useEffect(() => {
    async function estudantes() {
      const result = await api.get("/estudanteAll");
      setEstudantes(result.data);
    }
    estudantes();
  }, []);

  useEffect(() => {
    async function turma() {
      const result = await api.get("/turmaAll");
      setTurma(result.data);
    }
    turma();
  }, []);

  useEffect(() => {
    async function disciplina() {
      const result = await api.get("/disciplinaAll");
      setDisciplina(result.data);
    }
    disciplina();
  }, []);

  useEffect(() => {
    async function prova() {
      const result = await api.get("/provaAll");
      setProva(result.data);
    }
    prova();
  }, []);
  return (
    <>
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
            <FontAwesomeIcon icon={faBell} className="icons"></FontAwesomeIcon>
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

      <Dashboard>
        <section>
          <article id="article1">
            <ul>
              <div></div>
              <label>Margarida André</label>
              <hr></hr>

              <Link to="/pagecriarEstudante" className="link">
                <li>
                  <FontAwesomeIcon
                    icon={faUser}
                    size="2x"
                    className="icons"
                  ></FontAwesomeIcon>
                  <br></br>
                  Estudante
                </li>
              </Link>
              <hr></hr>

              <Link to="/pagecriarTurma" className="link">
                <li>
                  <FontAwesomeIcon
                    icon={faUsers}
                    size="2x"
                    className="icons"
                  ></FontAwesomeIcon>
                  <br></br>
                  Turma
                </li>
              </Link>
              <hr></hr>

              <Link to="/pagecriarProva" className="link">
                <li>
                  <FontAwesomeIcon
                    icon={faEdit}
                    size="2x"
                    className="icons"
                  ></FontAwesomeIcon>
                  <br></br>
                  Prova
                </li>
              </Link>
              <hr></hr>
             
              <Link to="/pagePerfil" className="link">
              <li>
                <FontAwesomeIcon
                  icon={faUser}
                  size="2x"
                  className="icons"
                ></FontAwesomeIcon>
                <br></br>
                Perfil
              </li>
             </Link>

              <hr></hr>
              <Link to="/home" className="link">
              <li>
                
                <FontAwesomeIcon
                  icon={faCog}
                  size="2x"
                  className="icons"
                ></FontAwesomeIcon>
                <br></br>
                Sair
                
              </li>
              </Link>
              <hr></hr>
            </ul>
          </article>

          <article id="article2">
            <ul>
              <li>
                <div className="fontAwesome" id="fontAwesome1">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="icons"
                  ></FontAwesomeIcon>
                </div>
                <div className="total">
                  <div className="paragrafos">
                    <p>Estudantes</p>
                    <p className="paragrafTotal">{estudantes.length}</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="fontAwesome" id="fontAwesome2">
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    size="lg"
                    className="icons"
                  ></FontAwesomeIcon>
                </div>
                <div className="total">
                  <div className="paragrafos">
                    <p>Disciplinas</p>
                    <p className="paragrafTotal">{disciplina.length}</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="fontAwesome" id="fontAwesome3">
                  <FontAwesomeIcon
                    icon={faUsers}
                    size="lg"
                    className="icons"
                  ></FontAwesomeIcon>
                </div>
                <div className="total">
                  <div className="paragrafos">
                    <p>Turmas</p>
                    <p className="paragrafTotal">{turma.length}</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="fontAwesome" id="fontAwesome4">
                  <FontAwesomeIcon
                    icon={faEdit}
                    size="lg"
                    className="icons"
                  ></FontAwesomeIcon>
                </div>
                <div className="total">
                  <div className="paragrafos">
                    <p>Provas</p>
                    <p className="paragrafTotal">{prova.length}</p>
                  </div>
                </div>
              </li>
            </ul>

            <div id="SobreClass">
              <div id="calendarioProvas">
                <div id="ul">
                  <li>
                    <div id="conteudoLeft">
                      <h1>Calendário</h1>
                      <p>{prova.length} provas hoje</p>
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

              <div id="provaProgress">
                <div id="ul">
                  <li>
                    <div id="conteudoLeft">
                      <h1>Provas</h1>
                      <p>Progresso</p>
                    </div>

                    <div id="conteudoRight">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="lg"
                        className="icons"
                      ></FontAwesomeIcon>
                    </div>
                  </li>

                  <li>
                    <div id="conteudoLeft2">
                      <label>60,50%</label>
                    </div>

                    <div id="conteudoRight2">
                      <div id="disciplina">
                        <p id="paragrafDisciplina">Inteligência Artificial</p>
                        <p id="paragrafHorarioProva">
                          {" "}
                          <label>20/50 Good</label>
                        </p>
                      </div>
                    </div>
                  </li>

                  <hr></hr>

                  <li>
                    <div id="conteudoLeft2">
                      <label>10%</label>
                    </div>

                    <div id="conteudoRight2">
                      <div id="disciplina">
                        <p id="paragrafDisciplina">Sistema Operacional</p>
                        <p id="paragrafHorarioProva">
                          {" "}
                          <label>50/50 Muito bom</label>
                        </p>
                      </div>
                    </div>
                  </li>
                  <hr></hr>

                  <li>
                    <div id="conteudoLeft2">
                      <label>20,75%</label>
                    </div>

                    <div id="conteudoRight2">
                      <div id="disciplina">
                        <p id="paragrafDisciplina">Cálculo II</p>
                        <p id="paragrafHorarioProva">
                          {" "}
                          <label>15/50 Mais ou menos</label>
                        </p>
                      </div>
                    </div>
                  </li>
                  <hr></hr>

                  <li>
                    <div id="conteudoLeft2">
                      <label>50%</label>
                    </div>

                    <div id="conteudoRight2">
                      <div id="disciplina">
                        <p id="paragrafDisciplina">Engenharia de Software</p>
                        <p id="paragrafHorarioProva">
                          {" "}
                          <label>30/50 Suficiente</label>
                        </p>
                      </div>
                    </div>
                  </li>
                  <input id="ver" type="submit" value="Ver tudo" />
                </div>
              </div>

              <div id="turmas">
                <div>
                  <h1>Turmas</h1>
                  <p>1º Ano</p>

                  <ul>
                    <li id="turmaA">
                      <div className="divIcons" id="divIcons1">
                        <FontAwesomeIcon
                          icon={faUsers}
                          size="x5"
                          className="icons"
                        ></FontAwesomeIcon>
                      </div>
                      <p>
                        Turma A <br></br> Tarde
                      </p>
                    </li>

                    <li id="turmaB">
                      <div className="divIcons" id="divIcons2">
                        <FontAwesomeIcon
                          icon={faUsers}
                          size="x5"
                          className="icons"
                          id="iconTurmaB"
                        ></FontAwesomeIcon>
                      </div>
                      <p>
                        Turma B <br></br> Tarde
                      </p>
                    </li>

                    <li id="turmaC">
                      <div className="divIcons" id="divIcons3">
                        <FontAwesomeIcon
                          icon={faUsers}
                          size="x5"
                          className="icons"
                          id="iconTurmaC"
                        ></FontAwesomeIcon>
                      </div>
                      <p>
                        Turma C <br></br> Tarde
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <p>2º Ano</p>

                  <ul>
                    <li id="turmaA">
                      <div className="divIcons" id="divIcons1">
                        <FontAwesomeIcon
                          icon={faUsers}
                          size="x5"
                          className="icons"
                        ></FontAwesomeIcon>
                      </div>
                      <p>
                        Turma A <br></br> Tarde
                      </p>
                    </li>

                    <li id="turmaB">
                      <div className="divIcons" id="divIcons2">
                        <FontAwesomeIcon
                          icon={faUsers}
                          size="x5"
                          className="icons"
                          id="iconTurmaB"
                        ></FontAwesomeIcon>
                      </div>
                      <p>
                        Turma B <br></br> Tarde
                      </p>
                    </li>

                    <li id="turmaC">
                      <div className="divIcons" id="divIcons3">
                        <FontAwesomeIcon
                          icon={faUsers}
                          size="x5"
                          className="icons"
                          id="iconTurmaC"
                        ></FontAwesomeIcon>
                      </div>
                      <p>
                        Turma C <br></br> Tarde
                      </p>
                    </li>
                  </ul>
                </div>

                <input id="ver" type="submit" value="Ver tudo" />
              </div>
            </div>

            <div id="sessao3">
              <div id="grafico">
                <div>
                  <h1>Visão Geral</h1>
                  <p>Provas semestrais</p>
                  <div id="graficoImplements">
                    <Graficos></Graficos>
                  </div>
                </div>
              </div>

              <div id="alunosDestacados">
                <div>
                  <h1>Medalhas</h1>
                  <p>Estudantes mais destacados</p>
                </div>

                <ul>
                  <li id="estudante1">
                    <div id="photo"></div>
                    <p>Nome</p>
                    <p id="nota">Nota</p>
                    <input id="first" type="submit" value="Primeiro(a)" />
                  </li>

                  <li id="estudante2">
                    <div id="photo"></div>
                    <p>Nome</p>
                    <p id="nota">Nota</p>
                    <input id="second" type="submit" value="Segundo(a)" />
                  </li>

                  <li id="estudante3">
                    <div id="photo"></div>
                    <p>Nome</p>
                    <p id="nota">Nota</p>
                    <input id="third" type="submit" value="Terceiro(a)" />
                  </li>

                  <input id="seeAll" type="submit" value="Ver tudo" />
                </ul>
              </div>
            </div>
          </article>
        </section>
      </Dashboard>

      <Lista>
        <section>
          <div className="sect">
            <article id="article2">
              <p>+</p>
              <h1>Seus Estudantes!</h1>
              <form>
                <table>
                  <tr>
                    <td>Nome</td>
                    <td>Número de Processo</td>
                  </tr>

                  <tr>
                    {estudantes.map((lista) => (
                      <td key={lista.id}>{lista.nome}</td>
                    ))}

                    {estudantes.map((lista) => (
                      <td key={lista.id}>{lista.numeroProcesso}</td>
                    ))}
                  </tr>
                </table>

                <button id="add" type="submit">
                  Cadastrar
                </button>

                <button id="add">Cancelar</button>
              </form>
            </article>
          </div>
        </section>
      </Lista>
    </>
  );
}

export default PageProfessor;
