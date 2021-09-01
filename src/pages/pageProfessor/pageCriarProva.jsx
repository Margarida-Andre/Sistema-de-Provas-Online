import React, { useEffect, useState } from "react";
import {
  Dashboard,
  Header,
  TitleProva,
  TipoProva,
} from "../../styles/pageProfessor/styleCriarProva";
import Logo from "../../images/LogoFundoAzul.jpg";
import Imag from "../../images/ilustracaoNewProve.jpg";
import Choice from "../../images/choice.png";
import Dissertacao from "../../images/dissertacao.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faBell,
  faSortDown,
  faUsers,
  faTrashAlt,
  faPen,
  faUser,
  faEdit,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Relatorio from "../Relatorio/App";
import api from "../../services/api";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { validations } from "../../validacoes/cadastro";

function PageCriarProva({ history }) {

  const [showForm, setShowForm] = useState([]);
  const [closeForm, setCloseForm] = useState([]);
  const [prova, setProva] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [dataProva, setDataProva] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFinal, setHoraFinal] = useState("");

  const deleteProva = async (id) => {
    await api.delete(`/provaDelete/${id}`);
    const newProva = prova.filter((prove) => {
      return prove.id !== id;
    });

    setProva(newProva);
  };

  async function handleSubmitProva(e) {
    e.preventDefault();
    const  id = localStorage.getItem("login");
   
    const prova = await api.post("/provaCreate", {

      titulo,
      dataProva,
      horaInicio,
      horaFinal,
    }, { headers: { id }});

     
      localStorage.setItem("prova", prova.data.id);
      console.log(prova.data);
    

  }

  function CloseFormTitleProve() {
    setCloseForm(
      (document.querySelector(".section").style.visibility = "hidden"),
      (document.body.style.overflow = "unset")
    );
  }

  function ShowTypeProve() {
    setShowForm(
      (document.querySelector(".section").style.visibility = "hidden"),
      (document.querySelector(".tipoProva").style.visibility = "visible"),
      (document.body.style.overflow = "hidden")
    );
  }

  useEffect(() => {
    async function Prova() {
      const result = await api.get("/provaAll");
      setProva(result.data);
    }
    Prova();
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

              <li>
                <FontAwesomeIcon
                  icon={faCog}
                  size="2x"
                  className="icons"
                ></FontAwesomeIcon>
                <br></br>
                Configurações
              </li>
              <hr></hr>
            </ul>
          </article>

          <article id="article2">
            <div id="divCriarProva">
              <h2>Visão geral</h2>
              <Relatorio />
              <table>
                <tr className="tr1">
                  <td className="titulodadosEstudantes">Título da Prova</td>
                  <td td className="titulodadosEstudantes">
                    Data da Prova
                  </td>
                  <td td className="titulodadosEstudantes">
                    Quantidade de Questões
                  </td>
                  <td td className="titulodadosEstudantes">
                    Hora do início
                  </td>
                  <td td className="titulodadosEstudantes">
                    Hora do fim
                  </td>
                  <td td className="titulodadosEstudantes">
                    Apagar
                  </td>
                  <td td className="titulodadosEstudantes">
                    Editar
                  </td>
                </tr>

                {prova.map((lista) => (
                  <tr key={lista.id}>
                    <td className="dadosEstudantes">{lista.descricao}</td>
                    <td className="dadosEstudantes">{lista.dataProva}</td>
                    <td className="dadosEstudantes">{lista.quantQuestoes}</td>
                    <td className="dadosEstudantes">{lista.inicioProva}</td>
                    <td className="dadosEstudantes">{lista.finalProva}</td>
                    <td>
                      <button
                        id="delete"
                        key={lista.id}
                        onClick={() => deleteProva(prova.id)}
                      >
                        {" "}
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="iconsBtn"
                        ></FontAwesomeIcon>
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button id="update">
                        <FontAwesomeIcon
                          icon={faPen}
                          className="iconsBtn"
                        ></FontAwesomeIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              <Link to="/pagePerguntasForm" className="link">
                <input type="submit" value="Criar nova prova"></input>
              </Link>

              <img src={Imag} alt="" id="ilustracaoProve" />
            </div>
          </article>
        </section>
      </Dashboard>

      <TitleProva className="section">
        <section>
          <div>
            <article>
              <Formik
                inicialValues={{}}
                validationSchema={validations}
              >
                <Form className="Form" onSubmit={handleSubmitProva}>
                  <h1>Criar uma nova prova</h1>
                  <br></br>
                  <label>Título da prova</label>
                  <br></br>

                  <div className="divFields">
                    <div>
                      <Field
                        name="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                      />
                      <br></br>
                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="titulo"
                      />

                      <Field
                        name="data"
                        type="date"
                        id="respostas"
                        placeholder="Data da Prova"
                        value={dataProva}
                        onChange={(e) => setDataProva(e.target.value)}
                      />
                      <br></br>
                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="data"
                      />
                    </div>

                    <div>
                      <Field
                        name="horaI"
                        type="text"
                        id="respostas"
                        placeholder="Hora do Início"
                        value={horaInicio}
                        onChange={(e) => setHoraInicio(e.target.value)}
                      />
                      <br></br>
                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="horaI"
                      />

                      <Field
                        name="horaF"
                        type="text"
                        id="respostas"
                        placeholder="Hora do Fim"
                        value={horaFinal}
                        onChange={(e) => setHoraFinal(e.target.value)}
                      />
                      <br></br>
                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="horaF"
                      />
                    </div>
                  </div>
                  <button id="cancel" value={closeForm} onClick={CloseFormTitleProve}>
                Cancelar
              </button>
              <button id="start"  value={showForm} type="submit" onClick={ShowTypeProve}>Começar</button>
                </Form>
              </Formik>
             
            </article>
          </div>
        </section>
      </TitleProva>

      <TipoProva className="tipoProva">
        <section>
          <article>
            <h1>Escolha um tipo de prova</h1>

            <article id="article2">
             <Link to="/pagePerguntasForm" className="link"> 
             <div>
                <img src={Choice} alt=""></img>
                <br></br>
                Sistema Americano
              </div>
              </Link>

              <div>
                <img src={Dissertacao} alt=""></img>
                <br></br>
                Dissertação
              </div>
            </article>
          </article>
        </section>
      </TipoProva>
    </>
  );
}

export default PageCriarProva;
