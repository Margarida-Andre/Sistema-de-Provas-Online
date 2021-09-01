import styled from "styled-components";
import bannerImage from "../../images/BannerDef.jpg";
import  Slide from "../../images/prof.jpg";
import FundoForm from "../../images/banner2.jpg";



export const Banner = styled.section`
  width: 100%;
  height: 657px;
  background-image: url(${bannerImage});
  background-size: 100% 657px;
  background-repeat: no-repeat;
  line-height: 2;
  color: white;

  h1 {
    font-size: 35px;
  }
  article {
    padding: 290px 0px 0px 70px;
  }

  p{
    font-size: 18px;
  }

  button {
    margin: 10px 5px;
    width: 160px;
    height: 45px;
    color: white;
    border: 1px solid white;
    border-radius: 2px;
    font-weight: bold;
    transition: all 0.5s;
    font-size: 15px;
  }

  #btn1 {
    background-color: #fbb03b;
    color: #1b1464;
  }
  #btn1:hover {
    background-color: #1b1464;
    color: white;

  }

  #btn2 {
    background-color: transparent;
  }

  #btn2:hover {
    background-color: #1b1464;
    color: white;

  }
`;

export const SobreSistema = styled.section`
  width: 100%;
  height: 240px;
  text-align: center;
  padding-top: 80px;
  line-height: 1.7;
  font-size: 17px;

  article {
    width: 100%;
    height: 390px;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .cards {
    width: 450x;
    height: 315px;
    padding: 30px;
    text-align: justify;
    background-color: #1b1464;
    border: solid 1px #808080;
    color: white;
    cursor: pointer;
    font-size: 18px;
  }

  #h1 {
    font-size: 27px;
    text-align: center;
  }

  h1{
    text-align: center;
  }

  img {
    width: 70px;
    height: 70px;
    background-color: #1b1464;
  }

  #smileIcon {
    width: 50px;
    height: 50px;
    margin-top: 27px;
  }

  #easyIcon {
    width: 80px;
    height: 80px;
  }

  #guideIcon {
    margin-top: 10px;
  }

  p {
    margin-top: 15px;
    font-size: 18px;
  }

  div:hover {
    transform: scale(1.07);
  }
`;

export const Recursos = styled.section`
  width: 100%;
  height: 830px;
  margin-top: 350px;
  padding-top: 20px;
  line-height: 2;
  font-size: 17px;

  #p1 {
    text-align: center;
    font-size: 18px;
  }

  .p2 {
    text-align: center;
    font-size: 18px;
  }

  .recursosIcon {
    text-align: center;
  }

  article {
    width: 85%;
    height: 330px;
    margin: 65px 160px;
  }
  div {
    width: 30%;
    display: inline-block;
    padding: 30px 22px;
    text-align: center;
    margin: 15px 6px;
    border: 2px solid #e2e2e2;
    background-color: #1b1464;
    color: white;

    :hover {
      background-color: black;
      color: white;
    }
  }

  .h1Recursos {
    text-align: center;
    font-size: 20px;
  }

  #h1RecursosTitle {
    margin-left: 476px;
    font-size: 28px;
  }

  img {
    width: 70;
    height: 70px;
  }
`;

export const Usuarios = styled.section`
  width: 100%;
  height: 500px;
  line-height: 1.5;
  margin-top: 0px;
  font-size: 17px;

  div {
    width: 100%;
    height: 500px;
    padding-left: 100px;
    margin-top: 35px;

  }


  h1 {
    text-align: center;
    color: black;
    padding-top: 60px;
    font-weight: bold;

  }

  img {
    width: 230px;
    height: 230px;
    
  }
  img:hover{
    transition: all 0.5s;
    
  }
  p {
    width: 230px;
    height: 300px;
    text-align: center;
    background-color: dedede;
    transition: all 0.4s;
    background-color: #dedede; 
    display: inline-block;
    font-weight: bold;
    margin: 40px 30px;
  
   
  }
  p:hover {
    background-color: #fbb03b; 
    transform: rotate(3deg);
  
  }
`;

export const ProfessorModerno = styled.section`
  width: 100%;
  height: 625px;
  color: white;
  font-size: 17.5px;


  .slides {
    width: 100%;
    height: 625px;
    padding: 80px 0px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${Slide});
  }

  .each-slide{
  text-align: center;
  line-height: 2.0;
  font-size: 18px;

  }

  .conteudo{
    width: 50%;
    height: 300px;
    background-color: black;
    padding: 50px 40px;
    margin: 50px 330px;
    border: 1px solid  black;
    border-radius: 5px;
  
  }
  li{
    list-style: none;
  }
  h1{
    font-size: 30px;
  }

  h3{
    text-align: center;
    color: orange;
  }

  .icon {
    font-size: 35px;
    color: orange;
  }
  ul{
    margin-top: 10px;
  }

`;

export const Cadastrar = styled.section`
  width: 100%;
  height: 400px;
  line-height: 2;
  margin-top:  15px;
  padding-top: 30px;

  article {
    width: 50%;
    height: 370px;
    float: left;
    margin-left: 150px;
    padding-top: 30px;
    text-align: justify;
    
  }
  img{
    float: right;
    margin-right: 40px;
  }

  h1 {
    padding-top: 40px;
    font-size: 27px;
  }
 

  button {
    margin-top: 30px;
    width: 160px;
    height: 45px;
    color: white;
    border: 2px solid #1b1464;
    border-radius: 2px;
    font-weight: bold;
    transition: all 2s;
    background-color: #1b1464;
  }

  button:hover {
    background-color: #fbb03b;
    color: #1b1464;
    border: 2px solid #1b1464;
    transition: 2s;
  }
  p{
    font-size: 18px;
  }
`;

export const FCadastrar = styled.section`
  width: 100%;
  height: 660px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  position: relative;
  bottom: 3437px;
  overflow: hidden;
  visibility: hidden;
`;

export const FaleConnosco = styled.section`
  width: 100%;
  height: 750px;
  background-color: #dedede;

  form {
    width: 750px;
    height: 500px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${FundoForm});
    background-size: 750px 500px;
    background-repeat: no-repeat;
    margin: 30px 320px;
    padding: 75px 59px;
  }
  p {
    text-align: center;
    padding-top: 8px;
    font-size: 18px;
  }

  h1 {
    text-align: center;
    padding-top: 80px;
    font-size: 27px;
  }

  input,
  textarea {
    margin-top: 20px;
    width: 300px;
    height: 50px;
    border: solid 1px #dedede;
    border-radius: 3px;
    margin-right: 16px;
    padding: 10px;
    font-size: 15.5px;
    color: #808080;
  }

  textarea::placeholder {
    font-family: Arial, Helvetica, sans-serif;
  }
  #mensagem {
    width: 616px;
    height: 200px;
  }

  #enviar {
    width: 616px;
    background-color: #1b1464;
    color: white;
  }

  #enviar:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  }
`;
