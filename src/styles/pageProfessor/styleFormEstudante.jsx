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
    height: 770px;
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
    height: 730px;
    display: inline-block;
    float: right;
 
  }

  #article3 {
    width: 930px;
    height: 600px;
    background-color: white;
    border-radius: 4px;
    text-align: center;
    border: 2px solid #dedede;
    margin: 80px 110px;
  }

  form {
    width: 800px;
    height: 600px;
    margin: 20px 80px;
  }

  #descricao,
  #nome,
  #nprocesso,
  #bairro,
  #password,
  #rua,
  #addEst,
  select {
    margin-top: 20px;
    width: 350px;
    height: 50px;
    border: solid 1px #dedede;
    border-radius: 4px;
    margin-right: 16px;
    padding: 10px;
    font-size: 15.5px;
    color: #808080;
   :focus{
    border: 2px solid #1b1464;
  }
  }

  #bairro,
  #addEst {
    width: 720px;
  }

  #rua{
    width: 720px;
  }

  #addEst {
    background-color: #1b1464;
    color: white;
  }

  #title {
    color: #1b1464;
    font-size: 20px;
    margin-top: 40px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
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
    margin-top: 20px;
    text-align: center;
  }
  table{
    width: 930px;
    height: 100px;
    margin: 30px 110px;

  }
  .tr1{
    width: 930px;
    background-color: #161616;
    font-size: 18px;
    color: white;
  }

 .titulodadosEstudantes{
   font-size: 17px;
   font-weight: bold;
   padding: 15px;
 }
 .dadosEstudantes{
  padding:15px 15px;
 }
 .iconsBtn{
   color: white;
 }

 #delete, #update{
   width: 40px;
   height: 40px;
   border-radius: 200px;
   background-color: red;
   border:none;
   margin:15px 20px;
 }

 #update{
  background-color: orange;
 }

 #cardPerfil1{
   width: 330px;
   height: 400px;
   border-radius: 5px;
   border: 1px solid #c5c5c5;
   float: left;

 }
#subCard{
   width: 330px;
   height: 150px;
   background-color: #161616;
   border-radius: 5px;
   float: left;
}
 #cardPerfil2{
   width: 450px;
   border-radius: 5px;
   float: right;
   margin-left: 12px;
 }
 h1{
   font-size: 20px;
 }
 #cardDados{
   text-align: center;
   margin-top: 200px;
   line-height: 2.0;
 }
  p{
    width: 400px;
    height: 35px;
    background-color: #d3d3d3;
    border-radius: 2px;
    margin-top: 10px;
    padding-left: 10px;
    font-size: 16px;
  }
  button{
    width: 400px;
    height: 35px;
    border-radius: 2px;
    margin-top: 10px;
    border: none;
    background-color: #1b1464;
    color: white;
    font-size: 16px;

  }

  #photoPerfil{
    width: 70px;
    height: 70px;
    border-radius: 200px;
    background-image: url(${imageUser});
    background-repeat: no-repeat;
    background-size: 70px 90px;
    position: relative;
    margin: 100px 130px;
  }
  
`;
