import React, { useEffect } from 'react';
import { HeaderPageHome, FooterPageHome, IntroCard } from '../../components';

const HomeView = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <HeaderPageHome />
      <IntroCard />
      <FooterPageHome />
    </>
  );
};

export default HomeView;
