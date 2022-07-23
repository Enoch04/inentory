import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;  
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  section:last-child {
    margin-bottom: 50px;
  }

  section:hover {
    box-shadow: 30px 30px 30px #ccc;
    
    div{
      width: 500px;
      height:450px;
    }

    img {
      width: 250px;
      height: 250px;
      top: -150px;
    }

    h4 {
      background-image: linear-gradient(
        to right,
        #663300,
        #663300 50%,
        #000 50%
      );
      background-size: 200% 100%;
      background-position: -100%;
      display: inline-block;
      padding: 5px 0;
      position: relative;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 1s ease-in-out;
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
  margin-bottom: 150px;

  img {
    width: 150px;
    height: 150px;

    border:2px solid crimson;
    border-radius: 50%;

    box-shadow: 0px 10px 9px #ccc;

    position: relative;
    top: -100px;    
  }
`;

export const CategoryCard = styled.div`
  width: 400px;
  height:350px;
  background-color: rgba(222, 115, 115, 0.54);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  border: 2px solid #800000;

  h3 {
    color: #800000;
  }

  h2 {
    color: pink;
    font-family: 'Shrikhand', cursive;
    text-shadow: #533d4a 1px 1px, #533d4a 2px 2px, #533d4a 3px 3px, #533d4a 4px 4px, #533d4a 5px 5px, #533d4a 6px 6px;
  }
  
`;

