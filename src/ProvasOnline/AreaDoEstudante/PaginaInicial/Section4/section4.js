import React from "react";
import {Style4} from "./styleSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserClock, faDatabase, faUserCircle, faUserEdit} from "@fortawesome/free-solid-svg-icons"; 


function Section4(){
    return(
        <>

        <Style4>
        <article>
        
        <div>
        <h2>Soluções Para o Professor Moderno</h2>

        <li><FontAwesomeIcon icon={faUserClock} size="lg"/> Optimização de Processos
        <p>Redução de custos operacionais
        Redução do tempo gasto na elaboração e correção de provas</p>
        </li>

        <li><FontAwesomeIcon icon={faUserEdit} size="lg"/> Gestão da Aprendizagem
        <p>Geração de dados detalhados sobre o desempenho de seus alunos e turmas.</p>
        </li>

        <li><FontAwesomeIcon icon={faUserCircle} size="lg"/> Flexibilidade
        <p>Utilização de diferentes meios e dispositivos para aplicação de provas.
           <br></br>O aluno não precisará mais se deslocar para locais e horários específicos para fazer provas</p>
        </li>

        <li><FontAwesomeIcon icon={faDatabase} size="lg"/> Gerenciamento
        <p>Autonomia de cadastros, criação ilimitada de questões e avaliações.
        <br></br>Armazenamento, controle e organização de conteúdo. Agendamento de avaliações, entrega de resultados e muito mais.</p>
        </li>

        

        </div>

        </article>

        
        </Style4>
        
        </>
    );

}

export default Section4;