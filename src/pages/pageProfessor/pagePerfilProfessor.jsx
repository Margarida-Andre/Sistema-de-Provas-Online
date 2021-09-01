import React from 'react';
import { Dashboard, Header } from '../../styles/pageProfessor/styleFormEstudante';
import Logo from '../../images/LogoFundoAzul.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faBell, faSortDown, faUsers, faUser, faAddressBook, faEdit, faCog } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from 'react-router-dom';


function pageCriarPerguntas(){
  return(
    <>
    <Header>
    <header>

      <div id="logo">
      <Link to="/pageProfessor" className="link"><img src={Logo} alt=""></img></Link>
      </div>

      <input type="search" id="search" placeholder="pesquisar"/>
      
      <div id="itemsUser">

      <FontAwesomeIcon icon={faComments} className="icons"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faBell} className="icons"></FontAwesomeIcon>
      <div id="imagePerfil"></div>
  
      </div>

      <div id="nomeUser">
      <label>Margarida André <FontAwesomeIcon icon={faSortDown} id="iconNome"></FontAwesomeIcon></label>
      </div>
      
    </header>
    </Header>

    <Dashboard>
    <section>
      <article id="article1">
          
      <ul>
          
          <div></div>
            <label >Margarida André</label>
          <hr></hr>

          <Link to="/pagecriarEstudante" className="link"><li>
          <FontAwesomeIcon icon={faUser} size="2x" className="icons"></FontAwesomeIcon>
          <br></br>
          Estudante   
          </li></Link>
          <hr></hr>

          <Link to="/pagecriarTurma" className="link"><li>
          <FontAwesomeIcon icon={faUsers} size="2x" className="icons"></FontAwesomeIcon><br></br>
          Turma 
          </li></Link>
          <hr></hr>

          <Link to="/pagecriarProva" className="link"><li>
          <FontAwesomeIcon icon={faEdit} size="2x" className="icons"></FontAwesomeIcon><br></br>
            Prova
          </li></Link>
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
          <FontAwesomeIcon icon={ faCog} size="2x" className="icons"></FontAwesomeIcon><br></br>
            Configurações
          </li>  
          <hr></hr>


        </ul>

      </article>

      <article id="article2">

          <form>
          <h1 id="title">Estudante</h1>

            <input id="text" placeholder="Nome"></input>
            <input id="text" placeholder="Nº do processo"></input>
            <br></br>
            <select name="genero" value="genero">
            <option>Gênero</option>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>

            <select name="curso" className="Curso" value="Curso">
              <option>Curso</option>
              <option>CA</option>
              <option>CB</option>
            </select>
            <br></br>

            
            <select name="grau" value="Turma">
              <option>Grau Acadêmico</option>
              <option>A</option>
              <option>B</option>
            </select>

            <select name="turma" value="Turma">
            <option>Turma</option>
              <option>A</option>
              <option>B</option>
            </select>
            <br></br>

            <select name="Provincia" value="Provincia">
            <option>ProvÍncia</option>
              <option>A</option>
              <option>B</option>
            </select>

            <select name="municipio" value="Municipio">
            <option>Município</option>
              <option>A</option>
              <option>B</option>
            </select>
            <br></br>

            <select name="distrito" value="Distrito">
            <option>Distrito Urbano</option>
              <option>A</option>
              <option>B</option>
            </select>

            <select name="bairro" value="Bairro">
            <option>Bairro</option>
              <option>A</option>
              <option>B</option>
            </select>

            <br></br>

            <input id="add" value="Adicionar"></input> 
           
          </form>

          
      </article>

      

    </section>
    </Dashboard>

    </>
  );
}


 



export default pageCriarPerguntas;