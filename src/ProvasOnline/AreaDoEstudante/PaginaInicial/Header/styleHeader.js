import styled from "styled-components";


export const Style = styled.header `

    background-color: #B92AAB;
    width: 100%;
    height: 65px;
    color: white;
    font-family: calibri;
    font-weight: bold;
    font-size: 18px;
    position: fixed;
    z-index: 5000;
  
    
    img{
        width: 79px;
        height: 49px;
        margin: 10px 15px 0px 60px;
        position: fixed;

    }
    #ListaHeader{
        margin: 0px 0px 10px 537px;
        

    }

    .listHeader{
        display: inline-block;
        margin: 20px 0px 0px 30px;
        transition: 1s;
           
    }

    .listHeader: hover{
        color: black;

    }
    
    .LA{
        background-color: white;
        width: 170px;
        height: 75px;
        color: #B92AAB;
        margin: 8px 0px 0px 850px;
        padding-top: 6px;
        visibility: hidden;
        transition: 5s;
       

    }
    #cadastrar: hover + .LA{
        visibility: visible;
        


    }

    .textoLink{
        text-decoration: none;
        color: inherit;
    }
    
   
    #listaRecursos{
        list-style: none;
        background: white;
        width: 150px;
        height: 100px;
        color: black;
        margin: 30px 50px 0px 0px;
    }

    button{
        background: white;
        color: #B92AAB;
        width: 150px;
        height: 50px;
        border: none;
        border-radius: 5px ;
        font-weight: bold;
        font-size: 15px;
        
    }

    a{
        color:inherit;
    }

  
    

    

`; 