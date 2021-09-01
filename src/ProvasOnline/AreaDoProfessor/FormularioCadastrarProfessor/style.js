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
    height: 480px;
    background-color: white;
    border-radius: 10px;
    top: 105px; 
    left:350px;
}

form{
    background-color: #2F2D30;
    float: left;
    Width: 325px;
    height: 480px;
    color: white;
    border-radius:10px 0px 0px 10px;
    
   
}
section{
    margin: 30px 0px 0px 40px;
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
    margin: 135px 0px 0px 61px;

}
h3{
    margin:0px 0px 15px 40px;
}
input{
    width: 240px;
    height: 34px;
    border:1px solid #BBBBBB;
    border-radius: 4px;
    margin-top: 10px;
    background-color: #2F2D30;
    }
    
    label{
        margin-top: 10px;
    }

.texto::placeholder{
    padding-left: 16px;
    color: #BBBBBB;
}
    
    button{
        width: 240px;
        height: 40px;
        background-color: #770877;
        border: none;
        border-radius: 4px;
        color: white;
        font-family: Arial;
        font-size: 14px;
        margin-top: 22px;
        font-weight: bold;
        
        
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