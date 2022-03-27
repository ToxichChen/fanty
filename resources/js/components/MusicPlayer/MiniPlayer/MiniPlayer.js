import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
    StylPlayerMiniMusic,
    StylArrow,
    StylBoxPlayer,
    StylImgPlayer,
    StylWrapperOther,
    StylNameMusic,
    StylBoxControl,
    StylBtnControl,
} from "./MiniPlayer.styled";

import useActionMusic from "../../../hooks/redux/useActionMusic";
import { routes } from "../../../Router";
import useActionAlert from "../../../hooks/redux/useActionAlert";

const MiniPlayer = () => {
    const location = useLocation();
    const { NotifyError } = useActionAlert()
    const { showMiniPlayer, playMusic, timeMusic, SkipSong, changeDuration, musicList, showPlayer, hiddenPlayer } = useActionMusic();
    const [isShowBlock, setShowBlock] = useState(false);
    const audioEl = useRef(null);
    let interval = '';

    const playPlayer = useCallback(() => {
        audioEl.current.load();
        fetch('./music/' + musicList[showMiniPlayer.trackIndex].media)
            .then(() => {
                audioEl.current.src = './music/' + musicList[showMiniPlayer.trackIndex].media;
            }).then(() => {
                audioEl.current.autoplay = true;
            })
            .catch(() => {
                NotifyError('Что-то пошло не так');

            })
    }, [audioEl, showMiniPlayer])


    useEffect(() => {
        audioEl.current.currentTime = showMiniPlayer.currentTime;
        showMiniPlayer.play && playPlayer();
    }, [showMiniPlayer.play])

    useEffect(() => {

        if (showMiniPlayer.play) {
            playPlayer();
        } else {
            audioEl.current.pause()
        }

        audioEl.current.addEventListener('ended', SkipSong)
        audioEl.current.currentTime = showMiniPlayer.currentTime;
    }, [showMiniPlayer.trackIndex, showMiniPlayer.play]);

    useEffect(() => {
        if (location.pathname === routes.musicFromSex) {
            hiddenPlayer();
        } else {
            showPlayer();
        }
    }, [location]);

    useEffect(() => {
        clearInterval(interval);

        if (showMiniPlayer.play) {
            interval = setInterval(() => {
                timeMusic(
                    (isNaN(audioEl.current.currentTime) ? 1 : audioEl.current.currentTime === 0 ? 1 : audioEl.current.currentTime),
                    (isNaN(audioEl.current.duration) ? 1 : audioEl.current.duration === 0 ? 1 : audioEl.current.duration)
                );
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [showMiniPlayer.trackIndex, showMiniPlayer.play])


    return (
        <StylPlayerMiniMusic
            isShow={isShowBlock}
            isShowPlayer={showMiniPlayer.showPlayer}
        >
            <StylArrow
                isShowPlayer={showMiniPlayer.showPlayer}
                isShow={isShowBlock}
                type="button"
                onClick={() => setShowBlock(!isShowBlock)}
            >
                <i className="fas fa-chevron-left" />
                <i className="fas fa-chevron-left" />
            </StylArrow>

            <audio src={musicList.length !== 0 ? './music/' + musicList[showMiniPlayer.trackIndex].media : ''} ref={audioEl} autoPlay={showMiniPlayer.play}></audio>
            <StylBoxPlayer>
                <StylImgPlayer src={musicList.length !== 0 ? musicList[showMiniPlayer.trackIndex].img_src : './images/stay.png'} alt="img music" isPlay={showMiniPlayer.play} />
                <StylWrapperOther>
                    <StylNameMusic>{musicList.length !== 0 ? musicList[showMiniPlayer.trackIndex].title : ''}</StylNameMusic>
                    <StylBoxControl>
                        <StylBtnControl type="button" onClick={() => musicList.length !== 0 && SkipSong(false)
                        }>
                            <i className="fas fa-step-backward"></i>
                        </StylBtnControl>
                        <StylBtnControl type="button" onClick={() => {
                            musicList.length !== 0 && playMusic(!showMiniPlayer.play);
                        }}>
                            <i
                                className={
                                    showMiniPlayer.play ? "fas fa-pause" : "fas fa-play"
                                }
                            ></i>
                        </StylBtnControl>
                        <StylBtnControl type="button" onClick={() => musicList.length !== 0 && SkipSong()
                        }>
                            <i className="fas fa-step-forward"></i>
                        </StylBtnControl>
                    </StylBoxControl>
                </StylWrapperOther>
            </StylBoxPlayer>
        </StylPlayerMiniMusic>
    );
};

export default MiniPlayer;
