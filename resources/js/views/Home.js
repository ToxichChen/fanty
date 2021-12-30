import React, { useEffect } from 'react';
import { HeaderPageHome, IntroPageHome, FooterPageHome } from '../components';

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <HeaderPageHome />
      <IntroPageHome />
      <FooterPageHome />
    </>
  );
};

export default Home;
