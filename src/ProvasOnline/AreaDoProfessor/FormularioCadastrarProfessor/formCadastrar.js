import React from "react";
import {StyleLogin} from "./style";
import LogImg from "./LogImg.png";
import {Link} from "react-router-dom";
import Header from "./Header/header.js";

function Login(){
    return(
        <>
        <Header></Header>
        <StyleLogin>
         <section>
         <div>
            <form>
                <section>
                    
               <h3>Cadastra-se Aqui!</h3>
                <label>Nome</label>
                <br></br>
                <input type="text" placeholder="Nome Completo" className="texto"></input>
                <br></br>
                <label>Email</label>
                <br></br>
                <input type="email" placeholder="Endereço de email" className="texto"></input>
                <br></br>
                <label>Senha</label>
                <br></br>
                <input type="password" placeholder="******" className="texto"></input>
                <br></br>
                <label>Confirmar Senha</label>
                <br></br>
                <input type="password" placeholder="******" className="texto"></input>
                <br></br>
                
                <Link to="/AmbienteDoProfessor"><button>Criar Conta</button></Link>
                <br></br>
                
                </section>
            </form>

            <article>
                <img src={LogImg} alt=""/>
                
            </article>
            </div>
        </section>
        </StyleLogin>
        </>
        

    );
}
export default Login;