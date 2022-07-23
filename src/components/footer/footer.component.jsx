import { Link } from 'react-router-dom';
import { Container, SocialMedia, NavLinks } from './footer.styles.jsx';

const Footer = () => {

    return(
        <Container>
            <section>
                <h2>Contact</h2>
                <div id='colorText'>Carlos Ramirez</div>
                <div id='colorText'>Call us at: (630) 383-1344</div>
            </section>
            <NavLinks>
                <h2>Links</h2>
                <Link to='/'>HOME</Link>
                <Link to='/shop'>SHOP</Link>
                <Link to='/about'>ABOUT US</Link>
            </NavLinks>
            <section>
                <h2>Lets chat!</h2>
                <a href='mailto:khuerta10@icloud.com' id='colorText'>khuerta10@icloud.com</a>
            </section>
            <SocialMedia>
                <div class="rounded-social-buttons">
                    <a class="social-button facebook" href="https://www.facebook.com/WoahKarlaWoah" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="social-button twitter" href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </SocialMedia>
        </Container>
    )

};

export default Footer;