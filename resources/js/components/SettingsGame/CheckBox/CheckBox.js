import React, { useState } from 'react';
import {
  CheckboxContainer,
  Icon,
  HiddenCheckbox,
  StyledCheckbox,
  StylLabel,
  StylTextLabel,
} from './index';

import { StylBoxAddInfoTask, StylBoxInfo } from './CheckBox.styled';

const Checkbox = ({ elem }) => {
  const [isCheck, setCheck] = useState(elem.check);
  const [isHiddenInfo, setHiddenInfo] = useState(false);

  const handleCheckboxChange = (event) => {
    setCheck(event.target.checked);
  };

  return (
    <StylLabel>
      <CheckboxContainer>
        <HiddenCheckbox checked={isCheck} onChange={handleCheckboxChange} />
        <StyledCheckbox checked={elem.vip ? isCheck : 'a'}>
          <Icon viewBox='0 0 24 24'>
            <polyline points='20 6 9 17 4 12' />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <StylTextLabel>{elem.title}</StylTextLabel>
      <StylBoxAddInfoTask
        type='button'
        onClick={() => setHiddenInfo(!isHiddenInfo)}
        onFocus={() => setHiddenInfo(true)}
        onBlur={() => setHiddenInfo(false)}
      >
        <i className='fas fa-question'></i>
        <StylBoxInfo isHidden={isHiddenInfo}>{elem.description}</StylBoxInfo>
      </StylBoxAddInfoTask>
    </StylLabel>
  );
};

export default Checkbox;
