import React from 'react';
import {
  StylBoxIntroPageHome,
  FeatureCard,
  StylBoxCenterFeaturePageHome,
} from './../../';

import { dataPostFeatureArr } from '../../../constants';

const FeaturePageHome = ({ svg, title, text }) => {
  return (
    <StylBoxIntroPageHome>
      <StylBoxCenterFeaturePageHome>
        {dataPostFeatureArr.map((item) => (
          <FeatureCard key={item.id} title={item.title} text={item.text} />
        ))}
      </StylBoxCenterFeaturePageHome>
    </StylBoxIntroPageHome>
  );
};

export default FeaturePageHome;
