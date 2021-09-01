import styled from "styled-components";
import ImageLogin from "./imageLogin.png";


export const StyleLogin = styled.section `

background-image: url(${ImageLogin});
background-size: 100% 700px;
background-repeat: no-repeat;
Width: 100%;
height: 700px;
position: fixed;
font-family: sans-serif;

div{   
    position: relative;
    Width: 650px;
    height: 460px;
    background-color: white;
    border-radius: 10px;
    top: 105px; 
    left:350px;
}

form{
    background-color: #2F2D30;
    float: left;
    Width: 325px;
    height: 460px;
    color: white;
    border-radius:10px 0px 0px 10px;
    
   
}
section{
    margin: 20px 0px 0px 40px;
    line-height: 2.0;

}
article{
    float: right;
    Width: 325px;
    height: 480px;

}
img{
    width: 200px;
    height: 200px;
    margin: 40px 0px 0px 61px;

}
h4{
    margin:70px 0px 15px 90px;
}
input{
    width: 210px;
    height: 35px;
    border:1px solid #BBBBBB;
    border-radius: 4px;
    margin-top: 20px;
    background-color: #2F2D30;
    padding-left: 11px;
    color: #BBBBBB;
    }
    
    select{
        width: 210px;
        height: 35px;
        border:1px solid #BBBBBB;
        border-radius: 4px;
        margin-top: 10px;
        background-color: #2F2D30;
        color: #BBBBBB;
        padding-left: 6px;
    }
    
    label{
        margin-top: 10px;
    }

.texto::placeholder{
  
    color: #BBBBBB;
}

button{
    width: 210px;
    height: 36px;
    background-color: #770877;
    border-radius: 3px;
    border: none;
    color: white;
    font-size: 17px;
    margin-top: 15px;
    transition: 3s;
}

button: hover{
    background-color: white;
    color: #770877;
    transition: 3s;
    
}
   
      
    }
    p{
        margin-top: 5px;
    }
    .label1{
        margin-left: 5px;
        
        

    }
    .label2{
        margin-left: 8px;
        
    }





`;