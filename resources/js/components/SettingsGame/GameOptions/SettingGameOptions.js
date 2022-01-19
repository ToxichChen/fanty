import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  StylBoxSettingsGame,
  StylBtnOpenSetting,
  StylWrapperRadioBtn,
  StylRadioSetting,
  StylLabelRadio,
  StylBoxWrapperOptions,
  BtnMoreSettings,
  StylWrapperSettings,
  ModalSettings,
} from './../../';
import { ListOptionArr } from '../../../constants';


const SettingGameOptions = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [isSelect, setSelect] = useState(item.optionsBasic[0].value);
  const [isShowOption, setShowOption] = useState(false);
  const [isShowModal, setShowModal] = useState(false);

  const showAnotherOption = () => {
    setShowOption(!isShowOption);
  };

  const handleSelectChange = (e) => {
    const value = e.currentTarget.value;
    setSelect(value);
  };

  const handleModal = () => {
    setShowModal(!isShowModal);
    setSelect(item.optionsBasic[1].value);
  };

  return (
    <StylBoxSettingsGame key={item.id} id={item.id}>
      <StylBtnOpenSetting onClick={showAnotherOption} isShow={isShowOption}>
        {item.title} <i className='fas fa-chevron-right'></i>
      </StylBtnOpenSetting>
      <StylWrapperSettings isShow={isShowOption}>
        <form>
          <StylBoxWrapperOptions isVip={item.is_premium === 1? true: false}>
            {ListOptionArr.optionsBasic.map((elem) => {
              return (
                <StylWrapperRadioBtn key={elem.value}>
                  <StylRadioSetting
                    id={elem.value}
                    type='radio'
                    name='radio'
                    checked={isSelect === elem.value}
                    value={elem.value}
                    onChange={handleSelectChange}
                  />
                  <StylLabelRadio htmlFor={elem.value} />
                  {elem.title}
                </StylWrapperRadioBtn>
              );
            })}
          </StylBoxWrapperOptions>
        </form>
        {!item.is_premium && 'Доступно в полной версии игры'}
        <BtnMoreSettings type='button' onClick={handleModal}>
          <i className='fas fa-cog'></i>
          {item.is_premium ? 'Настройки' : 'Смотреть настройки'}
        </BtnMoreSettings>
      </StylWrapperSettings>
      <ModalSettings
        visible={isShowModal}
        switchVisible={handleModal}
        item={item}
      />
    </StylBoxSettingsGame>
  );
};

export default SettingGameOptions;
