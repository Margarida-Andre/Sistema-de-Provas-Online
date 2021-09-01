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
height: 730px;
font-family: calibri;


#article1{
    width: 16%;
    height: 730px;
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

.link: hover{
    color: orange;
}


#article2{
    width: 84%;
    height: 731px;
    display: inline-block;
    float: right;


form{
    width: 60%;
    height: 200px;
    margin: 30px 230px;
    border-radius: 4px;
    border: 2px solid #DEDEDE;
    padding: 10px;

}

.formProva{
    width: 600px;
    height: 40px;
    border-radius: 4px;
    border: 2px solid #DEDEDE;
    padding: 15px;
    
}
#h1{
    margin: 10px;
}
#submit{
    float: right;
    width: 170px;
    height: 45px;
    border-radius: 20px;
    border: none;
    background-color: #2B265E;
    color: white;
    font-weight: bold;
    margin-top: 20px;
    
}

#ilustracaoProve{
    width: 800px;
    height: 400px;
    margin-left: 100px;
}

  
}


`;