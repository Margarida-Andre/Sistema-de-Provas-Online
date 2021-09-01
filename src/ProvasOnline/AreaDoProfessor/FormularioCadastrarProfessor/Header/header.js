import React from "react";
import {Style} from "./styleHeader";
import Image from "./images/PO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from "react-router-dom";


function Header (){

    return(
        <>
     
        <Style>
        <div>
        <img src={Image} alt="" />    
        </div>

       
        <ul id="ListaHeader">
           
            
            <li className="listHeader">
             Início
            </li>
            <li className="listHeader">
               Sobre nós
            </li>
            <li className="listHeader">
               Recursos
            </li>
            <li className="listHeader">
             Demonstração
            </li>
            <li className="listHeader">
                Nossos Usuários
            </li>
            <li className="listHeader">
                Ajuda
            </li>
            <li className="listHeader" id="cadastrar">
          
             Cadastra-se <FontAwesomeIcon  icon={faAngleDown}/>

            </li>

            <ul className="LA">
             
              <Link className="textoLink" to="/FormularioCadastrarProfessor"><li className="listAcesso">Director de Turma</li></Link>
              <hr></hr>
              <Link className="textoLink" to="/FormularioCadastrarInstuicao"><li className="listAcesso">Instituição</li></Link>
            
           </ul>

            
            

         
          
         


        </ul>

      
        </Style>

        

        </>
    );
}

export default Header;