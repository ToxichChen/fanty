import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  Article,
  StylPostImg,
  StylWrapperImg,
  StylTitlePost,
  StylDataPost,
  StylTextPost,
  StylLinkMorePost,
} from './Post.styled';

import iconDoubleArrowPNG from './../../../assets/icons/icon-double-arrow.png';

const Post = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Article data-aos='fade-right'>
      <StylWrapperImg>
        <StylPostImg src={item.media} alt='post img' />
      </StylWrapperImg>
      <StylDataPost>{item.created_at.substring(0, 10)}</StylDataPost>
      <StylTitlePost>{item.title}</StylTitlePost>
      <StylTextPost>{item.text}</StylTextPost>
      <StylLinkMorePost to={'/blogs/article/' + item.id}>
        Читать далее <img src={iconDoubleArrowPNG} alt='double arrow' />
      </StylLinkMorePost>
    </Article>
  );
};

export default Post;
