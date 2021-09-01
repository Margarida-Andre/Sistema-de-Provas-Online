import styled from "styled-components";
import estudante from "../../images/iconProf.jpg";

export const Header = styled.header`
  width: 100%;
  height: 140px;
  background-color: #2b265e;

  h4 {
    color: white;
    padding: 32px 30px;
    float: left;
    line-height: 1.5;
    
  }
  div{
    width: 50px;
    height: 50px;
    float: right;
    margin: 20px 25px 0px 0px;
    background-image: url(${estudante});
    background-size: 53px 68px;
    background-repeat: no-repeat;
    border-radius: 100px;
  }
`;

export const Body = styled.section`
  width: 100%;
  height: 517px;
  background-color: #7990ff;

  form {
    width: 80%;
    height: 530px;
    background-color: white;
    margin-left: 144px;
    position: relative;
    bottom: 40px;
  }
 form > div {
    padding: 12px 0px 12px 0px;
    margin-left: 345px;
    font-weight: bold;
    font-size: 14.5px;
  }
  form> div> label {
    margin-left: 50px;
    font-size: 14px;
  }
  form> div> label:hover{
    padding: 10px;
  background-color:#2b265e;
  color: white;
}
  #recomendacoes {
    width: 100%;
    height: 448px;
  }

  form > article > #divRec {
    width: 100%;
    height: 440px;
    line-height: 2;
    text-align: justify;
    padding: 50px 50px;
    
   
  }
  form > article > #divPerg{
    width: 100%;
    height: 440px;
    line-height: 1.5;
    text-align: justify;
    padding: 5px 50px;

  }

  form > article > #divPerg> input{
    width: 130px;
    height: 40px;
    color: white;
    border-radius: 2px;
    border: none;
    float: right;
    background-color: #2b265e;

  }

  form > article > #cabecalhoProva{
    
    padding: 20px 50px;

  }

  form > article > #cabecalhoProva> h4{ 
    margin-top: 2px;
  }

  form > article > #cabecalhoProva> h4> label{ 
   color: red;

}

  form > article > #divPerg > div {
    margin-top: 25px;

  }
  form > article > #divPerg > div> #perg {
    font-weight: bold;

  }

  form > article > #divPerg > div > input {
    margin-top: 10px;

  }

  form > article > #divPerg > div> label{
    margin-left: 5px;

  }

  article> div> #goodLuck{
    float: right;
    margin: 120px 9px;
    font-weight: bold;
  }
  h1 {
    font-size: 19px;
    line-height: 2.5;
  }

  #perguntas {
    width: 100%;
    height: 448px;
    background-color: white;
    position: relative;
    bottom: 448px;
  }
`;
