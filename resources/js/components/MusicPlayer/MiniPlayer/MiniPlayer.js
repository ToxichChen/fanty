import { useState, useEffect, useRef, useCallback } from "react";
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
import musykaImg from './../../../assets/bg/muzyka.png'

import useActionMusic from "../../../hooks/redux/useActionMusic";
import useActionAlert from "../../../hooks/redux/useActionAlert";

const MiniPlayer = () => {
    const { NotifyError } = useActionAlert()
    const { showMiniPlayer, playMusic, changeDuration, timeMusic, SkipSong, musicList } = useActionMusic();
    const [isShowBlock, setShowBlock] = useState(false);
    const audioEl = useRef(null);

    const playPlayer = useCallback(() => {
        audioEl.current.load();
        fetch('./music/' + musicList[showMiniPlayer.trackIndex].media)
            .then(() => {
                audioEl.current.currentTime = 1;
                audioEl.current.volume = showMiniPlayer.volume;
            }).then(() => {
                audioEl.current.currentTime = showMiniPlayer.currentTime;
                audioEl.current.autoplay = true;
            })
            .catch(() => {
                NotifyError('Что-то пошло не так');

            })
    }, [audioEl, showMiniPlayer]);

    useEffect(() => {
        if (showMiniPlayer.play) {
            playPlayer();
        } else {
            audioEl.current.pause()
            timeMusic(
                (isNaN(audioEl.current.currentTime) ? 1 : audioEl.current.currentTime === 0 ? 1 : audioEl.current.currentTime),
                (isNaN(audioEl.current.duration) ? 1 : audioEl.current.duration === 0 ? 1 : audioEl.current.duration))
        }

        audioEl.current.addEventListener('ended', SkipSong);
    }, [showMiniPlayer.trackIndex, showMiniPlayer.play]);

    useEffect(() => {
        audioEl.current.currentTime = showMiniPlayer.currentTime;
        audioEl.current.currentTime = showMiniPlayer.currentTimeClick;
    }, [showMiniPlayer.currentTimeClick])

    window.onunload = function () {
        timeMusic(
            (isNaN(audioEl.current.currentTime) ? 1 : audioEl.current.currentTime === 0 ? 1 : audioEl.current.currentTime))

    }

    useEffect(() => {
        audioEl.current.volume = showMiniPlayer.volume;
    }, [showMiniPlayer.volume])

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

            <audio src={musicList.length !== 0 ? './music/' + musicList[showMiniPlayer.trackIndex].media : ''} ref={audioEl} autoPlay={showMiniPlayer.play ? 'autoplay' : false}></audio>
            <StylBoxPlayer>
                <StylImgPlayer src={
                    musicList.length === 0 ?
                        musykaImg :
                        musicList[showMiniPlayer.trackIndex].img_src !== undefined ?
                            musicList[showMiniPlayer.trackIndex].img_src :
                            musykaImg} alt="img music" isPlay={showMiniPlayer.play} />
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
