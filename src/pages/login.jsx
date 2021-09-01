import React from 'react';
import  {Login } from '../styles/login/style';
import Ilustracao from '../images/ilustracao.jpg';
import { Link } from "react-router-dom";




function login(){
    return(
        <>
        <Login>
        <section>
        <article>

        <div id="div1">
        <h4>LOGIN</h4>
       <input type="text" name="nome" id="nome" className="input" placeholder="Nome ou email"/>
        <input type="password" name="senha" id="senha" className="input" placeholder="Senha"/>
        <Link to="/PageInicialdoEstudante" className="link"><input type="submit" name="submit" value="Login" id="submit" className="input"/></Link>
        <br></br>
        <input type="checkbox" id="checkBox" value=""></input>
        <label>Relembrar senha</label>
        <br></br>
        <label id="label2">Esqueceu sua senha?</label> 
        
        </div>
        

        <div id="div2">
        <img src={Ilustracao} alt=""/>
        </div>
        </article>

        </section>
        </Login>

        </>

    );
}

export default login;