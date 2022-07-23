import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.div`
  color: white;
  text-transform: uppercase;
  font-size: 45px;
  line-height: 70px;
  letter-spacing: 3px;
  font-family: 'Shrikhand', cursive;

  transform: skew(-10deg);
  
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: 1s ease-out 0s 1 slideInFromLeft;

  text-shadow: #533d4a 1px 1px, #533d4a 2px 2px, #533d4a 3px 3px, #533d4a 4px 4px, #533d4a 5px 5px, #533d4a 6px 6px;
 
`;

export const NavigationContainer = styled.div`
  background-color: crimson;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 690px) {
    ${Title} {
      font-size: 20px;
    }
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 25px;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: 1s ease-out 0s 1 slideInFromLeft;
`;

export const NavLinks = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: 1s ease-out 0s 1 slideInFromLeft;
`;

export const NavLink = styled(Link)`
  color: white;
  padding: 10px 15px;
  cursor: pointer;
`;

