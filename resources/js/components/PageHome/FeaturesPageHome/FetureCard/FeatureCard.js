import React from 'react';

import { StylCardFeatureBox, StylTitleFeature, StylTextFeature } from '../../../';

const FeatureCard = ({ title, text }) => {
  return (
    <StylCardFeatureBox>
      <StylTitleFeature>{title}</StylTitleFeature>
      <StylTextFeature>{text}</StylTextFeature>
    </StylCardFeatureBox>
  );
};

export default FeatureCard;
