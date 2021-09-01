import React from "react";
import {Style} from "./style.js";
import Image from "./PO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUniversity, faChalkboardTeacher, faProjectDiagram , faSignOutAlt , faUsers, faAddressBook } from "@fortawesome/free-solid-svg-icons"; 



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
            <form>
            <h3>Criar QUestões</h3>

               <br></br>
                <label>Disciplina</label>
                <br></br>
                <select name="disciplina" id="disciplina">
                    <option value="masculino">Linguagem de Programação</option>
                    <option value="masculino">Sistema Operativo</option>
                </select>
                <br></br>
                <br></br>

                <label>Assunto</label>
                <br></br>
                <input type="text" className="texto"></input>
                <br></br>
                <br></br>

                <label>Grau acadêmico</label>
                <br></br>
                <input type="descricao" className="texto"></input>
                <br></br>
                <br></br>
                <label>Tipo de questão</label>
                <br></br>
                
                <button id="tq1">Múltila Escolha</button>
                
                <button id="tq2">Certo/Errado</button>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <button id="btnCriar">Criar</button>
                </form>
           </article>
        

                
                 
                   </div>
                  
               

           </section>
        
        
        
        </Style>
        </>
    );
}
export default FormProva;