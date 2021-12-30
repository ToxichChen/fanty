import React from 'react';

import {
  StylBoxIntroPageHome,
  CardIntroPageHome,
  StylBoxCenterIntroPageHome,
} from '../..';
import { dataPostArr } from '../../../constants';

const IntroPageHome = () => {
  return (
    <StylBoxIntroPageHome top={true}>
      <StylBoxCenterIntroPageHome>
        {dataPostArr.map((item) => (
          <CardIntroPageHome
            key={item.id}
            svg={item.svg}
            title={item.title}
            text={item.text}
          />
        ))}
      </StylBoxCenterIntroPageHome>
    </StylBoxIntroPageHome>
  );
};

export default IntroPageHome;
