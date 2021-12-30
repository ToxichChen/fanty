import React, { useState } from 'react';
import {
  StylListOptionsSettings,
  StylBtnRadioList,
  StylBtnLine,
  StylBtnRadioBtn,
  StylListAnotherOption,
  StylSettingsOptions,
} from './../';

const OptionItem = ({ item }) => {
  const [isShowOption, setShowOption] = useState(item.vip);
  const [isCheckedOption, setCheckedOption] = useState('');

  return (
    <StylSettingsOptions>
      <StylListOptionsSettings>
        <StylBtnRadioList
          type='button'
          isMode={isShowOption}
          onClick={() => setShowOption(!isShowOption)}
        >
          <StylBtnLine isMode={isShowOption} />
          <StylBtnLine isMode={isShowOption} />
          {item.title}
        </StylBtnRadioList>
        <StylListAnotherOption isShowOptions={isShowOption}>
          {item.addOption.map((item, index) => (
            <StylBtnRadioBtn
              key={index}
              isChecked={isCheckedOption === item.title}
              onClick={(e) => setCheckedOption(e.currentTarget.innerHTML)}
            >
              {item.title}
            </StylBtnRadioBtn>
          ))}
        </StylListAnotherOption>
      </StylListOptionsSettings>
    </StylSettingsOptions>
  );
};

export default OptionItem;
