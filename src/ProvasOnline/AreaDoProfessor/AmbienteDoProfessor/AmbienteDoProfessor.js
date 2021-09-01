import React from "react";
import {Style} from "./style.js";
import Image from "./PO.png";
import Image2 from "./MapaNav.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChalkboardTeacher, faProjectDiagram , faSignOutAlt , faUsers, faAddressBook , faUser} from "@fortawesome/free-solid-svg-icons"; 
import Calender from "./Calendario.js";
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
           <p id="p1">Olá, Instituição</p>
           

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
                    <option value="">Listar</option>
                    </select>
                      </li>

                      <li className="listaDashboard">
                     
                    <FontAwesomeIcon icon={faUsers}/> Turmas
                     
                    <select name="Turmas" id="T" onChange={event => hundleChange(event.target.value)}>
                    <option value=""></option>
                    <option value="FormularioCadastrarTurma">Criar</option>
                    <option value="ListarTurma">Listar</option>
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


                <div id="div11">

               <div className="forms">
              
               <p id="p3"><FontAwesomeIcon className="Icon" icon={faAddressBook}/></p>
                <p id="p4"> 
                <p className="titlulo"> Disciplinas</p>
                <h4> Total</h4>
                </p>  
                </div>

                <div className="forms">
              
              <p id="p31"><FontAwesomeIcon className="Icon" icon={faUsers}/></p>
               <p id="p4"> 
               <p className="titlulo"> Turmas</p>
               <h4> Total</h4>
               </p>  
               </div>

               <div className="forms">
              
              <p id="p32"><FontAwesomeIcon className="Icon" icon={faChalkboardTeacher}/></p>
               <p id="p4"> 
               <p className="titlulo"> Provas</p>
               <h4> Total</h4>
               </p>  
               </div>

               <div className="forms">
              
              <p id="p34"><FontAwesomeIcon className="Icon" icon={faUser}/></p>
               <p id="p4"> 
               <p className="titlulo"> Professores</p>
               <h4> Total</h4>
               </p>  
               </div>
                
                
                </div>

                <article id="article1">

                <div id="div2">
                <h4 id="tituloMapa">Mapa de Navegação</h4>
                
                <img id="image2" src={Image2} alt=""/>
                  
                         
                </div>


                <div id="div3">
                  
                  <Calender></Calender>
                  
                </div>

                

              </article> 

              <article id="article2">

              <div id="div4">

              <h4 className="actividades">Seja bem-vindo (a)</h4>
                
                <br></br>
                <hr></hr>
                
                
                
                <p className="">
                  <button>Perfil</button> 
                  <br></br>
                  <br></br>
                  <button>Atribuir Papéis</button>  
              </p>
           
                
                
                
                  


             </div>

              <div id="div5">

              
                <h4 className="actividades">Actividades Recentes</h4>
                
                <br></br>
                <hr></hr>
                
                <p className="actividadesRecentes">
                  <li className="listActividades">Actualizou perfil</li>  
                  <li className="listActividadesHora">12h:30min</li>   
              </p>
           
                <p className="actividadesRecentes">
                <li className="listActividades">Cadastrou turma</li>  
                <li className="listActividadesHora">13h:30min</li> 
                </p>
                
                <p id="verMais"> Ver mais...</p>

                </div>
 
                

              </article>
              
                </div>

                
              
               
               

           </section>
        
        
        
        </Style>
        </>
    );
}
export default FormProva;