import React from "react";
import {Style} from "./style.js";
import Image from "./PO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUniversity, faChalkboardTeacher, faProjectDiagram , faSignOutAlt , faUsers, faAddressBook, faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons"; 



function FormProva(){
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
                     <FontAwesomeIcon icon={faUniversity}/>  Instituições de Ensino
                      </li>

                      <li className="listaDashboard">
                      <FontAwesomeIcon icon={faAddressBook}/> Disciplinas

                    <select name="Turmas" id="T">
                    <option value=""></option>
                    <option value="C">Criar</option>
                    <option value="L">Listar</option>
                    </select>
                      </li>

                      <li className="listaDashboard">
                     
                    <FontAwesomeIcon icon={faUsers}/> Turmas
                     
                    <select name="Turmas" id="T">
                    <option value=""></option>
                    <option value="C">Criar</option>
                    <option value="L">Listar</option>
                    </select>
                      </li>

                      <li className="listaDashboard">
                      <FontAwesomeIcon icon={faChalkboardTeacher}/> Provas

                        <select name="P" id="T">
                        <option value=""></option>
                        <option value="C">Criar</option>
                        <option value="L">Listar</option>
                        <option value="L">Estatíticas</option>
                        </select>

                      </li>
                      

                      <li className="listaDashboard">
                      <FontAwesomeIcon icon={faProjectDiagram}/> Configurações</li>
                      <li className="listaDashboard">
                      G Guia</li>

                      <li className="listaDashboard">
                      <FontAwesomeIcon icon={faSignOutAlt}/> Sair</li>
    

                  </ul>
                  

               </div>


               <div id="div1">

            
            <article>
           
            <h3>Listar Turma</h3>
            <table>
              <tr>
                <th>Nome da turma</th>
                <th>Turno</th>
                <th>Curso</th>
                <th>Ano Acadêmico</th>
                <th>Data de Criação</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
              <tr>
            
                <th>Turma B</th>
                <th>Manhã</th>
                <th>Informática</th>
                <th>1º</th>
                <th>2020</th>
                <th><button id="buttonEditar"><FontAwesomeIcon icon={faPen}/></button></th>
                <th><button id="buttonEliminar"> <FontAwesomeIcon icon={faTrashAlt}/></button></th>

              </tr>

              <tr>
            
                <th>Turma A</th>
                <th>Manhã</th>
                <th>Informática</th>
                <th>2º</th>
                <th>2020</th>
                <th><button id="buttonEditar"><FontAwesomeIcon icon={faPen}/></button></th>
                <th><button id="buttonEliminar"> <FontAwesomeIcon icon={faTrashAlt}/></button></th>

              </tr>
            </table>
            
                
           </article>
        

                
                 
                   </div>
                  
               

           </section>
        
        
        
        </Style>
        </>
    );
}
export default FormProva;