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
      to={`/blogs/article/${item.id}`}
      style={{ textDecoration: 'none' }}
      data-aos='fade-right'
    >
      <StylTrendBox>
        <StylImgTrend src={item.media} alt='trend img' />
        <StylBoxInfo>
          <StylDataTrend>{item.created_at.substring(0, 10)}</StylDataTrend>
          <StylTitleTrend>{item.title}</StylTitleTrend>
        </StylBoxInfo>
      </StylTrendBox>
    </NavLink>
  );
};

export default Trend;
