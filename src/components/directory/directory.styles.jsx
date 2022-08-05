import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%; 
  `;

  // background-image: url('https://firebasestorage.googleapis.com/v0/b/crwn-clothing-41649.appspot.com/o/vecteezy_cute-strawberry-cartoon-seamless-pattern-vector-background_.jpg?alt=media&token=89b685f5-cdb6-4874-adf4-acd8ca757084');
  // background-size: 100% 100%; 
  // background-repeat: no-repeat;
export const ContentContainer = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;

  .add {
    width: 100%;
    height: 550px;
    
    background-image: url('https://firebasestorage.googleapis.com/v0/b/crwn-clothing-41649.appspot.com/o/fresas-chocolate.jpg?alt=media&token=735fa660-c5a5-4e30-8780-2619fd017927');
    background-size: cover;
    border-radius: 5px;

    span {
      font-size: 68px;
      color: white;
      font-family: 'Fugaz One', cursive;
    }

    ul {
      font-size: 25px;
    }
  }
  
  .slogan{
    font-size: 3em;
    color: crimson;
    font-family: 'Fugaz One', cursive;
  }

  .letter-image {
    font-weight: bold;
    position: relative;
    margin: 80px auto;
    width: 80px;
    height: 80px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .animated-mail {
    position: absolute;
    height: 150px;
    width: 200px;
    -webkit-transition: .4s;
    -moz-transition: .4s;
    transition: .4s;
    
    .body {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 100px 200px;
      border-color: transparent transparent #e95f55 transparent;
      z-index: 2;
    }
    
    .top-fold {
      position: absolute;
      top: 50px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 100px 0 100px;
      -webkit-transform-origin: 50% 0%;
      -webkit-transition: transform .4s .4s, z-index .2s .4s;
      -moz-transform-origin: 50% 0%;
      -moz-transition: transform .4s .4s, z-index .2s .4s;
      transform-origin: 50% 0%;
      transition: transform .4s .4s, z-index .2s .4s;
      border-color: #cf4a43 transparent transparent transparent;
      z-index: 2;
    }
    
    .back-fold {
      position: absolute;
      bottom: 0;
      width: 200px;
      height: 100px;
      background: #cf4a43;
      z-index: 0;
    }
    
    .left-fold {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 50px 0 50px 100px;
      border-color: transparent transparent transparent #e15349;
      z-index: 2;
    }
    
    .letter {
      left: 20px;
      bottom: 0px;
      position: absolute;
      width: 160px;
      height: 60px;
      background: white;
      z-index: 1;
      overflow: hidden;
      -webkit-transition: .4s .2s;
      -moz-transition: .4s .2s;
      transition: .4s .2s;
      
      .letter-border {
        height: 10px;
        width: 100%;
        background: repeating-linear-gradient(
          -45deg,
          #cb5a5e,
          #cb5a5e 8px,
          transparent 8px,
          transparent 18px
        );
      }
      
      .letter-title {
        margin-top: 10px;
        margin-left: 5px;
        height: 10px;
        width: 40%;
        background: #cb5a5e;
      }
      .letter-context {
        margin-top: 10px;
        margin-left: 5px;
        height: 10px;
        width: 20%;
        background: #cb5a5e;
      }
      
      .letter-stamp {
        margin-top: 30px;
        margin-left: 120px;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        background: #cb5a5e;
        opacity: 0.3;
      }
    }
  }

  .shadow {
    position: absolute;
    top: 200px;
    left: 120%;
    width: 400px;
    height: 30px;
    transition: .4s;
    transform: translateX(-50%);
    -webkit-transition: .4s;
    -webkit-transform: translateX(-50%);
    -moz-transition: .4s;
    -moz-transform: translateX(-50%);
    
    border-radius: 100%;
    background: radial-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.0), rgba(0,0,0,0.0));
  }

  .letter-image:hover {
    .animated-mail {
      transform: translateY(50px);
      -webkit-transform: translateY(50px);
      -moz-transform: translateY(50px);
    }
    
    .animated-mail .top-fold {
      transition: transform .4s, z-index .2s;
      transform: rotateX(180deg);
      -webkit-transition: transform .4s, z-index .2s;
      -webkit-transform: rotateX(180deg);
      -moz-transition: transform .4s, z-index .2s;
      -moz-transform: rotateX(180deg);
      z-index: 0;
    }
    
    .animated-mail .letter {
      height: 180px;
    }
    
    .shadow {
      width: 250px;
    }
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 180px;


  section:hover {
    box-shadow: 30px 30px 30px #ccc;
    
    h2 {
      position: relative;
      top: -135px;
    }

    div{
      position: sticky;
      width: 375px;
      height:450px;
      transition: width 1s, height 1s;
    }

    img {
      width: 250px;
      height: 250px;
      top: -150px;
      border-radius: 10%;
      transition: all 1s ease-in-out;
    }

    h4 {
      font-size: 1.4em;
      font-weight: bold;
      position: relative;
      top: -200px;
      background-image: linear-gradient(
        to right,
        #964B00 ,
        #964B00 50%,
        white 50%
      );
      background-size: 200% 100%;
      background-position: -100%;
      display: inline-block;
      padding: 5px 0;
      position: relative;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all .7s ease-in-out;
    }
    
    h4:before {
      content: '';
      background: green;
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 3px;
      transition: all 0.3s ease-in-out;
    }
    
    h4:hover {
     background-position: 0;
    }
    
    h4:hover::before {
      width:100%;
    }
  }
`;

export const Sec = styled.section`
  position: relative;
  top: -50px;
  margin-bottom: 110px; 
`;

export const CategoryCard = styled.div`
  width: 300px;
  height: 250px;
  background-color: rgba(222, 115, 115, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  border: 2px solid #800000;

  img {
      width: 200px;
      height: 200px;

      border:2px solid crimson;
      border-radius: 50%;
      box-shadow: 0px 10px 9px #ccc;

      position: relative;
      top: -100px;    
  }

  h4 {
    display:none;
  }

  h2 {
    position: relative;
    top: -100px;
    font-size: 2em;
    color: crimson;
    font-family: 'Fugaz One', cursive;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  width: 85%;
  min-width: 400px;
  height: 100%;
  min-height: 300px;
  
  display:flex;
  flex-direction: column;

  padding-bottom: 25px;
  margin: 0px auto;
  border-left: 3px solid #eb4034;
  border-right: 3px solid #eb4034;
  
  & {
    opacity: 1;
    transition: opacity 500ms;
  }
  
  & {
    opacity: 0;
  }
  
  & {
    animation: fade-in 1s ease-in-out both;
  }
  
  & {
    animation: fade-in-bottom 1s ease-in-out both;
  }

  @keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  img{
    width: 35%;
    height: 35%;
    border-radius: 10px;
    margin: 10px 30px;
  }

  .desc{
    color: #964B00 ;
    font-size: 1.5em;
    font-weight: bold;
    width: 70%;
    height: 100%;
    margin: 0 auto;
  }

  h1{
    font-size: 2em;
    color: pink;
    font-family: 'Fugaz One', cursive;
    text-shadow: #533d4a 0px 0px, #533d4a 1px 1px, #533d4a 2px 2px, #533d4a 3px 3px, #533d4a 4px 4px, #533d4a 5px 5px;
    width: 85%;
    margin: 10px auto;
  }

  ${DetailsContainer}:hover{
    
    div{
      background-image: linear-gradient(
        to right,
        crimson,
        crimson 50%,
        #593c1c 50%
      );
      font-weight: bold;
      background-size: 200% 100%;
      background-position: -100%;
      display: inline-block;
      padding: 5px 0;
      position: relative;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 1s ease-in-out;
    }
    
    div:before {
      content: '';
      background: green;
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 3px;
      transition: all 0.3s ease-in-out;
    }
    
    div:hover {
     background-position: 0;
    }
    
    div:hover::before {
      width:100%;
    }
  }

  @media only screen and (max-width: 950px) {
    
    ${DetailsContainer} {
      flex-direction: column;

      img{
        width: 200px;
        height: 200px;

        border:2px solid crimson;
        border-radius: 50%;

        box-shadow: 0px 10px 9px #ccc;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    ${Sec} {
      margin-bottom: 0px;
    }
  }
`;