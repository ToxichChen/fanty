import { useState } from 'react';
import {
  StylPlayerMiniMusic,
  StylArrow,
  StylBoxPlayer,
  StylImgPlayer,
  StylWrapperOther,
  StylNameMusic,
  StylBoxControl,
  StylBtnControl,
} from './MiniPlayer.styled';

import { miniPlayer } from '../../../constants';
import useActionsWithRedux from '../../../hooks/useActionsWithRedux';

const MiniPlayer = () => {
  const { showMiniPlayer } = useActionsWithRedux();
  const [isShowBlock, setShowBlock] = useState(false);
  const [isPlay, setPlay] = useState(false);

  const musicPlay = () => {
    if (isPlay) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };

  return (
    <StylPlayerMiniMusic isShow={isShowBlock}>
      <StylArrow
        isShowPlayer={showMiniPlayer.showPlayer}
        isShow={isShowBlock}
        type='button'
        onClick={() => setShowBlock(!isShowBlock)}
      >
        <i className='fas fa-chevron-left' />
        <i className='fas fa-chevron-left' />
      </StylArrow>
      <StylBoxPlayer>
        <StylImgPlayer src={miniPlayer.imgUrl} alt='img music' />
        <StylWrapperOther>
          <StylNameMusic>{miniPlayer.title}</StylNameMusic>
          <StylBoxControl>
            <StylBtnControl type='button'>
              <i className='fas fa-step-backward'></i>
            </StylBtnControl>
            <StylBtnControl type='button' onClick={musicPlay}>
              <i className={isPlay ? 'fas fa-pause' : 'fas fa-play'}></i>
            </StylBtnControl>
            <StylBtnControl type='button'>
              <i className='fas fa-step-forward'></i>
            </StylBtnControl>
          </StylBoxControl>
        </StylWrapperOther>
      </StylBoxPlayer>
    </StylPlayerMiniMusic>
  );
};

export default MiniPlayer;
