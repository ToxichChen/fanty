import React, { useEffect } from 'react';
import {
  IntroPageHome,
  FeaturePageHome,
  ComplexityHome,
  TaskInfoSlider,
  FooterPageHome,
} from '../../components';

const TaskInfo = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <TaskInfoSlider
        title={'Sex fanty'}
        description={
          'Не каждый отваживается на использование специальных устройств во время полового контакта. '
        }
      />
      <IntroPageHome />
      <FeaturePageHome />
      <ComplexityHome />
      <FooterPageHome />
    </>
  );
};

export default TaskInfo;
