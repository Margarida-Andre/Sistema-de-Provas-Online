import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/home";
import Login from "./pages/login";
import PageProfessor from "./pages/pageProfessor/pageProfessor";
import PageCriarProva from "./pages/pageProfessor/pageCriarProva";
import PageCriarEstudante from "./pages/pageProfessor/pageCriarEstudante";
import PageCriarDisciplina from "./pages/pageProfessor/pageCriarDisciplina";
import PageCriarTurma from "./pages/pageProfessor/pageCriarTurma";
import PageCriarProvaForm from "./pages/pageProfessor/pageFormCriarProva";
import PageCriarPerguntasForm from "./pages/pageProfessor/pageFormCriarPerguntas";
import PageFormEstudante from "./pages/pageProfessor/pageFormEstudante";
import PageFormDisciplina from "./pages/pageProfessor/pageFormDisciplina";
import PageFormTurma from "./pages/pageProfessor/pageFormTurma";
import PageFormEstudanteProva from "./pages/pageEstudante/pageProva";
import PageFormPerfil from "./pages/pageProfessor/pageFormPerfil";
import PageInicialEstudante from "./pages/AmbienteEstudante/PainelDoEstudante";
import PrivateRoute from './components/PrivateRoute';
import {history} from 'history';

import Pag from './pages/paginacao';
import Teste from './pages/Testes/index';
//import Relatorio from './pages/Relatorio/App';


function Routes() {
  return (
    <>
      <BrowserRouter>
          <Switch>
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/pageProfessor" component={PageProfessor} />
              <Route path="/pageProvaForm" component={PageCriarProvaForm} />
              <Route path="/pagecriarProva" component={PageCriarProva} />
              <Route path="/pagePerguntasForm" component={PageCriarPerguntasForm} />
              <Route path="/pageEstudanteForm" component={PageFormEstudante} />
              <Route path="/pageDisciplinaForm" component={PageFormDisciplina} />
              <Route path="/pageTurmaForm" component={PageFormTurma} />
              <Route path="/pagecriarEstudante" component={PageCriarEstudante} />
              <Route path="/pagecriarDisciplina" component={PageCriarDisciplina} />
              <Route path="/pagecriarTurma" component={PageCriarTurma} />
              <Route path="/pageEstudanteProva" component={PageFormEstudanteProva} />
              <Route path="/PageInicialdoEstudante" component={PageInicialEstudante} />
              <Route path="/pagePerfil" component={PageFormPerfil} />
              
              <Route path="/paginacao" component={Pag} />
              <Route path="/testes" component={Teste}/>
            
              <PrivateRoute component={NotFound} />
              
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
