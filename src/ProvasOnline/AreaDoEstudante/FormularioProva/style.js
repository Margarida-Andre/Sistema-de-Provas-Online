import styled from "styled-components";
import Image from "./imageStudent.jpg";
import Image2 from "./camera.png";


export const Style = styled.section `

width: 100%;
height: 800px;
background: #DEDEDE;

#divheader{
    width: 100%;
    height: 60px;
    background-color: #B92AAB;
    

    img{
        width: 60px;
        height: 40px;
        position: relative;
        top: 10px;
        left: 35px;
    }

    #p1{
        float: right;
        margin: 25px 0px 0px 350px;
       
    }
    #usuario{

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: 45px 50px;
    margin: 10px 10px 0px 10px; 
    float: right;

    }

}

#dashboard{
width: 300px;
height: 597px;
color: white;
float: left;

}
h1{
    margin: 30px 0px 0px 21px;
    color: #B92AAB;
    font-size: 24px;
}

.listaNavegacao: hover{
    color: #B92AAB;


}

#circulo{
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 1px solid #AAAAAA;
    background-color: white;
    background-image: url(${Image2});
    background-repeat: no-repeat;
    background-size: 200px 200px;
    background-position: center;
    margin: 15px 0px 0px 40px; 
   
}

#article1{
    width: 270px;
    height: 250px;
    background-color: white;
    position: relative;
    top: 10px;
    left: 20px;
    
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
}


#Prova{
    width: 1000px;
    height:  580px;
    background-color: white;
    display: inline-block;
    margin: 30px 0px 0px 10px;
    border-radius: 5px;
    

}

#listaProva{
    list-style: none;
    margin: 50x 0px 0px 15px;
    padding: 20px 0px 0px 0px;
}

.fProva{
    color: #AAAAAA;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    margin: 0px 0px 0px  260px;
}

.fProva: hover{
    color: #B92AAB;
}

#step{
    list-style: none;
    margin: 60x 0px 0px 20px;
    padding: 40px 0px 0px 20px; 

}
.steps{
    width: 60px;
    height: 60px;
    border-radius: 200px 200px 200px 200px;
    background-color: #AAAAAA;
    color: white;
    display: inline-block;
    font-size: 18px;
    margin: 0px 0px 0px  140px;
    text-align: center;
    line-height: 3.2;
}
span{
    color: red;
    font-weight: bold;
}

#formPerguntasRespostas{
    top: 20px;
    position: relative;
    width: 1000px;
    height: 360px;
    

}
.fPR1{
    width: 220px;
    height: 200px;
    float: left;
    margin-left: 35px;
    background-color: #DBDBDB;
    border-radius: 4px;

}

#fPR11{
    margin: 40px 0px 0px 20px;
    line-height: 1.5;

}

.fPR2{
    
    width: 700px;
    height: 360px;
    float: right;
    margin-right: 35px;
    background-color: #DBDBDB;
    border-radius: 4px;

}

#questoes{
    margin: 40px 0px 0px 30px;
    line-height: 2.0;
}
.R{
    margin-left: 10px;
}
button{
    background-color: #B92AAB;
    width: 80px;
    height: 35px;
    border: none;
    color: white;
    position: relative;
    left: 540px;
    top: 50px;
}



#linhaStep{
    width: 140px;
    height: 2px;
    background-color: #AAAAAA;
    position: relative;
    top: 30px;
    left: 60px;

}

.steps: hover , #linhaStep: hover{
    background-color: #B92AAB;


}

.link{
    text-decoration: none;
}

p{
    margin-top: 10px;
}
h3{
    color: #B92AAB;
}


#h4Disciplinas{
    color: red;
    color: #AAAAAA;
    margin: 20px 0px 10px 55px;
    padding-top: 20px;


}

 
    }

`;