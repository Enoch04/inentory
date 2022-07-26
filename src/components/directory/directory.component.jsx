import { DirectoryContainer, Sec, CategoriesContainer, CategoryCard } from './directory.styles';

import HeroBackground from '../hero/hero';

const categories = [
  {
    id: 1,
    title: 'Home',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-41649.appspot.com/o/menu.png?alt=media&token=fac15b1b-9ada-4f12-a0b7-0baf0d3eb81d',
    route: 'shop/hats',
    desc: "Try our Sweat items!",
  },
  {
    id: 2,
    title: 'Gallery',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-41649.appspot.com/o/gallery.png?alt=media&token=fe1e4a64-9dea-48ec-ba1c-4fa01c10d746',
    route: 'shop/jackets',
    desc: "Take a look at our previous work! ",
  },
  {
    id: 3,
    title: 'About us',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-41649.appspot.com/o/karla.png?alt=media&token=7a21c69f-687e-483b-8955-35b00b672128',
    route: 'shop/sneakers',
    desc: `Sweat Hu$tle is part of a wave of succesful start-ups who are proving that
          fundamentally realigning the balance between profit and  can generate win-win
          relationshipa for everyone involved.`,
  },
  
];

const Directory = () => {
  return (
    <DirectoryContainer >
      <HeroBackground />
      <CategoriesContainer>
        {categories.map((category) =>{
          const { title, imageUrl, desc } = category;
          return(
          <Sec >
            <CategoryCard>
              <img src={ imageUrl } alt={title} />
              <h2>{title}</h2>
              <h4>{desc}</h4>
            </CategoryCard>
          </Sec>
          )})}
      </CategoriesContainer>
    </DirectoryContainer>
  );
};

export default Directory;
