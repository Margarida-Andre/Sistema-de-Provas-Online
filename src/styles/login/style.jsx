import styled from 'styled-components';
import BackgroundLogin from '../../images/BackgroundLLogin.jpg';


export const Login = styled.section`

width: 100%;
height: 657px;
background-image: url(${BackgroundLogin});
background-size: 100% 657px;
background-repeat: no-repeat;
position: fixed;

article{
    width: 45%;
    height: 450px;
    background-color: white;
    margin: 110px 360px;
}

#div1{
    width: 50%;
    height: 450px;
    display: inline-block;
    float: left;
    padding: 80px 10px;
    line-height: 2.0;
    text-align: center;
    background-color: #DDDDDD;
    
}
.input{
    width: 240px;
    height: 33px;
    margin-top: 15px;
    padding-left: 10px;
    border: none;
    border-radius: 2px;
}

#submit{
    background-color: #1B1464;
    color: white;
    border: none;
    margin-bottom: 8px;
    font-weight: bold;
    transition: 2s;
}

#submit:hover{
     background-color: #D4145A;
     transition: 2s;

}

#checkBox{
    margin-right: 5px;
}

#div2{
    width: 50%;
    height: 450px;
    float: right;
    
}

#label2{
    margin-left: 10px;
}

img{
    margin-top: 100px;
    width: 308px;
    height: 220px;

}



`;