import styled from "styled-components";
import Image from "./imageStudent.jpg";


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

.listaNavegacao: hover{
    color: #B92AAB;


}

#circulo{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: 105px 100px;
    margin: 25px 0px 0px 100px; 
   
}

#circulo1{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: 105px 100px;
    margin: 0px 0px 0px 0px; 
   
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
}


#disciplinas{
    width: 600px;
    height:  500px;
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
    color: #B92AAB;
}


#h4Disciplinas{
    color: red;
    color: #AAAAAA;
    margin: 20px 0px 10px 55px;
    padding-top: 20px;


}

.paragTestes: hover{
    color: #B92AAB;

}

#dashboard2{
    width: 400px;
    height: 675px;
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
    #h4Pautas{
        position: relative;
        color: #AAAAAA;
        margin: 0px 0px 0px 15px;
        padding-top: 20px;

    }
    .Icon: hover{
        color: #B92AAB
    }

    #paragPautas{
        margin: 10px 0px 0px 15px;
        color: #B92AAB;

    }

   



    

             
    }
        
        

    }
    
    }

    .informEstudante{
        line-height: 2.0;
        
    }

    #buttonEditar{
        width: 80px;
        height: 42px;
        border-radius: 5px;
        border: none;
        background-color: #F6971B;
        color: white;
        top: 50px;
        left: 460px;
        position: relative;

    }

`;