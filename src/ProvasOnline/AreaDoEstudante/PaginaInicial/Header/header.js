import React from "react";
import {Style} from "./styleHeader";
import Image from "../images/PO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEdit, faLink, faUser, faTools, faSync} from "@fortawesome/free-solid-svg-icons"; 
import { Link } from "react-router-dom";


function Header (){

    return(
        <>
     
        <Style>
        <div>
        <img src={Image} alt="" />    
        </div>

       
        <ul id="ListaHeader">
           
            
          <a href="./paginaInicial"> <li className="listHeader"><FontAwesomeIcon icon={faHome} size="xs"/> Início </li></a> 
          <a href="#article"> <li className="listHeader"><FontAwesomeIcon icon={faEdit} size="xs"/> Sobre o Sistema </li></a> 
          <a href="#section"> <li className="listHeader"><FontAwesomeIcon icon={faTools} size="xs"/> Recursos </li></a>
          <a href="#divNU"><li className="listHeader"><FontAwesomeIcon icon={faUser} size="xs"/> Nossos Usuários </li></a>
    
            <li className="listHeader"><FontAwesomeIcon icon={faLink} size="xs"/>Ajuda
            </li>
           
             
            <Link className="textoLink" to="/FormularioCadastrarInstuicao">
            
           <li className="listHeader" id="cadastrar"><FontAwesomeIcon icon={faSync} size="xs"/> Cadastra-se 

            </li>

            </Link>

            
            

         
          
         


        </ul>

      
        </Style>

        

        </>
    );
}

export default Header;