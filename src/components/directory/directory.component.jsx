import {
  DirectoryContainer,
  Sec, CategoriesContainer,
  CategoryCard,
  DescriptionContainer,
  DetailsContainer,
  ContentContainer,
} from './directory.styles';

import HeroBackground from '../hero/hero';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'Gallery',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-41649.appspot.com/o/gallery.png?alt=media&token=fe1e4a64-9dea-48ec-ba1c-4fa01c10d746',
    route: 'shop/jackets',
    desc: "Take a look at our previous work! ",
  },
  {
    id: 2,
    title: 'About us',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-41649.appspot.com/o/karla.png?alt=media&token=7a21c69f-687e-483b-8955-35b00b672128',
    route: 'aboutUs',
    desc: `Sweat Hu$tle is part of a wave of succesful start-ups who are proving that
          fundamentally realigning the balance between profit and  can generate win-win
          relationship for everyone involved.`,
  },

];



const Directory = () => {
  const navigate = useNavigate();

  const onClickHandler = (e, route) => {
    e.preventDefault();
    navigate(route);
  };

  const letterHandler = () => {
    navigate('contact');
  }
  return (
    <DirectoryContainer >
      <HeroBackground />
      <ContentContainer>
        <div className='slogan'>Try our Best seller chocolate strawberries</div>
        <span>nothing is swaeter then homemade</span>
        <CategoriesContainer>
          {categories.map((category) => {
            const { title, imageUrl, desc, route } = category;
            return (
              <Sec className='scroll-element js-scroll fade-in-bottom'>
                <CategoryCard onClick={event => onClickHandler(event, route)}>
                  <img src={imageUrl} alt={title} />
                  <h2>{title}</h2>
                  <h4>{desc}</h4>
                </CategoryCard>
              </Sec>
            )
          })}
        </CategoriesContainer>
        <DescriptionContainer>
          <DetailsContainer>
            <img src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-41649.appspot.com/o/plate-chocolate-covered-strawberries-table-119191268.jpg?alt=media&token=9c5f4234-669b-46e5-899a-ff6ac4d0d8d9"
              alt="Chocolate cover straberries on table" />
            <section>
              <h1>We simply focus our attention on the details</h1>
              <div className='desc'>
                Our hunger for perfection results in the decision to choose only reliable suppliers
                offering high-quality raw materials and ingredients with colourful sun-kissed tastes,
                for the creation of our sweet masterpieces. In cooperation with confectioners,
                we are selecting the best of the best to make sure that you are satisfied.
                All products are strictly controlled as the company is the bearer of your satisfaction.
              </div>
            </section>
          </DetailsContainer>
          <br />
          <br />
          <DetailsContainer>
            <section>
              <h1>Great customer experience and product quality</h1>
              <div className='desc'>
                Protecting the taste and design of the sweat during the process of delivering and defrosting,
                we use safe freezing technology to keep the sweet product in its original state.
                This flavour-friendly method helps us to gratify your taste buds
              </div>
            </section>
            <img src="https://firebasestorage.googleapis.com/v0/b/crwn-clothing-41649.appspot.com/o/cup-chocolate-covered-strawberries-table-cup-chocolate-covered-strawberries-table-127818711.jpg?alt=media&token=b7510eb7-698e-44dd-a436-0bd7413eaec6"
              alt="Chocolate cover straberries on table" />
          </DetailsContainer>
        </DescriptionContainer>
        <div className='add'>
          <span>Custumize your order<br/>
            <ul>
              <li>Birthdays</li>
              <li>Valentines</li>
              <text>For any special occasion</text>
            </ul>
          </span>
          <section onClick={letterHandler} className='contact'>
            <div class="letter-image">
              <div class="animated-mail">
                <div class="back-fold"></div>
                <div class="letter">
                  <div class="letter-border"></div>
                  <div class="letter-title"></div>
                  <div class="letter-context">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Contact&nbsp;us!</div>
                  <div class="letter-stamp">
                    <div class="letter-stamp-inner"></div>
                  </div>
                </div>
                <div class="top-fold"></div>
                <div class="body"></div>
                <div class="left-fold"></div>
              </div>
              <div class="shadow"></div>
            </div>
          </section>
        </div>
      </ContentContainer>
    </DirectoryContainer>
  );
};

export default Directory;
