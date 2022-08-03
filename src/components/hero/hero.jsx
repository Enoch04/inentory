import { useNavigate } from 'react-router-dom';
import { HeroContainer, HomeContainer, Title } from './hero.styles';


const HeroBackground = () => {
    
    const navigate = useNavigate();

    const onClickMenuHandler = () => {
        navigate('shop');
    }

    return(
        <HomeContainer>
            <HeroContainer>
                    <Title className='h1'>Chocolate is cheaper than <br/>therapy 🍓</Title>
                    <span onClick={ onClickMenuHandler }>Checkout our menu!</span>
            </HeroContainer>
        </HomeContainer>
    );
};


export default HeroBackground;