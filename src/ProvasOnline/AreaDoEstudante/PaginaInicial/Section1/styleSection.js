import styled from "styled-components";
import image from "../images/banner6.jpeg";

export const Style = styled.div `

background-color: white;
background-image: url(${image});
background-repeat: no-repeat;
background-size: 100% 650px;
width: 100%;
height: 650px;
color: black;
font-family: calibri;


article{
    position: relative;
    top:310px; 
    text-align: center;
    line-height: 1.5;
    
}
h1{
    font-size: 45px;
}
p{
    font-size: 17px;
    font-weight: bold;
}

#setaEsquerda{
    width:4%;
    height:50px;
    background-color: #B92AAB;
    display:inline-block;
    float: left;
    border: 1px solid white;
    border-radius: 2px;
    transition: 3s;
}

#setaEsquerda: hover{
    background-color: black;
    color: #B92AAB;
    transition: 3s;
}


#bemVindo{
    width:60%;
    height:50px;
    display:inline-block;
}

#setaDireita{
    width:4%;
    height:50px;
    background-color: #B92AAB;
    display:inline-block;
    float:right;
    border: 1px solid white;
    border-radius: 2px;
    transition: 3s;

}
#setaDireita: hover{
    background-color: black;
    color: #B92AAB;
    transition: 3s;
}

.icon{
    color:white;
    margin-top: 11px;
}


button{
    width: 150px;
    height: 40px;
    background-color: #B92AAB;
    border: 1px solid #B92AAB;
    border-radius: 3px;
    color: white;
    font-size: 17px;
    margin-top: 15px;
    transition: 3s;
}

button: hover{
    background-color: black;
    color: #B92AAB;
    transition: 3s;
    
}

`;