import styled from 'styled-components';


export const Container = styled.div`
  color: pink;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  background-color: crimson;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-family: 'Shrikhand', cursive;

  #colorText{
    color: rgb(255, 132, 132);
  }
`;

export const NavLinks = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SocialMedia = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .rounded-social-buttons .social-button {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 3.125rem;
    height: 3.125rem;
    border: 0.125rem solid transparent;
    padding: 0;
    text-decoration: none;
    text-align: center;
    color: #fefefe;
    font-size: 1.5625rem;
    font-weight: normal;
    line-height: 2em;
    border-radius: 1.6875rem;
    transition: all 0.5s ease;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }
  
  .rounded-social-buttons .social-button:hover, .rounded-social-buttons .social-button:focus {
    -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
  
  .rounded-social-buttons .fa-twitter, .fa-facebook-f, .fa-linkedin, .fa-youtube, .fa-instagram {
    font-size: 25px;
  }
  
  .rounded-social-buttons .social-button.facebook {
    background: #3b5998;
  }
  
  .rounded-social-buttons .social-button.facebook:hover, .rounded-social-buttons .social-button.facebook:focus {
    color: #3b5998;
    background: #fefefe;
    border-color: #3b5998;
  }
  
  .rounded-social-buttons .social-button.twitter {
    background: #55acee;
  }
  
  .rounded-social-buttons .social-button.twitter:hover, .rounded-social-buttons .social-button.twitter:focus {
    color: #55acee;
    background: #fefefe;
    border-color: #55acee;
  }
  
  .rounded-social-buttons .social-button.youtube {
    background: #bb0000;
  }
  
  .rounded-social-buttons .social-button.youtube:hover, .rounded-social-buttons .social-button.youtube:focus {
    color: #bb0000;
    background: #fefefe;
    border-color: #bb0000;
  }
  
  .rounded-social-buttons .social-button.instagram {
    background: #125688;
  }
  
  .rounded-social-buttons .social-button.instagram:hover, .rounded-social-buttons .social-button.instagram:focus {
    color: #125688;
    background: #fefefe;
    border-color: #125688;
  }
`;
