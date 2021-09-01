import React, {useEffect, useState} from 'react';
import { Dashboard, Header } from '../../styles/pageProfessor/styleCriarPerguntas';
import Logo from '../../images/LogoFundoAzul.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faBell, faSortDown, faUsers, faUser, faEdit, faCog } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import api from '../../services/api';



function PageCriarPerguntas({ history }){
 
   const [professorId, setProfessorId] = useState("0");
   const [provaId, setProvaId] = useState("0");
   const [pergunta, setPergunta] = useState("");
   const [respostaCorrecta, setRespostaCorrecta] = useState("");
   const [respostaErrada1, setRespostaErrada1] = useState("");
   const [respostaErrada2, setRespostaErrada2] = useState("");
   const [respostaErrada3, setRespostaErrada3] = useState("");
   const [professor, setProfessor] = useState([]);

  const [inputList, setInputList] = useState([{ pergunta: "", respostaCorrecta: "", respostaErrada1: "", respostaErrada2: "", respostaErrada3: "" }]);
  
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { pergunta: "", respostaCorrecta: "", respostaErrada1: "", respostaErrada2: "", respostaErrada3: "" }]);
  }
 
  async function handleSubmitProva(e) {
    e.preventDefault();

  

    const provaId = localStorage.getItem("prova"); 
    const professorId = localStorage.getItem("login");
    const data = { provaId, professorId, pergunta, respostaCorrecta, respostaErrada1, respostaErrada2, respostaErrada3};
    const questoes = await api.post("/questaoCreate", data);

    console.log(questoes.data);
    
  }


  useEffect(() => {
    async function Professor() {
      const result = await api.get("/professorAll");
      setProfessor(result.data);
    }
    Professor();
  }, []);

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

    <Dashboard>
    <section>
      <article id="article1">
          
      <ul>
          
          <div></div>
            <label >Margarida André</label>
          <hr></hr>

          <Link to="/pagecriarEstudante" className="link"><li>
          <FontAwesomeIcon icon={faUser} size="2x" className="icons"></FontAwesomeIcon>
          <br></br>
          Estudante   
          </li></Link>
          <hr></hr>


          <Link to="/pagecriarTurma" className="link"><li>
          <FontAwesomeIcon icon={faUsers} size="2x" className="icons"></FontAwesomeIcon><br></br>
          Turma 
          </li></Link>
          <hr></hr>

          <Link to="/pagecriarProva" className="link"><li>
          <FontAwesomeIcon icon={faEdit} size="2x" className="icons"></FontAwesomeIcon><br></br>
            Prova
          </li></Link>
          <hr></hr>

          
          <Link to="/pagePerfil" className="link">
              <li>
                <FontAwesomeIcon
                  icon={faUser}
                  size="2x"
                  className="icons"
                ></FontAwesomeIcon>
                <br></br>
                Perfil
              </li>
             </Link>
             
            <hr></hr>

          <li>
          <FontAwesomeIcon icon={ faCog} size="2x" className="icons"></FontAwesomeIcon><br></br>
            Configurações
          </li>  
          <hr></hr>


        </ul>

      </article>

      <article id="article2">
      <form onChange={handleSubmitProva}>

<h1 id="title">Preencha suas perguntas</h1>
  {inputList.map((x,i) => { 
return( 
   <>
   <div id="conteinerquestoes">
   {inputList.length !== 1 && <label
                className="removerPergunta"
                onClick={() => handleRemoveClick(i)}>+</label>}
      <br></br>
     <label className="lbquestao" value={pergunta}  onChange={(e) => setPergunta(e.target.value)}>Questão
     <textarea name="pergunta" 
     value={x.pergunta}
     type="text" 
     className="pergunta"
     onChange={e => handleInputChange(e, i)}
     ></textarea>
     </label>

     <br></br>
     <label value={respostaCorrecta}  onChange={(e) => setRespostaCorrecta(e.target.value)}>
       Resposta correcta
     <input 
     name="respostaCorrecta" 
     value={x.respostaCorrecta}
     type="text" 
     className="respostas"
     onChange={e =>  handleInputChange(e, i)}
     ></input>
     </label>

     <br></br>
     <label value={respostaErrada1}  onChange={(e) => setRespostaErrada1(e.target.value)}>
       Resposta errada
     <input 
     name="respostaErrada1" 
     value={x.respostaErrada1} 
     type="text" 
     className="respostas"
     onChange={e => handleInputChange(e, i)}
     ></input>
     </label>
     
     <br></br>
     <label value={respostaErrada2}  onChange={(e) => setRespostaErrada2(e.target.value)}>Resposta errada
     <input name="respostaErrada2" 
     value={x.respostaErrada2} 
     type="text" 
     className="respostas"
     onChange={e => handleInputChange(e, i)}
     ></input>
     </label>
 
     <br></br>
     <label value={respostaErrada3}  onChange={(e) => setRespostaErrada3(e.target.value)}>Resposta errada
     <input name="respostaErrada3" 
     value={x.respostaErrada3} 
     type="text" 
     className="respostas"
     onChange={e => handleInputChange(e, i)}
     
     ></input>
     </label>
    

{inputList.length - 1 === i && <button className="btnAddQuestao" onClick={handleAddClick}>Adicionar questão</button>}

 </div>

   </>
    
 );
  })}
   <button className="btnCadastroQuestoes" type="submit">Cadastrar </button>
   </form>
      </article>

      

    </section>
    </Dashboard>

    </>
  );
}


 



export default withRouter(PageCriarPerguntas);