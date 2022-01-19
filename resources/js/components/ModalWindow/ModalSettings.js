import React from 'react';
import {
  StylModalSettings,
  StylBtnCardSettings,
  StylTitleModalSettings,
  StylVipStatusModal,
  StylVipText,
  StylBtnVip,
  StylBtnSaveAndClose,
  StylOptionsAddedWrapper,
  StylWrapperAllSettings,
  StylImgModal,
  StylTextModal,
  StylWrapperCenterContent,
} from '..';

import iconManSVG from './../../assets/icons/icon-man.svg';
import iconGirlSVG from './../../assets/icons/icon-girl.svg';

import Checkbox from '../SettingsGame/CheckBox/CheckBox';

const ModalSettings = ({ visible, switchVisible, item }) => {
  return (
    <StylModalSettings isVisible={visible}>
      <StylBtnCardSettings type='button' onClick={switchVisible}>
        <i className='fas fa-times'></i>
      </StylBtnCardSettings>
      <StylTitleModalSettings>{item.title}</StylTitleModalSettings>
      <StylVipStatusModal isVip={false}>
        <StylVipText isLowWidth={true}>
          <b>Настройки заблокированы </b> и будут доступны в полной версии игры.
        </StylVipText>
        <StylBtnVip>
          <i className='fas fa-gem'></i> Полная версия от 159 руб
        </StylBtnVip>
      </StylVipStatusModal>
      {item.has_sex_difference ? (
        <StylWrapperAllSettings isColumn={true}>
          <StylWrapperAllSettings>
            <StylWrapperCenterContent>
              <StylImgModal src={iconManSVG} alt='man' />
              <StylTextModal>Мужчина</StylTextModal>
            </StylWrapperCenterContent>
            <StylWrapperCenterContent>
              <StylImgModal src={iconGirlSVG} alt='girl' />
              <StylTextModal>Женщина</StylTextModal>
            </StylWrapperCenterContent>
          </StylWrapperAllSettings>

          <StylWrapperAllSettings>
            <StylOptionsAddedWrapper>
              {item.subsettings.map((elem, index) => {if(elem.sex === 1) {(
                <Checkbox key={index} elem={elem} />
              )}})}
            </StylOptionsAddedWrapper>

            <StylOptionsAddedWrapper>
              {item.subsettings.map((elem, index) => {if(elem.sex === 2) {(
                <Checkbox key={index} elem={elem} />
              )}})}
            </StylOptionsAddedWrapper>
          </StylWrapperAllSettings>
        </StylWrapperAllSettings>
      ) : (
        <StylWrapperAllSettings>
          <StylOptionsAddedWrapper isFullWidth={true}>
            {item.subsettings.map((elem, index) => (
              <Checkbox key={index} elem={elem} />
            ))}
          </StylOptionsAddedWrapper>
        </StylWrapperAllSettings>
      )}

      <StylBtnSaveAndClose onClick={switchVisible}>
        Сохранить и закрыть
      </StylBtnSaveAndClose>
    </StylModalSettings>
  );
};

export default ModalSettings;
