import styled from "styled-components";


export const Style = styled.header `

    background-color: #B92AAB;
    width: 100%;
    height: 85px;
    color: white;
    font-family: sans-serif;
    font-weight: bold;
    position: fixed;
    z-index: 5000;
  
    
    img{
        width: 83px;
        height: 51px;
        margin: 18px 15px 0px 60px;
        position: fixed;

    }
    #ListaHeader{
        margin: 0px 0px 10px 300px;
        

    }

    .listHeader{
        display: inline-block;
        margin: 36px 15px 0px 40px;
           
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
    
    .listAcesso{
        list-style-type: none;
        line-height: 2.0;
        margin: 0px 0px 0px 13px;
        
        
        
        
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

  
    

    

`; 