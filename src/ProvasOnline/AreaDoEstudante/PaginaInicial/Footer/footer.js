import React from "react";
import {StyleFooter} from "./styleSection";
import Image from "../images/Logo.png";


function Footer(){
    return(
        <>

        <StyleFooter>

        <footer>
        <div id="div1">
           <ul>
           <li>
               <img src={Image} alt=""/>
           </li>
           <li>
               Perguntas Frequentes
           </li>
           
           <li>
              Políticas de Privacidade
           </li>
           <li>
              Termos de Uso
           </li>
           </ul>

           <ul>
           <li>
               EMPRESA
           </li>
           <li>
               Quem somos
           </li>
           
           <li>
              O que fazemos
           </li>
           <li>
              Onde nos encontrar
           </li>
           </ul>



           <ul>
           <li>
               FALE CONNOSCO
           </li>
           <li>
               <input name="msg" id="msg" placeholder="Escreva sua mensagem"></input>
           </li>

           <li>
               <button>Enviar</button>
           </li>

           <li>
               po2020@gmail.com
           </li>


           </ul>
        
      
        </div>

    

        <div id="div2">

            <p>© copyright 2020 by MD_DLineCode</p>       
          
        </div>

        </footer>

        </StyleFooter>
        
        </>
    );

}

export default Footer;