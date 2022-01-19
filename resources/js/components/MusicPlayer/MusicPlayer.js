import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  StylBoxCenterPlayer,
  StylBoxPagePlayer,
  StylImgPlayer,
  StylBoxFuncPlayer,
  StylBtnPlayer,
  StylInfoPlayer,
  StylTitlePlayer,
  StylArtistPlayer,
  StylAlbumPlayer,
  StylLinePlayer,
  StylControlMusic,
  StylSecondsMusicNow,
  StylBoxPlayMusic,
  StylSecondsMusicDuration,
  StylBtnNavMusic,
  StylLinePlayerNow,
  StylWrapperPlayer,
} from './MusicPlayer.styled';

import { HeaderMenuPageHome } from '..';
import { musicPlayer } from '../../constants';

const MusicPlayer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const [isActiveLike, setActiveLike] = useState(false);
  const [isActivePlayer, setActivePlayer] = useState(false);
  const [isVolume, setVolume] = useState(true);
  const [isRange, setRange] = useState(0);

  const playerMusic = () => {
    if (isActivePlayer) {
      setActivePlayer(false);
    } else {
      setActivePlayer(true);
    }
  };

  const regulatorMusic = () => {
    if (isActivePlayer) {
      setVolume(false);
    } else {
      setVolume(true);
    }
  };

  const changeRange = (e) => {
    setRange(e.target.value);
  };

  return (
    <>
      <StylBoxPagePlayer>
        <HeaderMenuPageHome />
        <StylWrapperPlayer data-aos='fade-right'>
          <StylBoxCenterPlayer>
            <StylBoxFuncPlayer>
              <StylBtnPlayer
                isActiveLike={isActiveLike}
                onClick={() => setActiveLike(!isActiveLike)}
              >
                <i className='fas fa-heart'></i>
              </StylBtnPlayer>
              <StylBtnPlayer>
                <i className='fas fa-random'></i>
              </StylBtnPlayer>
            </StylBoxFuncPlayer>
            <StylImgPlayer src={musicPlayer.imgUrl} alt='album music' />
            <StylInfoPlayer>
              <StylTitlePlayer>{musicPlayer.title}</StylTitlePlayer>
              <StylArtistPlayer>{musicPlayer.artist}</StylArtistPlayer>
              <StylAlbumPlayer>{musicPlayer.album}</StylAlbumPlayer>
            </StylInfoPlayer>
            <StylLinePlayer />
            <StylControlMusic>
              <StylSecondsMusicNow>0:00</StylSecondsMusicNow>
              <StylBoxPlayMusic>
                <StylBtnNavMusic>
                  <i className='fas fa-step-backward'></i>
                </StylBtnNavMusic>
                <StylBtnNavMusic onClick={playerMusic}>
                  <i
                    className={isActivePlayer ? 'fas fa-pause' : 'fas fa-play'}
                  ></i>
                </StylBtnNavMusic>
                <StylBtnNavMusic>
                  <i className='fas fa-step-forward'></i>
                </StylBtnNavMusic>
                <StylBtnNavMusic onClick={regulatorMusic}>
                  <i
                    className={
                      isVolume ? 'fas fa-volume-up' : 'fas fa-volume-mute'
                    }
                  />
                </StylBtnNavMusic>
              </StylBoxPlayMusic>
              <StylSecondsMusicDuration>2:55</StylSecondsMusicDuration>
            </StylControlMusic>
            <StylLinePlayerNow
              type='range'
              id='seek-slider'
              max='100'
              onInput={changeRange}
              onChange={changeRange}
              isWidth={isRange}
            />
            <audio
              src='https://assets.codepen.io/4358584/Anitek_-_Komorebi.mp3'
              preload='metadata'
              loop
            ></audio>
          </StylBoxCenterPlayer>
        </StylWrapperPlayer>
      </StylBoxPagePlayer>
    </>
  );
};

export default MusicPlayer;
