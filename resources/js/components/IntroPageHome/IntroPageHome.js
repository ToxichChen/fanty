import React from 'react';

import {
  StylBoxIntroPageHome,
  CardIntroPageHome,
  StylBoxCenterIntroPageHome,
} from '..';
import { dataPostArr } from '../../constants';

const IntroPageHome = () => {
  return (
    <StylBoxIntroPageHome>
      <StylBoxCenterIntroPageHome>
        {dataPostArr.map((item) => (
          <CardIntroPageHome
            key={item.id}
            date={item.date}
            link={item.link}
            title={item.title}
            text={item.text}
          />
        ))}
      </StylBoxCenterIntroPageHome>
    </StylBoxIntroPageHome>
  );
};

export default IntroPageHome;
