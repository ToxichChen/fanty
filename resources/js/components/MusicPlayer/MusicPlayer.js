import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
    StylWrapperPlayer,
    StylLinePlayer,
    StylBoxCenterPlayer,
    StylBoxPagePlayer,
    StylImgPlayer,
    StylBoxFuncPlayer,
    StylBtnPlayer,
    StylInfoPlayer,
    StylTitlePlayer,
    StylArtistPlayer,
    StylAlbumPlayer,
    StylControlMusic,
    StylSecondsMusicNow,
    StylBoxPlayMusic,
    StylSecondsMusicDuration,
    StylBtnNavMusic,
    StylLinePlayerNow
} from "./MusicPlayer.styled";
import musykaImg from './../../assets/bg/muzyka.png'

import HeaderMenuPageHome from "./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import HeaderFollowUs from "./../PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import { StylBoxFlexColumnFlexStart, StylBoxContainerMaxWidth } from "./../common/BasicBoxes/BasicBoxes.styled";

import FooterPageHome from "../PageHome/FooterPageHome/FooterPageHome";
import useActionMusic from "../../hooks/redux/useActionMusic";
const MusicPlayer = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    const {
        playMusic,
        changeCurrentTimeClick,
        SkipSong,
        changeRandom,
        changeVolume,
        showMiniPlayer,
        musicList
    } = useActionMusic();
    let isCurrentTime = showMiniPlayer.currentTime;
    let isDuration = showMiniPlayer.duration;
    const [isRangeVolume, setRangeVolume] = useState(showMiniPlayer.volume * 100);
    const [isShowVolume, setShowVolume] = useState(false);
    const [isActiveLike, setActiveLike] = useState(false);
    const [isRange, setIsRange] = useState(1);
    const [isCurrTime, setIsCurrTime] = useState('00:00');
    const [isTotalDuration, setTotalDuration] = useState('00:00');

    const seekTo = (e) => {
        const seekto = Math.floor(isNaN(isDuration) ? 0 : isDuration * (e.target.value / 100));
        changeCurrentTimeClick(seekto);
        isCurrentTime = seekto;
        setIsRange(e.target.value);
    }

    useEffect(() => {
        isCurrentTime = showMiniPlayer.currentTimeClick
    }, [showMiniPlayer.currentTimeClick]);


    useEffect(() => {
        isDuration = showMiniPlayer.duration
    }, [showMiniPlayer.duration]);

    useEffect(() => {
        let interval;
        clearInterval(interval);

        if (showMiniPlayer.play) {
            interval = setInterval(() => {
                let seekPosition = 0;

                seekPosition = Math.floor(parseFloat(isCurrentTime) * (100 / isDuration));
                setIsRange(seekPosition);

                let currentMinutes = Math.floor(isCurrentTime / 60);
                let currentSeconds = Math.floor(
                    isCurrentTime - currentMinutes * 60
                );
                let durationMinutes = Math.floor(isDuration / 60);
                let durationSeconds = Math.floor(
                    isDuration - durationMinutes * 60
                );

                if (currentSeconds < 10) {
                    currentSeconds = '0' + currentSeconds;
                }
                if (durationSeconds < 10) {
                    durationSeconds = '0' + durationSeconds;
                }
                if (currentMinutes < 10) {
                    currentMinutes = '0' + currentMinutes;
                }
                if (durationMinutes < 10) {
                    durationMinutes = '0' + durationMinutes;
                }

                setIsCurrTime(currentMinutes + ':' + currentSeconds);
                setTotalDuration(durationMinutes + ':' + durationSeconds)
                isCurrentTime++
            }, 1000)
        }

        return () => clearInterval(interval);
    }, [showMiniPlayer.play,
    showMiniPlayer.trackIndex,
    showMiniPlayer.currentTimeClick,
    showMiniPlayer.duration]);

    useEffect(() => setRangeVolume(showMiniPlayer.volume * 100), [showMiniPlayer.volume])

    return (
        <>
            <StylBoxPagePlayer>
                <StylBoxContainerMaxWidth>
                    <StylBoxFlexColumnFlexStart>
                        <HeaderFollowUs isFollow={true} isOnlyNetworks={true} />
                        <HeaderMenuPageHome />
                    </StylBoxFlexColumnFlexStart>
                </StylBoxContainerMaxWidth>
                <StylWrapperPlayer>
                    <StylBoxCenterPlayer>
                        <StylBoxFuncPlayer>
                            <StylBtnPlayer
                                isActiveLike={isActiveLike}
                                onClick={() => setActiveLike(!isActiveLike)}
                            >
                                <i className="fas fa-heart"></i>
                            </StylBtnPlayer>
                            <StylBtnPlayer
                                isActiveLike={showMiniPlayer.random}
                                onClick={() => {
                                    changeRandom();
                                }
                                }>
                                <i className="fas fa-random"></i>
                            </StylBtnPlayer>
                        </StylBoxFuncPlayer>
                        <StylImgPlayer
                            src={
                                musicList.length === 0 ?
                                    musykaImg :
                                    musicList[showMiniPlayer.trackIndex].img_src !== undefined ?
                                        musicList[showMiniPlayer.trackIndex].img_src :
                                        musykaImg
                            }
                            alt="album music"
                        />
                        <StylInfoPlayer>
                            <StylTitlePlayer>
                                {musicList.length !== 0 ? musicList[showMiniPlayer.trackIndex].title : ''}
                            </StylTitlePlayer>
                            <StylArtistPlayer>
                                {musicList.length !== 0 ? musicList[showMiniPlayer.trackIndex].artist : ''}
                            </StylArtistPlayer>
                            <StylAlbumPlayer>
                                {musicList.length !== 0 ? musicList[showMiniPlayer.trackIndex].album : ''}
                            </StylAlbumPlayer>
                        </StylInfoPlayer>
                        <StylLinePlayer />
                        <StylControlMusic>
                            <StylSecondsMusicNow>
                                {isCurrTime}
                            </StylSecondsMusicNow>
                            <StylBoxPlayMusic>
                                <StylBtnNavMusic onClick={() => musicList.length !== 0 && SkipSong(false)
                                }>
                                    <i className="fas fa-step-backward"></i>
                                </StylBtnNavMusic>
                                <StylBtnNavMusic onClick={() => {
                                    musicList.length !== 0 && playMusic(!showMiniPlayer.play)
                                }}>
                                    <i
                                        className={
                                            showMiniPlayer.play
                                                ? "fas fa-pause"
                                                : "fas fa-play"
                                        }
                                    ></i>
                                </StylBtnNavMusic>
                                <StylBtnNavMusic onClick={() => musicList.length !== 0 && SkipSong()
                                }>
                                    <i className="fas fa-step-forward"></i>
                                </StylBtnNavMusic>
                                <StylBtnNavMusic
                                    onMouseEnter={() => setShowVolume(true)}
                                    onMouseLeave={() => setShowVolume(false)}
                                >
                                    <StylLinePlayerNow
                                        isShow={isShowVolume}
                                        isShowMini={isShowVolume}
                                        isWidth={isRangeVolume}
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={isRangeVolume}
                                        onChange={
                                            (e) => {
                                                changeVolume(e.target.value / 100);
                                                setRangeVolume(e.target.value)
                                            }
                                        }
                                    />
                                    <i
                                        onClick={() => changeVolume(showMiniPlayer.volume === 0 ? 1 : 0)}
                                        className={
                                            showMiniPlayer.volume > 0
                                                ? "fas fa-volume-up"
                                                : "fas fa-volume-mute"
                                        }
                                    />
                                </StylBtnNavMusic>
                            </StylBoxPlayMusic>
                            <StylSecondsMusicDuration>
                                {isTotalDuration}
                            </StylSecondsMusicDuration>
                        </StylControlMusic>
                        <StylLinePlayerNow
                            isShow={true}
                            type="range"
                            min="1"
                            max="100"
                            value={isRange}
                            onChange={seekTo}
                            onInput={seekTo}
                            isWidth={isRange}
                        />
                    </StylBoxCenterPlayer>
                </StylWrapperPlayer>
            </StylBoxPagePlayer>
            <FooterPageHome />
        </>
    );
};

export default MusicPlayer;
