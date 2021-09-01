import React from "react";
import {StyleLogin} from "./styleLogin";
import LogImg from "./LogImg.png";
import {Link} from "react-router-dom";


function Login(){
    return(
        <>
        <StyleLogin>
         <section>
         <div>
            <form>
                <section>
                    
               <h4>WELCOME</h4>
            
                <input type="text" placeholder="Usuário" className="texto"></input>
                <br></br>
                <input type="password" placeholder="Senha" className="texto"></input>
                <br></br>
                <Link to="./AmbienteDoEstudante"><button>LOGIN</button></Link>
                <br></br>
                <p>
                <input type="checkbox" id="checkBox" value=""></input>
                <label class="label1">Relembrar senha</label>
                </p>
                <label class="label2">Esqueceu sua senha?</label>
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