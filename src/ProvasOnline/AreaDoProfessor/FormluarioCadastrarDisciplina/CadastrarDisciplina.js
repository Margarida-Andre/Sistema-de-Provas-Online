import React from "react";
import {Style} from "./style.js";
import Image from "./PO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChalkboardTeacher, faProjectDiagram , faSignOutAlt , faUsers, faAddressBook } from "@fortawesome/free-solid-svg-icons"; 
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function FormProva(){


    let history = useHistory();
  
    function hundleChange(value){
      history.push(`/${value}`);
  
    }

    return(
        <>
       <Style>
           <section>

           <div id="divheader">
            
           <img src={Image} alt=""/>

           <div id="usuario"></div>
           <p id="p1">Olá, Professor</p>
           

            </div>

               <div id="dashboard">

                  <div id="circulo"></div>

                  <hr /> 

                  <p id="p2">Professor</p>
                  <hr />

                  <ul>

                  <li className="listaDashboard">

                  <FontAwesomeIcon icon={faHome}/> Início</li>

                     <li className="listaDashboard">
                     <FontAwesomeIcon icon={faUsers}/> Professores 
                      </li>

                      <li className="listaDashboard">
                      <FontAwesomeIcon icon={faAddressBook}/> Disciplinas

                    <select name="Turmas" id="T" onChange={event => hundleChange(event.target.value)}>
                    <option value=""></option>
                    <option value="FormularioCadastrarDisciplina">Criar</option>
                    <option value="ListarTurma">Listar</option>
                    </select>
                      </li>

                      <li className="listaDashboard">
                     
                    <FontAwesomeIcon icon={faUsers}/> Turmas
                     
                    <select name="Turmas" id="T" onChange={event => hundleChange(event.target.value)}>
                    <option value=""></option>
                    <option value="FormularioCadastrarTurma">Criar</option>
                    <option value="FormularioCadastrarTurma">Listar</option>
                    </select>
                      </li>

                      <li className="listaDashboard">
                      <FontAwesomeIcon icon={faChalkboardTeacher}/> Provas

                        <select name="P" id="P">
                        <option value=""></option>
                        <option value="C">Criar</option>
                        <option value="L">Listar</option>
                        <option value="L">Estatíticas</option>
                        </select>

                      </li>
                      

                      <li className="listaDashboard">
                      <FontAwesomeIcon icon={faProjectDiagram}/> Configurações</li>
                      <li className="listaDashboard">
                      P Perfil de Acesso</li>

                      <li className="listaDashboard">
                      <FontAwesomeIcon icon={faSignOutAlt}/> Sair</li>
    

                  </ul>
                  
    

               </div>


               <div id="div1">

            
            <article>
            <form>
            <h3>Cadastro de Disciplina</h3>
            <br></br>
                <label>Nome da Disciplina</label>
                <br></br>
                <input type="text" className="texto"></input>
                <br></br>
                <br></br>
                <label>Descrição</label>
                <br></br>
                <input type="descricao" className="texto"></input>
                <br></br>
                <br></br>
                <label>Curso</label>
                <br></br>
                <input type="text" className="texto"></input>
                <br></br>
                <br></br>
                <label>Ano Acadêmico</label>
                <br></br>
                <input type="text" className="texto"></input>
                <br></br>
                <br></br>
                <label>Data de Criação</label>
                <br></br>
                <input type="date" className="texto"></input>
                <br></br>
                <br></br>
                <button>Cadastrar</button>
                <br></br>
                </form>
           </article>
        

                
                 
                   </div>
                  
               

           </section>
        
        
        
        </Style>
        </>
    );
}
export default FormProva;