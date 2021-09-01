import React from "react";
import {Style5} from "./styleSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"; 

function Section5(){
    return(
        <>

        <Style5>
        
        <div id="divNU">
        <h2>Nossos Usuários</h2>
           <p id="p1">Instituições que fizeram o SPO sua escolha para suas provas online.</p>
           <div id="setas">
           <div className="seta"><p className="icon"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg"/></p></div>
           <div className="seta"><p className="icon"><FontAwesomeIcon icon={faArrowAltCircleRight} size="lg"/></p></div>
           </div>
       
        <ul>
            <li>
                <div className="imageCircle1"></div>
            </li>

            <li>
            <div className="imageCircle2" ></div>
            </li>
            <li>
                <div className="imageCircle3"></div>
         </li>
         <li>
                <div className="imageCircle4"></div>
         </li>
         <li>
                <div className="imageCircle5"></div>
         </li>
         
        </ul>
      
        </div>

        </Style5>
        
        </>
    );

}

export default Section5;