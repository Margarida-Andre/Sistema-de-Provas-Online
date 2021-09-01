import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import api from "../../services/api";
import { Header, Cadastrar, Login } from "../../styles/components/header/style";
import Image from "../../images/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { ErrorMessage, Formik, Form, Field } from "formik";
//import { validations } from "../../validacoes/cadastro";



function Hheader({ history }) {
  const [show, setShow] = useState();
  const [close, setClose] = useState();

  const [showFP, setShowFP] = useState();
  const [closeFP, setCloseFP] = useState();

  const [showLogin, setShowLogin] = useState();
  const [closeLogin, setCloseLogin] = useState();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailL, setEmailL] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaL, setSenhaL] = useState("");

  const [provinciaId, setProvinciaId] = useState("0");
  const [provincia, setProvincia] = useState([]);

  const [municipioId, setMunicipioId] = useState("0");
  const [municipio, setMunicipio] = useState([]);

  const [distritoUrbanoId, setDistritoUrbanoId] = useState("0");
  const [distritoUrbano, setDistritoUrbano] = useState([]);

  const [bairroId, setBairroId] = useState("0");
  const [bairro, setBairro] = useState([]);

  const [rua, setRua] = useState("");

  const [generoId, setGeneroId] = useState("0");
  const [genero, setGenero] = useState([]);

  //const inst = localStorage.getItem('instituicoes');

  //const institui = JSON.parse(inst);

  // const user = nomeInstituicao;
  // const password = senha;

  // if (nomeInstituicao===user && senha===password) {
  //    history.push("/home");
  //  }

  function ShowArt() {
    setShow((document.querySelector(".art").style.visibility = "visible"));
  }

  function CloseArt() {
    setShow((document.querySelector(".art").style.visibility = "hidden"));
  }

  function ShowForm() {    
    setShow(
      (document.querySelector(".sectLoginP").style.visibility = "visible"),
      
    );
  }

  function ShowFP() {    
    setShow(
      (document.querySelector(".sectLoginP").style.visibility = "hidden"),
      (document.querySelector(".sec").style.visibility = "visible"),
      (document.body.style.overflow = "hidden")
    );
  }
  function CloseFP() {
    setClose(
      (document.querySelector(".sec").style.visibility = "hidden"),
      (document.body.style.overflow = "unset")
    );
  }

  function ShowLoginP() {
    setShowLogin(
      (document.querySelector(".sec").style.visibility = "hidden"),
      (document.querySelector(".sectLoginP").style.visibility = "visible"),
      (document.body.style.overflow = "hidden")
    );
  }

  function CloseLoginP() {
    setCloseLogin(
      (document.querySelector(".sectLoginI").style.visibility = "hidden"),
      (document.body.style.overflow = "unset")
    );
  }

 

 
  async function handleSubmitProfessor(e) {
    e.preventDefault();

    const result = await api.post("/enderecoCreate", {
      provinciaId,
      municipioId,
      distritoUrbanoId,
    });

    const { id } = result.data;
    localStorage.setItem("enderecos", id);

    const enderecoId = id;

    const professor = await api.post("/professorCreate", {
      enderecoId,
      generoId,
      nome,
      email,
      senha,
    });

    console.log(professor.data);
    history.push("/pageProfessor");
    alert(
      "professor cadastrado com sucesso, clica em ok para ter acesso aos nossos recursos"
    );
  }
  async function handleSubmitLogin(e) {
    e.preventDefault();

    const result = await api.post("/professorLogin", { email, senha });

    const { id } = result.data;
    if (id) {
     console.log(result.data);
     localStorage.setItem("login", id);
     history.push("/pageProfessor");
  }
}

  useEffect(() => {
    async function provincia() {
      const result = await api.get("/provinciaAll");
      setProvincia(result.data);
    }
    provincia();
  }, []);

  useEffect(() => {
    async function municipio() {
      const result = await api.get("/municipioAll");
      setMunicipio(result.data);
    }
    municipio();
  }, []);

  useEffect(() => {
    async function distrito() {
      const result = await api.get("/distritoUrbanoAll");
      setDistritoUrbano(result.data);
    }
    distrito();
  }, []);

  useEffect(() => {
    async function bairro() {
      const result = await api.get("/bairroAll");
      setBairro(result.data);
    }
    bairro();
  }, []);

  useEffect(() => {
    async function genero() {
      const result = await api.get("/generoAll");
      setGenero(result.data);
    }
    genero();
  }, []);

  return (
    <>
      <Header>
        <div>
          <img src={Image} alt="" />
        </div>

        <ul>
          <a href="#inicio">
            <li className="lista">Início </li>
          </a>
          <a href="#sobresistema">
            <li className="lista">Sobre o Sistema </li>
          </a>
          <a href="#recursos">
            <li className="lista"> Recursos </li>
          </a>
          <a href="#usuarios">
            <li className="lista"> Nossos Usuários </li>
          </a>
          <li className="lista">Ajuda</li>

          <li className="cadastrar" onMouseOver={ShowArt} onMouseOut={CloseArt}>
            Cadastra-se <FontAwesomeIcon icon={faAngleDown} size="xs" />
            <article className="art">
              <p className="art" onClick={ShowForm}>
                Professor
              </p>
            </article>
          </li>
        </ul>
      </Header>

      <Cadastrar>
        <section>
          <div className="sec">
            <article className="article">
              <p onClick={CloseFP}>+</p>

              <button className="btnLogin" type="submit" onClick={ShowLoginP}>
                Login
              </button>

              <button className="btnCadastrar" type="submit" onClick={ShowFP}>
                Cadastra-se
              </button>

              <Formik
                inicialValues={{}}
               
                className="Formik"
              >
                <Form className="Form" onSubmit={handleSubmitProfessor}>
                  <article id="articleFields">
                    <div className="divFields">
                      <Field
                        name="nome"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                      <br></br>
                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="nome"
                      />

                      <br></br>
                      <Field
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <br></br>
                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="email"
                      />

                      <br></br>
                      <Field
                        name="senha"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                      />
                      <br></br>
                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="senha"
                      />

                      <br></br>
                      <Field
                        as="select"
                        name="generos"
                        id="generos"
                        value={generoId}
                        onChange={(e) => setGeneroId(e.target.value)}
                      >
                        <option value="0">Selecciona o seu gênero</option>
                        {genero.map((lista) => (
                          <option key={lista.id} value={lista.id}>
                            {lista.designacao}
                          </option>
                        ))}
                      </Field>
                      <br></br>

                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="generos"
                      />
                      <br></br>
                    </div>

                    <div className="divFields">
                      <Field
                        as="select"
                        name="provincias"
                        value={provinciaId}
                        onChange={(e) => setProvinciaId(e.target.value)}
                      >
                        <option value="0">Selecciona uma provincia</option>
                        {provincia.map((lista) => (
                          <option key={lista.id} value={lista.id}>
                            {lista.nome}
                          </option>
                        ))}
                      </Field>

                      <br></br>
                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="provincias"
                      />

                      <br></br>
                      <Field
                        as="select"
                        name="municipios"
                        value={municipioId}
                        onChange={(e) => setMunicipioId(e.target.value)}
                      >
                        <option value="0">Selecciona um município</option>
                        {municipio.map((lista) => (
                          <option key={lista.id} value={lista.id}>
                            {lista.nome}
                          </option>
                        ))}
                      </Field>
                      <br></br>

                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="municipios"
                      />
                      <br></br>

                      <Field
                        as="select"
                        name="distritos"
                        value={distritoUrbanoId}
                        onChange={(e) => setDistritoUrbanoId(e.target.value)}
                      >
                        <option value="0">Selecciona um distrito urbano</option>
                        {distritoUrbano.map((lista) => (
                          <option key={lista.id} value={lista.id}>
                            {lista.nome}
                          </option>
                        ))}
                      </Field>
                      <br></br>
                      <ErrorMessage
                        className="Form-Error"
                        component="span"
                        name="distritos"
                      />
                      <br></br>
                    </div>
                  </article>
                  <button className="add" type="submit">
                    Salvar
                  </button>

                  <button className="add" id="cancelar" onClick={CloseFP}>
                    Cancelar
                  </button>
                </Form>
              </Formik>
            </article>
          </div>
        </section>
      </Cadastrar>

      <Login>
        <section>
          <div className="sectLoginP">
            <article id="article3">
              <p onClick={CloseLoginP}>+</p>

              <button className="btnLogin" type="submit" onClick={ShowLoginP}>
                Login
              </button>

              <button className="btnCadastrar" type="submit" onClick={ShowFP}>
                Cadastra-se
              </button>

              <Formik inicialValues={{}} >
                <Form onSubmit={handleSubmitLogin}>
                  <Field
                    className="inputLogin"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br></br>
                  <ErrorMessage
                    className="Form-Error"
                    component="span"
                    name="email"
                  />

                  <br></br>

                  <Field
                    className="inputLogin"
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <br></br>
                  <ErrorMessage
                    className="Form-Error"
                    component="span"
                    name="senha"
                  />
                  <br></br>

                  <button id="add" className="btnEntrar" type="submit">
                    Entrar
                  </button>
                  <br></br>
                  <label>Esqueceu sua senha?</label>
                </Form>
              </Formik>
            </article>
          </div>
        </section>
      </Login>
    </>
  );
}

export default withRouter(Hheader);
