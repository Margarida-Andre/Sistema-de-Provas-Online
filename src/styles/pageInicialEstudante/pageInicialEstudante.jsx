export const Header = styled.header`
width: 100%;
height: 60px;
background-color: #161616;


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