import styled from "styled-components";
import Image1 from "../images/ITEL.png";
import Image2 from "../images/isutic.jpeg";
import Image3 from "../images/isptec.png";


export const Style5 = styled.div`

width: 100%;
height: 450px;
font-weight: bold;

li{
    color:#7A7979;
    display: inline-block;
    font-size: 16px;
    margin: 10px 25px;
    text-align: center;
    
}
.imageCircle1{
    width: 270px;
    height: 150px;
    background-image: url(${Image1});
    background-position: center;
    background-size: 270px 270px;
    background-repeat: no-repeat;
    margin-top: 5px;
    
}

.imageCircle2{
    width: 190px;
    height: 140px;
    background-image: url(${Image2});
    background-position: center;
    background-size: 190px 140px;
    background-repeat: no-repeat;
    margin-top: 5px;
}

.imageCircle3{
    width: 170px;
    height: 150px;
    background-image: url(${Image3});
    background-position: center;
    background-size: 170px 190px;
    background-repeat: no-repeat;
    margin-top: 5px;
    
}
.imageCircle4{
    width: 170px;
    height: 150px;
    background-image: url(${Image3});
    background-position: center;
    background-size: 170px 190px;
    background-repeat: no-repeat;
    margin-top: 5px;
    
}

.imageCircle5{
    width: 170px;
    height: 150px;
    background-image: url(${Image3});
    background-position: center;
    background-size: 170px 190px;
    background-repeat: no-repeat;
    margin-top: 5px;
    
}
ul{
    position: absolute;
    margin: 50px 0px 0px 45px;
    
}
h2{
    text-align: center;
    padding-top: 50px;
    color: black;
    font-size: 22px;
}

#setas{
    float:right;
    width:10%;
    height:50px;
    margin-right: 100px;
}
.seta{
    width:40%;
    height:50px;
    background-color: white;
    display:inline-block;
    display: inline-block;
    border-radius: 2px;
    margin-right: 10px;
    transition: 3s;
}

.seta: hover{
    background-color: #B92AAB;
}

.icon{
    color: black;
    margin-top: 11px;
    text-align: center;
    color:#7A7979;
    transition: 3s;
}

.icon: hover{
    color: black;
}

#p1{
    text-align: center;
    margin-top: 20px;
    color:#7A7979;
}

`;