import React, { useEffect } from 'react';
import {
  IntroPageHome,
  FeaturePageHome,
  ComplexityHome,
} from '../../components';

const TaskInfo = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <IntroPageHome />
      <FeaturePageHome />
      <ComplexityHome />
    </>
  );
};

export default TaskInfo;
