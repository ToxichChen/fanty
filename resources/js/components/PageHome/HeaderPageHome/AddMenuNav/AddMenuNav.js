import React from 'react';
import {
  BoxAddMenu,
  StylItemAddMenu,
  StylLinkAddMenu,
} from './AddMenuNav.styled';

const AddMenuNav = ({ typeMenu, visibleContent, handleContent }) => {
  return (
    <BoxAddMenu typeMenu={typeMenu} isShow={visibleContent}>
      <StylItemAddMenu>
        <StylLinkAddMenu onClick={handleContent}>
          Черное и белое
        </StylLinkAddMenu>
      </StylItemAddMenu>
      <StylItemAddMenu>
        <StylLinkAddMenu onClick={handleContent}>Ролевые игры</StylLinkAddMenu>
      </StylItemAddMenu>
      <StylItemAddMenu>
        <StylLinkAddMenu onClick={handleContent}>Секс фанты</StylLinkAddMenu>
      </StylItemAddMenu>
    </BoxAddMenu>
  );
};

export default AddMenuNav;
