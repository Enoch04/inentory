import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    display: block;
    float: left;
    position: relative;
    top: 50px;
    left: 20px;

   
    transform: skew(-10deg);
    display: block;
    float: left;

    text-shadow: #533d4a 1px 1px, #533d4a 2px 2px, #533d4a 3px 3px, #533d4a 4px 4px, #533d4a 5px 5px, #533d4a 6px 6px;
    min-width: 10px;
    min-height: 10px;
    position: relative;
   

    &:nth-child(1){
        color: white;
    }
    &:nth-child(2){
        color: crimson;
    }
`;

export const HeroContainer = styled.div`
    color: #fff;
    text-transform: uppercase;
    font-size: 36px;
    line-height: 70px;
    letter-spacing: 2px;
    font-family: 'Shrikhand', cursive;
    overflow: hidden;

    width: 100%;
    height: 550px;
    margin-botton: 20px;

    @keyframes shine {
        0% {background-position: -100%;}
        100% {background-position: 100%;}
    }

    animation: shine 15s infinite;

    background-image:
        linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url("https://as1.ftcdn.net/v2/jpg/00/52/10/64/1000_F_52106434_mWPOEyprhISEaUHjDrs5YDva7mCPqkfT.jpg");
    
    @media only screen and (max-width: 670px) {
        h1 {
            padding-left: 50px;
            font-size: 60px;
        }
    }
`;



