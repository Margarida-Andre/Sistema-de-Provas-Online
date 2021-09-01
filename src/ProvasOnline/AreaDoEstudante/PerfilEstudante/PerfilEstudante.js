
import React from "react";
import {Style} from "./style.js";
import Image from "./PO.png";
import Calendario from "../../AreaDoProfessor/AmbienteDoProfessor/Calendario.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faFileAlt, faHome, faUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons"; 
import { Link } from "react-router-dom";

function FormProva(){
    return(
        <>
       <Style>
           <section>

           <div id="divheader">
            
           <img src={Image} alt=""/>

           <div id="usuario"></div>
           <p id="p1">Hi, Estudante</p>
           

            </div>

               <div id="dashboard">

                  <div id="circulo"></div>

                  <article id="article1">
                      <ul id="listaNavegacao">
                         <h4 >Painel do Utilizador</h4>
                         <Link to="/AmbienteDoEstudante" className="link">  <li className="listaNavegacao"><FontAwesomeIcon icon={faHome}/> Painel Inicial</li></Link>
                          <li className="listaNavegacao"><FontAwesomeIcon icon={faUser}/> Perfil</li>
                          
                          <li className="listaNavegacao"><FontAwesomeIcon icon={faFileAlt}/> Provas</li>
                          <Link to="./PaginaInicial" className="link"> <li className="listaNavegacao"><FontAwesomeIcon icon={faSignOutAlt}/>Sair</li></Link>
                      </ul>

                   <br></br>

                  
                  </article>

               </div>

               <div id="disciplinas">
                   <h4 id="h4Disciplinas">Perfil</h4>
                   <br></br>
                   <hr></hr>
                    <ul id="listaDisciplinas">
                        <li className="listaDisciplinas">
                        <div id="circulo1"></div>
                            <p className="informEstudante"> Nome: Margarida do Amaral <FontAwesomeIcon className="Icon" icon={faPen}/></p>
                            <p className="informEstudante"> Email: margaridaandre034@gmail.com <FontAwesomeIcon className="Icon" icon={faPen}/> </p>
                            <p className="informEstudante"> Senha: 010203#  <FontAwesomeIcon className="Icon" icon={faPen}/></p>
                        </li>

                            
                

                    </ul>
               </div>

               

               <div id="dashboard2">

               <div id="pautas">
                   <h4 id="h4Pautas">Pautas</h4>
                   <p id="paragPautas">Não há ficheiros disponíveis</p>
                   </div> 

                   <br></br>

                   <div id="pautas">
                   <h4 id="h4Pautas">Medalhas</h4>
                   <p id="paragPautas">Não há medalhas para mostrar</p>
                   </div> 

                   <br></br>
                   
                  
                  <div id="pautas">
                   <Calendario></Calendario> 
                   </div>

                   

                    

                  
                   
                  

               </div>

           </section>
        
        
        
        </Style>
        </>
    );
}
export default FormProva;