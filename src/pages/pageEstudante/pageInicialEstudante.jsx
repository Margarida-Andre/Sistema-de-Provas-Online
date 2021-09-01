import React from 'react';
import { Header } from '../../styles/pageInicialEstudante/pageInicialEstudante';

function pageInicialEstudante(){
return(
    <>
    <Header>
    <header>

    <div id="logo">
    <Link to="/pageProfessor" className="link"><img src={Logo} alt=""></img></Link>
    </div>

    <input type="search" id="search" placeholder="pesquisar"/>

    <div id="itemsUser">

    <FontAwesomeIcon icon={faComments} className="icons"></FontAwesomeIcon>
    <FontAwesomeIcon icon={faBell} className="icons"></FontAwesomeIcon>
    <div id="imagePerfil"></div>

    </div>

    <div id="nomeUser">
    <label>Margarida André <FontAwesomeIcon icon={faSortDown} id="iconNome"></FontAwesomeIcon></label>
    </div>

    </header>
    </Header>
    </>
);
}
export default pageInicialEstudante;