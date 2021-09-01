import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Dashboard,
  Header,
} from "../../styles/pageProfessor/styleFormEstudante";
import Logo from "../../images/LogoFundoAzul.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faBell,
  faSortDown,
  faUsers,
  faUser,
  faEdit,
  faCog,
  faTrashAlt,
  faPen
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import api from "../../services/api";

function PageCriarPerguntas({ history }) {
  const [generoId, setGeneroId] = useState("0");
  const [genero, setGenero] = useState([]);

  const [provinciaId, setProvinciaId] = useState("0");
  const [provincia, setProvincia] = useState([]);

  const [municipioId, setMunicipioId] = useState("0");
  const [municipio, setMunicipio] = useState([]);

  const [distritoUrbanoId, setDistritoUrbanoId] = useState("0");
  const [distritoUrbano, setDistritoUrbano] = useState([]);

  const [bairroId, setBairroId] = useState("0");
  const [bairro, setBairro] = useState([]);

  const [grauAcademicoId, setGrauAcademicoId] = useState("0");
  const [grau, setGrau] = useState([]);

  const [turmaId, setTurmaId] = useState("0");
  const [turma, setTurma] = useState([]);

  const [cursoId, setCursoId] = useState("0");
  const [curso, setCurso] = useState([]);

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [numeroProcesso, setNumeroProcesso] = useState("");
  const [rua, setRua] = useState("");

  const [estudante, setEstudante] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await api.post("/estudanteCreate", {
      provinciaId,
      municipioId,
      distritoUrbanoId,
      bairroId,
      rua,
    });

    const { id } = result.data;
    localStorage.setItem("enderecos", id);

    const enderecoId = id;

    const resulta = await api.post("/estudanteCreate", {
      generoId,
      cursoId,
      turmaId,
      grauAcademicoId,
      enderecoId,
      nome,
      senha,
    });

    console.log(result.data);
    console.log(resulta.data);
    history.push("/pageProfessor");
    alert(
      "Estudante cadastrado com sucesso, clica em ok para ter acesso aos nossos recursos"
    );
  }

 

  useEffect(() => {
    async function generos() {
      const result = await api.get("/generoAll");
      setGenero(result.data);
    }
    generos();
  }, []);

  useEffect(() => {
    async function provincias() {
      const result = await api.get("/provinciaAll");
      setProvincia(result.data);
    }
    provincias();
  }, []);

  useEffect(() => {
    async function municipios() {
      const result = await api.get("/municipioAll");
      setMunicipio(result.data);
    }
    municipios();
  }, []);

  useEffect(() => {
    async function distritos() {
      const result = await api.get("/distritoUrbanoAll");
      setDistritoUrbano(result.data);
    }
    distritos();
  }, []);

  useEffect(() => {
    async function bairro() {
      const result = await api.get("/bairroAll");
      setBairro(result.data);
    }
    bairro();
  }, []);

  useEffect(() => {
    async function grau() {
      const result = await api.get("/grauAcademicoAll");
      setGrau(result.data);
    }
    grau();
  }, []);

  useEffect(() => {
    async function curso() {
      const result = await api.get("/cursoAll");
      setCurso(result.data);
    }
    curso();
  }, []);

  useEffect(() => {
    async function turma() {
      const result = await api.get("/turmaAll");
      setTurma(result.data);
    }
    turma();
  }, []);

  useEffect(() => {
    async function estudante() {
      const result = await api.get("/estudanteAll");
      setEstudante(result.data);
    }
    estudante();
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
            
            <article id="article3">
              <h1 id="title">Cadastrar Estudante</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="nome"
                  placeholder="Nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                ></input>

                <input
                  type="password"
                  id="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                ></input>

                <select
                  value={generoId}
                  onChange={(event) => setGeneroId(event.target.value)}
                >
                  <option value="0">Gênero</option>
                  {genero.map((lista) => (
                    <option key={lista.id}>{lista.designacao}</option>
                  ))}
                </select>

                <select
                  value={cursoId}
                  onChange={(event) => setCursoId(event.target.value)}
                >
                  <option value="0">Curso</option>
                  {curso.map((lista) => (
                    <option key={lista.id}>{lista.designacao}</option>
                  ))}
                </select>

                <select
                  value={grauAcademicoId}
                  onChange={(event) => setGrauAcademicoId(event.target.value)}
                >
                  <option value="0">Grau Acadêmico</option>
                  {grau.map((lista) => (
                    <option key={lista.id}>{lista.designacao}</option>
                  ))}
                </select>

                <select
                  value={turmaId}
                  onChange={(event) => setTurmaId(event.target.value)}
                >
                  <option value="0">Turma</option>
                  {turma.map((lista) => (
                    <option key={lista.id}>{lista.designacao}</option>
                  ))}
                </select>

                <br></br>

                <select
                  value={provinciaId}
                  onChange={(e) => setProvinciaId(e.target.value)}
                >
                  <option value="0">Provincia</option>
                  {provincia.map((lista) => (
                    <option key={lista.id} value={lista.id}>
                      {lista.nome}
                    </option>
                  ))}
                </select>

                <select
                  value={municipioId}
                  onChange={(e) => setMunicipioId(e.target.value)}
                >
                  <option value="0">Município</option>
                  {municipio.map((lista) => (
                    <option key={lista.id} value={lista.id}>
                      {lista.nome}
                    </option>
                  ))}
                </select>

                <br></br>

                <select
                  value={distritoUrbanoId}
                  onChange={(e) => setDistritoUrbanoId(e.target.value)}
                >
                  <option value="0">Distrito urbano</option>
                  {distritoUrbano.map((lista) => (
                    <option key={lista.id} value={lista.id}>
                      {lista.nome}
                    </option>
                  ))}
                </select>

                <select
                  value={bairroId}
                  onChange={(e) => setBairroId(e.target.value)}
                >
                  <option value="0">Bairro</option>
                  {bairro.map((lista) => (
                    <option key={lista.id} value={lista.id}>
                      {lista.nome}
                    </option>
                  ))}
                </select>
                 
                <br></br>

                <input
                  id="rua"
                  type="text"
                  name="rua"
                  placeholder="Rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                ></input>
                
                <button id="addEst" type="submit">
                  Adicionar
                </button>
              </form>
            </article>
          </article>
        </section>
      </Dashboard>
    </>
  );
}

export default withRouter(PageCriarPerguntas);
