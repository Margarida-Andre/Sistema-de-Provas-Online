import styled from "styled-components";
import Image from "./professor.jpg";


export const Style = styled.section `

width: 100%;
height: 150px;

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
        margin: 25px 0px 0px 370px;
       
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
width: 325px;
height: 597px;
background-color: black;
float: left;
color: white;

#circulo{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: 105px 100px;
    margin: 20px 0px 0px 105px; 

}

hr{
    margin-top: 20px;
}

#p2{
    margin: 28px 0px 0px 120px;
}

.listaDashboard{
    list-style: none;
    margin: 27px 0px 0px 40px;

}


.listaDisciplinas{
    margin: 20px 0px 0px 20px;

}
}

#T{
   
        width: 19px;
        height: 19px;
        border-radius: 5px;
        margin-left: 20px;
        
    
}


#div1{
    width: 1040px;
    height: 597px;
    background-color: #DEDEDE;
    float: right;
    
   
article{
    width: 600px;
    height: 550px;
    background-color: white;
    position: absolute;
    top: 85px;
    left: 500px;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    

form{
    margin: 50px 0px 0px 100px;
    border-radius: 20px;
    
    }


input{
    margin-top: 5px;
    width: 400px;
    height: 35px;
    border-radius: 6px;
    border: 1px solid #A8A8A8;
}
#T{
    margin-top: 5px;
    width: 400px;
    height: 35px;
    border-radius: 6px;
    border: 1px solid #A8A8A8;
    font-family: Arial, Helvetica, sans-serif;
    
}

#btnCriar{
    width: 100px;
    height: 43px;
    border-radius: 5px;
    border: none;
    left: 20px;
    color: white;
    background-color: #B92AAB;
    margin-left: 300px;
}

h3{
    margin-left: 140px;
    
}
} 
    }

    #ano{
    margin-top: 5px;
    width: 265px;
    height: 35px;
    border-radius: 6px;
    border: 1px solid #A8A8A8;
    }
    
   #disciplina{
    margin-top: 5px;
    width: 400px;
    height: 35px;
    border-radius: 6px;
    border: 1px solid #A8A8A8;

   }
  #tq1{
    margin: 10px 0px 0px 0px;
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #A8A8A8;
    background-color:#296EF8;
    color: white;
    

   }

   #tq2{
    margin: 10px 0px 0px 20px;
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #A8A8A8;
    background-color:#296EF8;
    color: white;
    

   }

`;