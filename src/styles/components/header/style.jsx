import styled from "styled-components";

export const Header = styled.section`
  background-color: white;
  width: 100%;
  height: 65px;
  font-family: calibri;
  font-size: 17px;
  border: 1px solid #dedede;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 67px;
    height: 45px;
    margin-right: 520px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    list-style: none;
    padding: 10px 15px;
    color: #1b1464;
    font-weight: bold;
    cursor: pointer;
    transition: all 1s;
  }
  .cadastrar {
    padding-top: 60px;
  }

  .lista:hover {
    background-color: #fbb03b;
    border-radius: 2px;
    transition: all 0.5s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  article {
    width: 150px;
    height: 50px;
    background-color: white;
    color: #1b1464;
    font-weight: bold;
    visibility: hidden;
  }

  p {
    padding: 10px 10px;
    cursor: pointer;
  }
`;

export const Cadastrar = styled.section`
  width: 100%;
  height: 100%;

  .sec{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
  }

  article {
    width: 830px;
    height: 555px;
    background-color: white;
    border-radius: 4px;
    text-align: center;
    position: relative;
  }

  .Form{
    width: 830px;
    height: 555px;

  }

  #articleFields{
    width: 780px;
    height: 330px;
    margin-top: 130px;
    display: flex;
    margin-left: 10px;
  
  }
  .divFields{
    width: 355px;
    height: 310px;
    margin-left: 25px;
  
  }

  p {
    position: absolute;
    top: 0;
    right: 14px;
    font-size: 42px;
    transform: rotate(45deg);
    cursor: pointer;
  }

  h1 {
    margin-top: 40px;
    color: #1b1464;
    font-size: 20px;
  }

  input,
  select {
    width: 350px;
    height: 55px;
    border: solid 1px #dedede;
    border-radius: 4px;
    padding: 9px;
    margin-top: 12px;
    font-size: 15.5px;
    color: #808080;
  }


  select:hover{
    border: 2px solid #1b1464;
  }
    input:hover{
    border: 2px solid #1b1464;
  }

.add{
  width: 415px;
  height: 70px;
  background-color: #1b1464;
  color: white;
  font-size: 18px;
  border: none;
  margin-top: 40px;
}

.add:hover{
   background-color: #fbb03b;

}

#cancelar{
  background-color: #fbb03b;
  :hover{
    background-color: #1b1464;
  }
}


.btnLogin{
    width: 150px;
    height: 55px;
    background-color:#1b1464;
    color: #ffff;
    font-size: 18px;
    float: left;
    margin-left: 34px;
    margin-top: 50px;
    border: none;

  }

  .btnCadastrar{
    width: 150px;
    height: 55px;
    font-size: 18px;
    float: left;
    margin-top: 50px;
    border: none;
    background-color: #fbb03b;
    color: #ffff;
  }
    .btnCadastrar:hover{
    background-color: #1b1464;
    color: #ffffff;
}

  input::placeholder {
    font-size: 15.5px;
  }

   .inputLogin , .btnEntrar {
    width: 720px;
  }

  #generos{
    width: 728px;
    margin-left: 5px;
  }

  .Form-Error{
    color: red;
  }

`;

export const Login = styled.section`
  width: 100%;
  height: 100%;

  div {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
  }

  article {
    width: 830px;
    height: 500px;
    background-color: white;
    border-radius: 4px;
    text-align: center;
    padding: 20px;
    position: relative;
  }

  #article3 {
    height: 480px;
  }
  .formLogin {
    height: 350px;
    margin-top: 20px;
  }

  p {
    position: absolute;
    top: 0;
    right: 14px;
    font-size: 42px;
    transform: rotate(45deg);
    cursor: pointer;
  }

  h1 {
    margin-top: 40px;
    color: #1b1464;
    font-size: 20px;
  }

  .inputLogin,
  .btnEntrar {
    margin-top: 20px;
    width: 712px;
    height: 55px;
    border: 1px solid #dedede;
    border-radius: 4px;
    margin-right: 16px;
    padding: 10px;
    font-size: 15.5px;
    color: #808080;
  }

  .inputLogin:focus {
    border: 2px solid #1b1464;
  }

  .Login-Error {
    color: red;
  }

  button {
    background-color: #1b1464;
    color: #ffffff;
  }
  button:hover {
    background-color: #fbb03b;
    color: #ffffff;
  }

  .btnEntrar {
    font-size: 18px;
    color: #ffffff;
  }

  .btnLogin {
    width: 150px;
    height: 55px;
    font-size: 18px;
    float: left;
    margin-left: 34px;
    margin-top: 50px;
    border: none;
  }

  .btnCadastrar {
    width: 150px;
    height: 55px;
    font-size: 18px;
    float: left;
    margin-top: 50px;
    border: none;
    background-color: #fbb03b;
  }
  .btnCadastrar:hover {
    background-color: #1b1464;
    color: #ffffff;
  }

  input::placeholder {
    font-size: 15.5px;
  }

  label {
    width: 100px;
    height: 100px;
    font-size: 18px;
    position: relative;
    top: 20px;
  }

  .Form-Error {
    color: red;
  }
`;
