import React from "react";
import {Style7} from "./styleSection";      
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEdit, faFile, faCloud, faCalculator, faAnchor} from "@fortawesome/free-solid-svg-icons"; 


function Section7(){
    return(
        <>

<Style7>

    <section id="section">
        <article id="article1">
         
         <p id="p1">Recursos</p>
        <p id="p2">Conheça os principais benefícios da ferramenta que irá transformar a sua forma de organizar provas.</p>
        <div id="div1">
        <span><FontAwesomeIcon icon={faClock} size="lg"/></span>
            <h1>Otimização do Tempo</h1>
            <p id="p3">Crie provas online com poucos cliques utilizando o mais 
            completo banco de questões de Angola.</p>
            </div>

        <div id="div1">
            <span><FontAwesomeIcon icon={faFile} size="lg"/></span>
            <h1>Avaliações Online</h1>
            <p id="p3">Reduza os gastos com impressões e tenha maior
                 flexibilidade no processo da prova.</p> 
            </div>

            <div id="div1">
                <span><FontAwesomeIcon icon={faEdit} size="lg"/></span>
                <h1>Correção Automática</h1>
                <p id="p3">Faça correção automática das respostas da prova
                    pelo nosso sistema e obtenha sua pauta</p>
           
            </div>

            </article>


        <article id="article2">
         
        <div id="div1">
        <span><FontAwesomeIcon icon={faCloud} size="lg"/></span>
            <h1>Sistema Em Nuvem</h1>
            <p id="p3">Acesse o sistema quando e onde quiser. 
            Suas informações ficam armazenadas de forma segura.</p>
            </div>

        <div id="div1">
            <span><FontAwesomeIcon icon={faCalculator} size="lg"/></span>
            <h1>Estatísticas</h1>
            <p id="p3">Tenha análises estatísticas de desempenho dos seus alunos 
            e turmas através de tabelas e gráficos.</p> 
            </div>

            <div id="div1">
                <span><FontAwesomeIcon icon={faAnchor} size="lg"/></span>
                <h1>Organização</h1>
                <p id="p3">Tenha todas as suas avaliações, turmas e alunos 
                organizados num só lugar.</p>
           
            </div>

            </article>

            
            
        
        </section>

        
        </Style7>
        
        </>
    );

}

export default Section7;
      