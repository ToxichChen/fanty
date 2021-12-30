import React, { useState } from 'react';
import { StylIconInputEnd, StylBtnEyePassword } from '../../index.js';
import visibleEyeImg from './../../../img/icons/icon-visible-password.svg';
import closeEyeImg from './../../../img/icons/icon-hidden-password.svg';

const BtnEyePassword = ({ changeEye }) => {
  const [isVisible, setVisible] = useState(true);

  const isVisiblePassword = () => {
    setVisible(!isVisible);
    changeEye();
  };

  return (
    <StylBtnEyePassword onClick={isVisiblePassword} type='button'>
      <StylIconInputEnd src={isVisible ? visibleEyeImg : closeEyeImg} />
    </StylBtnEyePassword>
  );
};

export default BtnEyePassword;
