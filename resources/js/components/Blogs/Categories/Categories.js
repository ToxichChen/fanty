import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  StylBoxCategories,
  StylTitleCategories,
  StylListCategories,
  StylItemCategories,
} from './Categories.styled';
import { blogsCategoriesListArr } from '../../../constants';
import imgDoubleArrowPNG from './../../../assets/icons/icon-double-arrow.png';

const Categories = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <StylBoxCategories>
      <StylTitleCategories>Categories</StylTitleCategories>
      <StylListCategories>
        {!!blogsCategoriesListArr.length &&
          blogsCategoriesListArr.map((item, index) => (
            <StylItemCategories key={index} data-aos='fade-right'>
              {item.title} <img src={imgDoubleArrowPNG} alt='double arrow' />
            </StylItemCategories>
          ))}
      </StylListCategories>
    </StylBoxCategories>
  );
};

export default Categories;
