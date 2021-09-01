import styled from "styled-components";
import backgroundFooter from "../../../images/worlMap.png";

export const Footer = styled.section`
  width: 100%;
  height: 400px;
  background-color: #161616;
  color: white;
  line-height: 2;
  background-image: url(${backgroundFooter});

 

  div {
    margin-left: 110px;
    font-size: 18px;
    display: flex;
  }
  ul {
    display: inline-block;
    list-style: none;
    padding: 130px 100px;
  }


`;

export const Rodape = styled.footer`
    width: 100%;
    height: 80px;
    background-color: black;
    color: #818181;
    text-align: center;
    padding-top: 35px;
    font-size: 17px;

`;
