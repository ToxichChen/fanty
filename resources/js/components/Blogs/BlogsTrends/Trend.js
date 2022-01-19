import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  StylTrendBox,
  StylImgTrend,
  StylDataTrend,
  StylBoxInfo,
  StylTitleTrend,
} from './Trend.styled';

const Trend = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <NavLink
      to={item.url}
      style={{ textDecoration: 'none' }}
      data-aos='fade-right'
    >
      <StylTrendBox>
        <StylImgTrend src={item.imgUrl} alt='trend img' />
        <StylBoxInfo>
          <StylDataTrend>{item.data}</StylDataTrend>
          <StylTitleTrend>{item.title}</StylTitleTrend>
        </StylBoxInfo>
      </StylTrendBox>
    </NavLink>
  );
};

export default Trend;
