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
width: 250px;
height: 597px;
background-color: black;
float: left;
color: white;
display:inline-block;


#circulo{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: 105px 100px;
    margin: 20px 0px 0px 61px; 

}

hr{
    margin-top: 20px;
}

#p2{
    margin: 28px 0px 0px 80px;
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
    width: 1115px;
    height: 595px;
    background-color: #DEDEDE;
    display:inline-block;
    

 #div11{
     width: 1116px;
     height: 122px;
     margin: 15px 0px 0px 0px;
     


 }
 
    .forms{
        background-color: white;
        width: 250px;
        height: 100px;
        border-radius: 8px;
        border: 1px solid #CCCCCC;
        display: inline-block;
        position: relative;
        margin-left: 23px;
     
               .Icon{
                   width: 35px;
                   height: 35px;
                   color: white;
                   margin: 40px 0px 0px 30px;
               }
               .titlulo{
                margin: 20px 0px 0px 10px;

               }
               h4{
                margin: 10px 0px 0px 10px;
            }
               
               #p3{
                width: 100px;
                height: 110px;
                background: #B92AAB;
                float: left;
                border-radius: 5px 0px 0px 5px;
                
            }
                
                #p31{
                    width: 100px;
                    height: 110px;
                    background: #EF3B26;
                    float: left;
                    border-radius: 5px 0px 0px 5px;
                    
                }
                #p32{
                    width: 100px;
                    height: 110px;
                    background: #E26F23;
                    float: left;
                    border-radius: 5px 0px 0px 5px;
                    
                }
                #p33{
                    width: 100px;
                    height: 110px;
                    background: #E26F23;
                    float: left;
                    border-radius: 5px 0px 0px 5px;
                    
                }
                #p34{
                    width: 100px;
                    height: 110px;
                    background: #407DE6;
                    float: left;
                    border-radius: 5px 0px 0px 5px;
                    
                }

                #p4{
                    width: 148px;
                    height: 110px;
                    background: white;
                    float: right;
                    border-radius: 0px 5px 5px 0px;
                    
                }
             }

        }

    }
        
 }
    
 #article1{
        width: 1116px;
        height: 310px;
        
        
    #div2{
        width: 695px;
        height: 300px;
        background-color: white;
        display: inline-block;
        margin: 1px 0px 0px 23px;
       
        
        
    }
    #div3{
        width: 360px;
        height: 270px;
        background-color: red;
        display: inline-block;
        margin: 0px 0px 0px 15px;
        border-radius: 5px;
        
    }


}

#image2{
    width: 350px;
    height: 250px;
    margin: 0px 0px 0px 150px;
}

#tituloMapa{
    text-align: center;
}


#article2{
    width: 1110px;
    height: 127px;
    
    
}
#div4{
    width: 500px;
    height: 130px;
    background-color: white;
    margin: 0px 0px 0px 22px;
    display: inline-block;
 
    #h5{
        text-align: center;
    }
}

#div5{
    width: 550px;
    height: 125px;
    background-color: white;
    margin: 0px 0px 0px 22px;
    display: inline-block;
}

.actividades{
    position: relative;
    top:10px;
    text-align: center;
}

.actividadesRecentes{
    position: relative;
    top: 5px;
    left: 40px;
    width: 470px;
    height: 25px;
    background-color: #ddd;
    border-bottom: 3px solid white;
   
}
.listActividades{
    float: left;
    list-style: none; 

}
.listActividadesHora{
    float: right;
    list-style: none; 


}

#verMais{
    position: relative;
    top: 8px;
    left: 435px;
    color: #B92AAB;
}
button{
    width: 100px;
    height: 30px;
    background-color: #B92AAB;
    border: none;
    color: white;
    position: relative;
    left: 25px;
    top: 5px;
}





`;