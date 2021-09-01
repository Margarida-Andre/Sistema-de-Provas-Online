
import React from "react";
import {Style} from "./style.js";
import Image from "./PO.png";
import Calendario from "../../AreaDoProfessor/AmbienteDoProfessor/Calendario.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faHome, faUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons"; 
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
                         <Link to="/PerfilEstudante" className="link"> <li className="listaNavegacao"><FontAwesomeIcon icon={faUser}/> Perfil</li></Link>
                          
                          <li className="listaNavegacao"><FontAwesomeIcon icon={faFileAlt}/> Provas</li>
                          <Link to="./PaginaInicial" className="link"> <li className="listaNavegacao"><FontAwesomeIcon icon={faSignOutAlt}/>Sair</li></Link>
                      </ul>

                   <br></br>

                  
                  </article>

               </div>

               <div id="disciplinas">
                   <h4 id="h4Disciplinas">As Minhas Disciplinas</h4>
                   <br></br>
                   <hr></hr>
                    <ul id="listaDisciplinas">
                        <li className="listaDisciplinas">
                            <h3>Disciplina 1</h3>
                            <p className="paragTestes"><FontAwesomeIcon className="Icon" icon={faFileAlt}/><Link to="./PainelDaProva" className="link"> Atenção aos testes, clique aqui para mais informações</Link></p>
                        </li>

                        <li className="listaDisciplinas">
                        <h3>Disciplina 2</h3>
                        <p className="paragTestes"><FontAwesomeIcon className="Icon" icon={faFileAlt}/><Link to="./PainelDaProva" className="link"> Atenção aos testes, clique aqui para mais informações </Link></p>
                        </li>

                        <li className="listaDisciplinas">
                        <h3>Disciplina 3</h3>
                            <p className="paragTestes"><FontAwesomeIcon className="Icon" icon={faFileAlt}/><Link to="./PainelDaProva" className="link"> Atenção aos testes, clique aqui para mais informações </Link></p>
                            </li>
                   
                        <li className="listaDisciplinas">
                        <h3>Disciplina 4</h3>
                            <p className="paragTestes"><FontAwesomeIcon className="Icon" icon={faFileAlt}/><Link to="./PainelDaProva" className="link"> Atenção aos testes, clique aqui para mais informações </Link></p>
                        </li> 

                        <li className="listaDisciplinas">
                        <h3>Disciplina 5</h3>
                            <p className="paragTestes"><FontAwesomeIcon className="Icon" icon={faFileAlt}/> <Link to="./PainelDaProva" className="link"> Atenção aos testes, clique aqui para mais informações </Link></p>
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