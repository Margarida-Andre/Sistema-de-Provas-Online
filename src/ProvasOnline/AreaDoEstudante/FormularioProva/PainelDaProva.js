
import React from "react";
import {Style} from "./style.js";
import Image from "./PO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faFileAlt, faHome, faUser, faAddressBook, faSignOutAlt} from "@fortawesome/free-solid-svg-icons"; 
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
            <h1>Disciplina1</h1>

               <div id="dashboard">
                
                  
                  <article id="article1">
                      
                      <ul id="listaNavegacao">
                          <h4>Painel de Controle</h4>
                          <div id="circulo"></div>
                        
                          
                          
                      </ul>

                   <br></br>
                  </article>


                  <article id="article1">
                      <ul id="listaNavegacao">
                          <h4>Painel do Utilizador</h4>
                          <li className="listaNavegacao"><FontAwesomeIcon icon={faHome}/> Painel Inicial</li>
                          <li className="listaNavegacao"><FontAwesomeIcon icon={faUser}/> Perfil</li>
                          <li className="listaNavegacao"> <FontAwesomeIcon icon={faAddressBook}/> As Minhas Disciplinas</li>
                          <li className="listaNavegacao"><FontAwesomeIcon icon={faFileAlt}/> Provas</li>
                          <Link to="./PaginaInicial" className="link"> <li className="listaNavegacao"><FontAwesomeIcon icon={faSignOutAlt}/>Sair</li></Link>
                      </ul>

                   <br></br>
                  </article>

               </div>

               <div id="Prova">
                <ul id="listaProva">
                  <li className="fProva">Recomendações</li>
                   <li className="fProva">Prova</li>
                   </ul>
                   <br></br>
                   <hr></hr>

                   <ul id="step">
                       <li className="steps"><div id="linhaStep"></div>1 </li>
                       <li className="steps"><div id="linhaStep"></div>2</li>
                       <li className="steps"><div id="linhaStep"></div>3</li>
                       <li className="steps">4</li>

                   </ul>
                   <div id="formPerguntasRespostas">

                       <div className="fPR1" >

                       <div id="fPR11">
                       <p className="fPR11"><FontAwesomeIcon icon={faFileAlt}/> Pergunta 1</p>
                       <p className="fPR11">Por responder</p>
                       <p className="fPR11">Nota </p>
                       <p className="fPR11">Tempo restante <span>H: M: S</span></p>

                       </div>

                       </div>

                         <div className="fPR2">
                             <div id="questoes">
                             <p>O que é um SO?</p>
                             <br></br>
                             <label>Selecciona 2 opções</label>
                             <br></br>
                             <input type="radio" name="r"></input>
                             <label className="R">É um sistema que serve de base para instalação de outros softwares.</label>
                       
                             <br></br>
                             <input type="radio" name="r"></input>
                             <label className="R">É um sistema que serve de base para instalação de 2 softwares.</label>
                             
                             <br></br>
                             <input type="radio" name="r"></input>
                             <label className="R">É um sistema simples.</label>
                            
                             <br></br>
                            <button><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>

                           
                            </div>
                         </div>

                   </div>
             
               </div>


           </section>
        
        
        
        </Style>
        </>
    );
}
export default FormProva;