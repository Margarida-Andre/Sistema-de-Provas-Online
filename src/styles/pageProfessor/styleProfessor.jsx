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
      width: 88px;
      height: 46px;
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
  height: 1045px;
  font-family: calibri;

  #article1 {
    width: 14%;
    height: 1045px;
    background-color: #161616;
    float: left;
    color: white;
  }

  .linkto{
    text-decoration: none;
  }

  #article1 ul div {
    width: 65px;
    height: 65px;
    margin: 30px 60px;
    background-image: url(${imageUser});
    background-size: 65px 90px;
    background-repeat: no-repeat;
    border-radius: 100px;
  }
  #article1 label {
    margin: 0px 0px 0px 38px;
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
    width: 86%;
    height: 1045px;
    background-color: #dedede;
    display: inline-block;
    float: right;
  }

  #article2 ul {
    width: 96%;
    height: 80px;
    margin: 30px 6px;
  }

  #article2 ul li {
    width: 225px;
    height: 80px;
    margin-left: 44.1px;
    border-radius: 2px;
    background-color: white;
    display: inline-block;
  }

  #article2 ul li .fontAwesome {
    width: 70px;
    height: 80px;
    float: right;
  }

  #fontAwesome1 {
    background-color: #2b265e;
  }

  #fontAwesome2 {
    background-color: #fbb03b;
  }

  #fontAwesome3 {
    background-color: #b5145c;
  }

  #fontAwesome4 {
    background-color: #70145f;
  }

  #article2 ul li .fontAwesome .icons {
    margin: 30px 25px;
    color: white;
  }

  #article2 ul li .total {
    width: 150px;
    height: 80px;
    float: left;
  }

  #article2 ul li .total .paragrafos {
    margin: 20px 25px;
  }
  #article2 ul li .total .paragrafos .paragrafTotal {
    margin-top: 5px;
    font-weight: bold;
  }

  #article2 #SobreClass {
    width: 100%;
    height: 466px;
  }

  #article2 #SobreClass #calendarioProvas {
    width: 26%;
    height: 462px;
    margin-left: 52px;
    background-color: white;
    border-radius: 5px;
    display: inline-block;
    position: relative;
    bottom: 160px;
  }

  #article2 #SobreClass #ul {
    width: 260px;
    height: 300px;
    margin-left: 20px;
    padding-top: 20px;
  }

  #article2 #SobreClass #ul input {
    width: 110px;
    height: 30px;
    background-color: #2b265e;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    margin: 10px 75px;
  }

  #article2 #SobreClass li {
    list-style: none;
    width: 260px;
    height: 75px;
  }
  #article2 #SobreClass li .icon {
    color: #f8b03a;
  }
  #article2 #SobreClass #ul li h1 {
    font-size: 17px;
  }
  #article2 #SobreClass li #conteudoLeft {
    width: 90px;
    height: 35px;
    float: left;
  }

  #article2 #SobreClass li #conteudoRight {
    width: 80px;
    height: 30px;
    float: right;
    background-color: #e5e5e5;
    border-radius: 15px;
    text-align: center;
  }

  #article2 #SobreClass li #conteudoRight select {
    width: 85px;
    height: 30px;
    background-color: #e5e5e5;
    color: #707070;
    border-radius: 15px;
    border: none;
    line-height: 1.5;
    font-weight: bold;
    padding: 4px;
  }

  #article2 #SobreClass li #conteudoLeft2 {
    width: 60px;
    height: 50px;
    float: left;
  }

  #article2 #SobreClass li #conteudoRight2 {
    width: 190px;
    height: 50px;
    background-color: #dedede;
    border-radius: 3px;
    float: right;
  }
  #article2 #SobreClass li #conteudoRight2 #disciplina {
    padding-left: 15px;
  }

  #article2 #SobreClass li #conteudoLeft2 label {
    line-height: 1.5;
    color: #4c4c4c;
  }

  #article2 #SobreClass li #conteudoRight2 p {
    line-height: 1.5;
  }
  #article2 #SobreClass li #conteudoRight2 #paragrafHorarioProva {
    color: #4c4c4c;
    font-size: 15px;
  }
  #article2 #SobreClass li #conteudoRight2 #paragrafDisciplina {
    font-weight: bold;
    color: #707070;
  }

  #article2 #SobreClass #ul li #hr {
    border-right: 5px solid #fbb03b;
    height: 50px;
    position: relative;
    bottom: 50px;
    margin-right: 2px;
  }

  #article2 #SobreClass #provaProgress {
    width: 26%;
    height: 461px;
    margin-left: 15px;
    background-color: white;
    border-radius: 5px;
    display: inline-block;
    position: relative;
    bottom: 4px;
  }

  #article2 #SobreClass #provaProgress #conteudoRight {
    width: 50px;
    height: 50px;
    border-radius: 200px;
  }

  #article2 #SobreClass #provaProgress #conteudoRight .icons {
    margin-top: 13px;
    color: #fbb03b;
  }
  #article2 #SobreClass #provaProgress #conteudoRight2 {
    float: left;
    background-color: white;
    margin-top: 12px;
  }

  #article2 #SobreClass #provaProgress #conteudoLeft2 {
    float: right;
    border: 4px solid #fbb03b;
    border-radius: 100px;
    margin-top: 15px;
    width: 48px;
    height: 48px;
    padding: 10px 0px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
  }

  #article2 #SobreClass #turmas {
    width: 36.9%;
    height: 460px;
    margin-left: 15px;
    background-color: white;
    border-radius: 5px;
    display: inline-block;
    position: relative;
    bottom: 16px;
  }

  #article2 #SobreClass #turmas div {
    margin: 20px 20px;
  }

  #article2 #SobreClass #turmas div ul {
    width: 90%;
    height: 120px;
    margin-top: 10px;
  }

  #article2 #SobreClass #turmas div ul li {
    width: 102px;
    height: 120px;
    color: white;
    display: inline-block;
    margin-left: 10px;
    border-radius: 10px;
  }

  #article2 #SobreClass #turmas div ul #turmaA {
    background-color: #2b265e;
  }

  #article2 #SobreClass #turmas div ul #turmaB {
    background-color: #fbb03b;
  }

  #article2 #SobreClass #turmas div ul #turmaC {
    background-color: #b5145c;
  }

  #article2 #SobreClass #turmas ul li .divIcons {
    margin: 10px 60px;
    width: 35px;
    height: 35px;
    border-radius: 100px;
  }
  #article2 #SobreClass #turmas ul li #divIcons1 {
    background-color: white;
  }

  #article2 #SobreClass #turmas ul li #divIcons2 {
    background-color: white;
  }
  #article2 #SobreClass #turmas ul li #divIcons2 #iconTurmaB {
    color: #fbb03b;
  }

  #article2 #SobreClass #turmas ul li #divIcons3 {
    background-color: white;
  }

  #article2 #SobreClass #turmas ul li #divIcons3 #iconTurmaC {
    color: #b5145c;
  }
  #article2 #SobreClass #turmas ul li .icons {
    margin: 8px 7px;
    color: #2b265e;
  }

  #article2 #SobreClass #turmas ul li P {
    margin: 20px 10px;
  }

  #article2 #turmas input {
    width: 110px;
    height: 30px;
    background-color: #2b265e;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    margin-left: 150px;
  }

  #article2 #sessao3 {
    width: 100%;
    height: 400px;
    margin-top: 11px;
  }

  #article2 #sessao3 #grafico {
    width: 53.5%;
    height: 380px;
    background-color: white;
    display: inline-block;
    margin-left: 50px;
    border-radius: 5px;
    position: relative;
    bottom: 5px;
  }

  #article2 #sessao3 #grafico div {
    margin: 20px 20px;
  }
  #article2 #sessao3 #alunosDestacados {
    width: 37%;
    height: 380px;
    display: inline-block;
    margin-left: 15px;
    border-radius: 5px;
    background-color: white;
    position: relative;
    bottom: 23px;
  }

  #article2 #sessao3 #alunosDestacados div {
    margin: 20px 20px;
  }
  #article2 #sessao3 #alunosDestacados ul {
    width: 100%;
    height: 200px;
  }

  #article2 #sessao3 #alunosDestacados ul li {
    width: 31%;
    height: 200px;
    display: inline-block;
    margin-left: 5px;
    text-align: center;
    border-radius: 5px;
    color: white;
  }

  #article2 #sessao3 #alunosDestacados ul #estudante1 {
    background-color: #2b265e;
  }

  #article2 #sessao3 #alunosDestacados ul #estudante2 {
    background-color: #fbb03b;
  }

  #article2 #sessao3 #alunosDestacados ul #estudante3 {
    background-color: #b5145c;
  }

  #article2 #sessao3 #alunosDestacados ul li #photo {
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background-image: url(${imageUser});
    background-size: 60px 70px;
    background-repeat: no-repeat;
    margin-left: 32px;
  }

  #article2 #sessao3 #alunosDestacados ul li input {
    width: 110px;
    height: 35px;
    border-radius: 10px;
    margin-top: 10px;
    border: none;
    font-weight: bold;
  }

  #article2 #sessao3 #alunosDestacados ul li #nota {
    font-weight: bold;
    font-size: 16px;
  }

  #article2 #sessao3 #alunosDestacados ul li #first {
    background-color: white;
    color: #2b265e;
  }

  #article2 #sessao3 #alunosDestacados ul li #second {
    background-color: white;
    color: orange;
    font-weight: bold;
  }

  #article2 #sessao3 #alunosDestacados ul li #third {
    background-color: white;
    color: #b5145c;
  }

  #article2 #sessao3 #alunosDestacados ul #seeAll {
    width: 110px;
    height: 30px;
    background-color: #2b265e;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    margin: 30px 150px;
  }
`;

export const Lista = styled.section`
  width: 100%;
  height: 100%;

  .sect {
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
    width: 790px;
    height: 470px;
    background-color: white;
    border-radius: 4px;
    padding: 20px;
    position: relative;
  }

  form {
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

  button {
    margin-top: 15px;
    width: 350px;
    height: 50px;
    border: solid 1px #dedede;
    border-radius: 4px;
    margin-right: 16px;
    padding: 10px;
    font-size: 15.5px;
    color: #808080;
  }

  button {
    background-color: #1b1464;
    color: white;
  }

  button:hover {
    background-color: white;
    border: solid 1.5px #1b1464;
    color: #1b1464;
  }
  table {
    width: 700px;
    border: 1px;
  }
`;
