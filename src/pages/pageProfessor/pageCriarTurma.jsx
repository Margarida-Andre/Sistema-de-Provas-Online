import React, {useEffect, useState} from 'react';
import { Dashboard, Header } from '../../styles/pageProfessor/styleCriarProva';
import Logo from '../../images/LogoFundoAzul.jpg';
import Imag from '../../images/ilustracaoNewProve.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faBell, faSortDown, faUsers, faTrashAlt, faPen, faUser, faEdit, faCog } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from 'react-router-dom';
import api from "../../services/api";
import Relatorio from "../Relatorio/App";

function PageCriarProva(){

  const [turma, setTurma] = useState([]);
  useEffect(() => {
    async function Turma() {
      const result = await api.get("/turmaAll");
      setTurma(result.data);
    }
    Turma();
  }, []);
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
          <div id="divCriarProva">
          <h2>Visão geral</h2>
          <Relatorio />
          <table>
              <tr className="tr1">
                <td className="titulodadosEstudantes">Turma</td>
    
                <td td className="titulodadosEstudantes">Apagar</td>
                <td td className="titulodadosEstudantes">Editar</td>
              </tr>
             
              {turma.map((lista) => (
                    <tr>
                    <td key={lista.id} className="dadosEstudantes">{lista.designacao}</td>
                    
                    <td>
                   <button id="delete"> <FontAwesomeIcon
              icon={faTrashAlt}
              className="iconsBtn"
            ></FontAwesomeIcon></button>
                      
                      </td>
                      <td> <button id="update"><FontAwesomeIcon
              icon={faPen}
              className="iconsBtn"
            ></FontAwesomeIcon></button></td>
                    
              
                    </tr>
                  ))}
              
            </table>
          <Link to="/pageTurmaForm" className="link"><input type="submit" value="Criar nova turma"></input></Link>
          
              <img src={Imag} alt="" id="ilustracaoProve"/>
          </div>

      </article>

      

    </section>
    </Dashboard>

    </>
  );
}


 



export default PageCriarProva;