import React from "react";
import {Style} from "./styleSection";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";

function Section(){
    return(
        <>

        <Style>
        <div>
        <article id="article">
        <div id="setaEsquerda"><p className="icon"><FontAwesomeIcon icon={faAngleDoubleLeft} size="lg"/></p></div>
        <div id="setaDireita"><p className="icon"><FontAwesomeIcon icon={faAngleDoubleRight} size="lg"/></p></div>
        <div id="bemVindo">
        <h1>Sistema de Provas Online</h1>
        <p>Seja bem-vindo(a) ao sistema de provas online!</p>
        <Link to="./Login"><button>Iniciar</button></Link>
        </div>
        
        </article>
        </div>
        
        </Style>
        
        </>
    );

}

export default Section;