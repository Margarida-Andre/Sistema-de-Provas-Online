import React from "react";
import {StyleLogin} from "./style";
import LogImg from "./LogImg.png";
import {Link} from "react-router-dom";
import Header from "./../../AreaDoEstudante/PaginaInicial/Header/header";

function Login(){
    return(
        <>
        <Header></Header>
        <StyleLogin>
         <section>
         <div>
            <form>
                <section>
                    
                <label>Nome</label>
                <br></br>
                <select>
                    <option>ISUTIC</option>
                    <option>ISPTEC</option>
                    <option>IMCL</option>
                    <option>IMEL</option>
                </select>
                <br></br>
                <label>Provincia</label>
                <br></br>
                <select>
                    <option>Luanda</option>
                    <option>Huambo</option>
                    <option>Uíge</option>
                </select>
                <br></br>
                <label>Município</label>
                <br></br>
                <select>
                    <option>Belas</option>
                    <option>Talatona</option>
                    <option>Viana</option>
                </select>
                <br></br>
                <label>Distrito Urbano</label>
                <br></br>
                <select>
                    <option>Belas</option>
                    <option>Talatona</option>
                    <option>Viana</option>
                </select>
        
                <input name="rua" id="rua" type="text" placeholder="rua"></input>
                
                <Link to="/AmbienteDoProfessor"><button>Criar Conta</button></Link>
                <br></br>
                
                </section>
            </form>

            <article>
                <h4>Cadastra-se Aqui!</h4>
                <img src={LogImg} alt=""/>
                
            </article>
            </div>
        </section>
        </StyleLogin>
        </>
        

    );
}
export default Login;