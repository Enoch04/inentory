import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    display: block;
    font-family: 'Fugaz One', cursive;
    text-align: center;

    margin: 50px auto;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.6);
    overflow: hidden;
    animation: text 3s both steps(32) , border 0.5s ;
   
    transform: skew(-10deg);
    display: block;
    float: left;

    text-shadow: #533d4a 1px 1px, #533d4a 2px 2px, #533d4a 3px 3px, #533d4a 4px 4px, #533d4a 5px 5px, #533d4a 6px 6px;
    min-width: 10px;
    min-height: 10px;
    position: relative;
      
    @keyframes text {
    from {
        width: 0;
    }
    to {
        width: 32ch;
    }
    }
    
    @keyframes border {
    from {
        border-right-color: rgba(255, 255, 255, 0.6);
    }
    to {
        border-right-color: transparent;
    }
    }
`;

export const HeroContainer = styled.div`
    color: #fff;
    text-transform: uppercase;
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 2px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 550px;
    margin-bottom: 60px;
    background-image:
        linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url("https://as1.ftcdn.net/v2/jpg/00/52/10/64/1000_F_52106434_mWPOEyprhISEaUHjDrs5YDva7mCPqkfT.jpg");
    
    
    span{
        margin: 0 auto;
        font-size: 30px;
        color: #fff;
        animation: glow 1s ease-in-out infinite alternate;
        text-decoration: underline;
    }

    .h1{
        width: 100%;
        height: 55%;
    }
    
    @keyframes glow {
        from {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px crimson, 0 0 40px crimson, 0 0 50px crimson, 0 0 60px crimson, 0 0 70px crimson;
        }
        
        to {
          text-shadow: 0 0 20px #fff, 0 0 30px crimson, 0 0 40px crimson, 0 0 50px crimson, 0 0 60px crimson, 0 0 70px crimson, 0 0 80px crimson;
        }
    }


    @keyframes shine {
        0% {background-position: -100%;}
        100% {background-position: 100%;}
    }
    animation: shine 15s infinite;

    
    @media only screen and (max-width: 670px) {
        .h1 {
            font-size: 50px;
        }

        span{
            margin-left: 150px;
            font-size: 25px;
            font-family: 'Fugaz One', cursive;
        }
    
    }
`;



