import styled from "styled-components";
import ImageLogin from "./imageLogin.png";


export const StyleLogin = styled.section `

background-image: url(${ImageLogin});
background-size: 100% 657px;
background-repeat: no-repeat;
Width: 100%;
height: 657px;
position: fixed;

div{   
    position: relative;
    Width: 700px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    top: 80px; 
    left:250px;
}

form{
    background-color: #B92AAB;
    float: left;
    Width: 350px;
    height: 400px;
    color: white;
    border-radius:10px 0px 0px 10px;
    
    

}
section{
    margin: 75px 0px 0px 85px;
    line-height: 2.0;

}
article{
    float: right;
    Width: 350px;
    height: 400px;

}
img{
    width: 200px;
    height: 200px;
    margin: 75px 0px 0px 65px;

}
h4{
    margin-left: 40px;
}
.texto{
    width: 172px;
    height: 35px;
    border:none;
    border-radius: 15px;
    margin-top: 10px;
    }

.texto::placeholder{
    padding-left: 16px;
}
    
    button{
        width: 172px;
        height: 32px;
        background-color: white;
        border: none;
        border-radius: 15px;
        color: black;
        font-size: 12px;
        margin-top: 10px;
        font-weight: bold;
        
        
    }
    #checkBox{
        width: 15px;
        height: 15px;
        margin-left: 14px;
      
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