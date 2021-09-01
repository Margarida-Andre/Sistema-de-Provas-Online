import styled from "styled-components";
import Image from "../../images/iconProf.jpg";

export const Header = styled.header`
width: 100%;
height: 60px;
background-color: #2B265E;


#logo{

    width: 10%;
    height: 59px;
    display: inline-block; 
    

    img{
        width: 88px;
        height: 46px;
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
        background-image: url(${Image});
        background-size: 40px 55px;
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
export const Style = styled.section `

width: 100%;
height: 936px;
background-color: #7990ff;



#dashboard{
width: 300px;
height: 600px;
color: white;
float: left;

}


.listaNavegacao: hover{
    color: #2B265E;

}

#circulo{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: 100px 130px;
    margin: 25px 0px 0px 100px; 
   
}

#article1{
    width: 270px;
    height: 250px;
    background-color: white;
    position: relative;
    top: 10px;
    left: 20px;
    
}
.link{
    text-decoration: none;
    color: inherit;

}

h4{
    position: relative;
    color: #AAAAAA;
    margin: 20px 0px 0px 15px;
    padding-top: 20px;


}

.listaNavegacao{
    color: black;
    list-style: none;
    margin: 20px 0px 0px 15px;
    color: #2B265E;
}


#disciplinas{
    width: 600px;
    height:  700px;
    background-color: white;
    display: inline-block;
    margin: 30px 0px 0px 10px;
    

}

#listaDisciplinas{
    color: black;
    list-style: none;
   


}
.listaDisciplinas{
    width: 500px;
    height: 90px;
    margin: 20px 0px 0px 50px;
    padding: 20px 12px 12px 12px;
    color: black;
    border-radius: 10px;
}
.link{
    text-decoration: none;
}

p{
    margin-top: 10px;
}
h3{
    color: #2B265E;
}


#h4Disciplinas{
    color: #AAAAAA;
    margin: 20px 0px 10px 55px;
    padding-top: 20px;


}



.paragTestes: hover{
    color: #2B265E;

}

#dashboard2{
    width: 400px;
    height: 825px;
    background-color: white;
    color: white;
    float: right;
    margin: 32px 20px 0px 0px;
    }

    #pautas{
        width: 350px;
        height: 150px;
        background-color: white;
        border: 1px solid #DEDEDE;
        margin: 15px 0px 0px 25px;
        color: black;
        border-radius: 5px;

    }
    #calendario{
        width: 350px;
        height: 434px;
        background-color: white;
        border: 1px solid #DEDEDE;
        margin: 15px 0px 0px 25px;
        color: black;
        border-radius: 5px;
    }
    #h4Pautas{
        position: relative;
        color: #AAAAAA;
        margin: 0px 0px 0px 15px;
        padding-top: 20px;

    }
    #titlecalender{
        position: relative;
        color: #AAAAAA;
        margin: 0px 0px 0px 0px;
        padding-top: 10px;
    }

    #paragPautas{
        margin: 10px 0px 0px 15px;
        color: #2B265E;

    }
             
    #pautas #SobreClass{
    width: 100%;
    height: 466px;
}


#calendario #SobreClass #calendarioProvas{
    width: 26%;
    height: 462px;
    margin-left: 6px;
    border-radius: 5px;
    display: inline-block;
   
}

#calendario #SobreClass #ul{
    width: 260px;
    height: 300px;
    margin-left: 20px;
    padding-top: 20px;

}

#calendario #SobreClass #ul input{
    width: 110px;
    height: 30px;
    background-color: #2B265E;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    margin: 10px 75px;

}

#calendario #SobreClass li{
    list-style: none;
    width: 260px;
    height: 75px;
    
}
#calendario #SobreClass li .icon{
    color: #2B265E;
}
#calendario #SobreClass #ul li h1{
    font-size: 17px;
}
#calendario #SobreClass li #conteudoLeft{
    width: 90px;
    height: 35px;
    float: left;
}

#calendario #SobreClass li #conteudoRight{
    width: 80px;
    height: 30px;
    float: right;
    background-color: #E5E5E5;
    border-radius: 15px;
    text-align: center;
}

#calendario #SobreClass li #conteudoRight select{
    width: 85px;
    height: 30px;
    background-color: #E5E5E5;
    color: #707070;
    border-radius: 15px;
    border: none;
    line-height: 1.5;
    font-weight: bold;
    padding: 4px;
}

#calendario #SobreClass li #conteudoLeft2{
    width: 60px;
    height: 50px;
    float: left;
}

#calendario #SobreClass li #conteudoRight2{
    width: 190px;
    height: 50px;
    background-color: #DEDEDE;
    border-radius: 3px;
    float: right;
    position:relative;
    bottom: 2px;
}
#calendario #SobreClass li #conteudoRight2 #disciplina{
    padding-left: 15px;
}

#calendario #SobreClass li #conteudoLeft2 label{
    line-height: 1.5;
    color: #4C4C4C;
}

#calendario #SobreClass li #conteudoRight2 p{
    line-height: 1;
    position:relative;
    bottom: 4.5px;
}
#calendario #SobreClass li #conteudoRight2 #paragrafHorarioProva{
color: #4C4C4C;
font-size: 15px;
}
#calendario #SobreClass li #conteudoRight2 #paragrafDisciplina{
font-weight: bold;
color: #707070;
}

#calendario #SobreClass #ul li #hr{   
  border-right: 5px solid #2B265E;
  height: 50px; 
  position: relative;
  bottom: 50px;  
  margin-right: 2px; 
}
#ver{
    position: relative;
    bottom: 15px;
}
#prove{
    margin-top: 30px;
}
        
        

    }
    
    }

`;

