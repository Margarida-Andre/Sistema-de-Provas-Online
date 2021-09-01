import React from "react";
import {Style2} from "./styleSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSmile, faLink} from "@fortawesome/free-solid-svg-icons"; 

function Section2(){
    return(
        <>

        <Style2>
    <section>
        <article>
   
            
        <div id="div1">
            <h1><FontAwesomeIcon icon={faSmile} size="lg"/> <br></br>Suporte com um sorriso</h1>
            Um PO com um toque humano. Somos nós, nosso objetivo é deixar você feliz 
            com os nossos recursos.
           
            </div>

            <div id="div2">
            <h1><FontAwesomeIcon icon={faHeart} size="lg"/> <br></br>Sismples e fácil de usar</h1>
            Nosso criador de provas é simples e fácil de usar. Tanto para os alunos como 
            para os professores. Além disso, ele é super intuitivo!
            </div>

            <div id="div3">
            <h1><FontAwesomeIcon icon={faLink} size="lg"/> <br></br>Suporte com guia</h1>
            Estamos disponíveis para suas perguntas e para te mostrar a ferramenta. 
            Sua contribuição nos torna melhores.
            </div>

            </article>
        
        </section>

        
        </Style2>
        
        </>
    );

}

export default Section2;