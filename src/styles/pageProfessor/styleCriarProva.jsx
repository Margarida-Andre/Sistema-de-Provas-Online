import styled from 'styled-components';
import imageUser from '../../images/iconProf.jpg';


export const Header = styled.header`
width: 100%;
height: 60px;
background-color: #2B265E;


#logo{

    width: 10%;
    height: 59px;
    display: inline-block; 
    

    img{
        width: 100px;
        height: 50px;
        margin-left: 20px;
        position: relative;
        top: 10px; 
         
    }

}

#search{
    width: 15%;
    height: 26px;
    margin-left: 130px;
    border-radius: 20px;
    border: none;
    position: relative;
    bottom: 13px;
    padding: 12px;
    visibility:hidden;

}

#itemsUser{
    width: 13%;
    height: 59px;
    display: inline-block; 
    margin-left: 1000px;
    position: relative;
    bottom: 60px;
    

    #imagePerfil{
        width: 40px;
        height: 40px;
        margin: 8px 16px;
        background-image: url(${imageUser});
        background-size: 40px 60px;
        background-repeat: no-repeat;
        border-radius: 100px;
        display: inline-block;
  
    }

    .icons{
        width: 20px;
        height: 20px;
        margin: 20px 15px;
        color: white;
    }
}
    #nomeUser{
        width: 10%;
        height: 20px;
        color: white;
        display: inline-block; 
        position:relative;
        bottom: 82px;
        
        
    }
 
`;
export const Dashboard = styled.section`
width: 100%;
height: 1000px;
font-family: calibri;


#article1{
    width: 16%;
    height: 1010px;
    background-color: #161616;
    float: left;
    color: white;
   
}

#article1 ul div{
    width: 65px;
    height: 65px;
    margin: 30px 70px;
    background-image: url(${imageUser});
    background-size: 65px 90px;
    background-repeat: no-repeat;
    border-radius: 100px;
}
#article1 label{
    margin: 0px 0px 0px 45px;
}

#article1 ul hr{
    margin-top: 20px;
    border-color: #21201F;
}


#article1 ul li{
    margin: 30px 60px;
    list-style: none;
    text-align:center;
}


#arcticle1 .icons{
    margin: 6px 30px;
}

.link{
    color: inherit;
    text-decoration: none;
}

.link:hover{
    color: orange;
}


#article2{
    width: 84%;
    height: 1010px;
    display: inline-block;
    float: right;
}

input{
    float: right;
    width: 170px;
    height: 45px;
    border-radius: 20px;
    border: none;
    background-color: #2B265E;
    color: white;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 30px;
    
}

input:hover{
    background-color: orange;
}

#divCriarProva{
    width: 92%;
    height: 671px;
    margin: 40px 50px;
     

}

h3{
    margin-top: 30px;
}

#ilustracaoProve{
    width: 1000px;
    height: 550px;
}

table{
    width: 1000px;
    height: 100px;
    margin: 30px 20px;

  }
  .tr1{
    width: 930px;
   
    background-color: #161616;
    font-size: 18px;
    color: white;

  }

 .titulodadosEstudantes{
   font-size: 17px;
   font-weight: bold;
   padding: 15px;
 }
 .dadosEstudantes{
  padding:15px 15px;
 }
 .iconsBtn{
   color: white;
 }

 #delete, #update{
   width: 40px;
   height: 40px;
   border-radius: 200px;
   background-color: red;
   border:none;
   margin:15px 20px;
 }

 #update{
  background-color: orange;
 }

`;

export const TitleProva = styled.section`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    padding: 100px 335px;
    
  // visibility: hidden;

    article{
    width: 745px;
    height: 389px;
    background-color: white;
    }

    .divFields{
        display: flex;
    }

    .divFields div{
        margin-left: 15px;
    }

    .Form{
        padding: 45px;
    }

    h1{
        font-size: 23px;
    }
    label{
        padding-top: 300px; 
    }

    input{
        margin-top: 20px; 
        width: 310px;
        height: 50px;
        border: 1px solid #dedede;
        border-radius: 4px;
        padding: 9px;
        font-size: 15.5px;
        color: #808080;
      
    }

    button{
        width: 316px;
        height: 55px;
        background-color: red;
        border: none;
        display: inline-block;
        color: white;
        font-size: 15.5px;
        margin-top: 38px;
    }

    #cancel{
        background-color: #DEDEDE;
        color: black;
        margin-left: 18px;

        :hover{
            background-color: #2B265E;
            color: white;
        }
    }

    #start{
        background-color: #2B265E;

        :hover{
            background-color: #fbb03b;
        }
    }
    .Form-Error{
        color: red;

    }
`;

export const  TipoProva = styled.section`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    padding: 100px 300px;
    visibility: hidden;

    article{
    width: 700px;
    height: 270px;
    background-color: white;
    text-align: center;
  
    }

    #article2{
        display: flex; 
        padding: 10px 20px;
    }

    div{
        width: 310px;
        height: 150px;
        border: 1px solid #DEDEDE;
        text-align: center;
        padding: 40px;
        margin-top: 35px;
        margin-left: 12px;
        font-size: 18px;
    }
    div:hover{
        background-color: #2B265E;
        color: white;
    }

    img{
        width: 50px;
        height: 50px;
    }

    h1{
        padding-top: 50px;
        font-size: 23px;
    }
    .link{
        text-decoration: none;
        color:black;
    }
`;
