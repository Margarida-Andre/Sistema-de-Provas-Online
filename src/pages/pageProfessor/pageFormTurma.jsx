import React, {useEffect, useState} from 'react';
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
          <h1 id="title">Turma</h1>

            <input id="descricao" placeholder="Designação"></input>

            <select name="directorTurma" className="directorTurma" value="directorTurma">
              <option>Director de Turma</option>
              <option>D1</option>
              <option>D2</option>
            </select>
           <br></br>

            <select name="curso" className="Curso" value="Curso">
              <option>Curso</option>
              <option>CA</option>
              <option>CB</option>
            </select>

            <select name="grauAcademico" className="grauAcademico" value="grauAcademico">
              <option>Grau Acadêmico</option>
              <option>GA1</option>
              <option>GA2</option>
            </select>
            

            <input id="add" value="Adicionar"></input>
           
          </form>

          
      </article>

      

    </section>
    </Dashboard>

    </>
  );
}


 



export default pageCriarPerguntas;