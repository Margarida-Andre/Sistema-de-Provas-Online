import styled from "styled-components";
import imageUser from "../../images/iconProf.jpg";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #2b265e;

  #logo {
    width: 10%;
    height: 59px;
    display: inline-block;

    img {
      width: 100px;
      height: 50px;
      margin-left: 20px;
      position: relative;
      top: 10px;
    }
  }

  #search {
    width: 15%;
    height: 26px;
    margin-left: 130px;
    border-radius: 20px;
    border: none;
    position: relative;
    bottom: 13px;
    padding: 12px;
    visibility: hidden;
  }

  #itemsUser {
    width: 13%;
    height: 59px;
    display: inline-block;
    margin-left: 1000px;
    position: relative;
    bottom: 60px;

    #imagePerfil {
      width: 40px;
      height: 40px;
      margin: 8px 16px;
      background-image: url(${imageUser});
      background-size: 40px 60px;
      background-repeat: no-repeat;
      border-radius: 100px;
      display: inline-block;
    }

    .icons {
      width: 20px;
      height: 20px;
      margin: 20px 15px;
      color: white;
    }
  }
  #nomeUser {
    width: 10%;
    height: 20px;
    color: white;
    display: inline-block;
    position: relative;
    bottom: 82px;
  }
`;
export const Dashboard = styled.section`
  width: 100%;
  height: 680px;
  font-family: calibri;

  #article1 {
    width: 16%;
    height: 1500px;
    background-color: #161616;
    float: left;
    color: white;
  }

  #article1 ul div {
    width: 65px;
    height: 65px;
    margin: 30px 70px;
    background-image: url(${imageUser});
    background-size: 65px 90px;
    background-repeat: no-repeat;
    border-radius: 100px;
  }
  #article1 label {
    margin: 0px 0px 0px 45px;
  }

  #article1 ul hr {
    margin-top: 20px;
    border-color: #21201f;
  }

  #article1 ul li {
    margin: 30px 60px;
    list-style: none;
    text-align: center;
  }

  #arcticle1 .icons {
    margin: 6px 30px;
  }

  .link {
    color: inherit;
    text-decoration: none;
  }

  .link:hover {
    color: orange;
  }

  #article2 {
    width: 84%;
    height: 1000px;
    display: inline-block;
    float: right;
  }

  form {
    width: 90%;
    height: 915px;
    margin: 10px 62px;
    border-radius: 5px;
    padding: 20px;
  }

  #conteinerquestoes {
    width: 95%;
    height: 610px;
    border: 1px solid red;
    margin: 10px 23px;
    padding: 20px;
    border: solid 2px #dedede;
  }

  #conteinerquestoes .removerPergunta{ 
    float: right;
    font-size: 40px;
    transform: rotate(45deg);
    cursor: pointer;
    position: relative;
    bottom: 30px;
 
    
  }

  #conteinerquestoes label {
    padding-left: 25px;
    font-size: 19px;
    font-weight: bold;  
    
  }

  #respostas {
    width: 95%;
    height: 30px;
    margin: 10px 23px;
    border-radius: 2px;
    padding: 20px;
    border: 1px solid #dedede;
    font-size: 16px;
  }
  select{
    width: 95%;
    height: 40px;
    margin: 10px 23px;
    padding-left: 10px;
    border-radius: 2px;
    border: 1px solid #dedede;
    color: #838383;
    font-size: 16px;

  }
  .pergunta,
  .respostas {
    width: 95%;
    height: px;
    margin: 10px 23px;
    padding: 20px;
    font-size: 16px;
    border: 1px solid #dedede;
  }

  .respostas{
    height: 50px;
  }
  #respostas:focus {
    border: 1px solid#2B265E;
  }
  .pergunta:focus {
    border: 1px solid#2B265E;
  }
  .respostas:focus {
    border: 1px solid#2B265E;
  }
  #textoPergunta {
    margin-top: 50px;
  }
  textarea {
    font-family: Arial, Helvetica, sans-serif;
  }
  #textPergunta {
    margin-top: 5px;
  }

  #title {
    font-size: 20px;
    margin: 20px 25px;
  }
  #sublinhado {
    padding-left: 20px;
  }

  #add {
    float: right;
    width: 170px;
    height: 45px;
    border-radius: 20px;
    border: none;
    background-color: #2b265e;
    color: white;
    font-weight: bold;
    margin-top: 15px;
    margin-right: 20px;
    text-align: center;
  }

 .btnAddQuestao{
    width: 170px;
    height: 45px;
    background-color: #2b265e;
    border: none;
    color: white;
    font-size: 14.5px;
    margin-left: 22px;
  }

 .btnCadastroQuestoes{
    width: 170px;
    height: 45px;
    background-color: #2b265e;
    border: none;
    color: white;
    font-size: 14.5px;
    margin-right: 20px;
   float: right;
 }
`;

