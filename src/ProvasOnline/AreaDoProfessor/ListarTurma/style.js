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

select{
   
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
    width: 900px;
    height: 550px;
    background-color: white;
    position: absolute;
    top: 85px;
    left: 395px;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    

table{
    margin: 30px 0px 0px 40px;
    border-radius: 20px;
    
    }
    table, th, td{
        border: 1px solid #CCCCCC;
        border-collapse: collapse;

    }
    th,td{
        padding: 15px;
    }

    h3{
        margin: 50px 0px 0px 400px;
        
        font-family: Arial, Helvetico, sans-serif;
    }

    #buttonEditar{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: none;
        background-color: #F6971B;
        color: white;

    }
    #buttonEliminar{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: none;
        background-color: red;
        color: white;
        
    }

   



   

`;