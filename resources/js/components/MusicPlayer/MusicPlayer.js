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
    StylLinePlayerNow,
} from "./MusicPlayer.styled";

import HeaderMenuPageHome from "./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import HeaderFollowUs from "./../PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import { StylBoxFlexColumnFlexStart, StylBoxContainerMaxWidth } from "./../common/BasicBoxes/BasicBoxes.styled";

import FooterPageHome from "../PageHome/FooterPageHome/FooterPageHome";
import useActionMusic from "../../hooks/redux/useActionMusic";
const MusicPlayer = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    const { playMusic, timeMusic, SkipSong, showMiniPlayer, musicList } = useActionMusic()
    const [isActiveLike, setActiveLike] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [isCurrTimeMusic, setCurrTimeMusic] = useState(1);
    const [isRange, setIsRange] = useState(1);
    const [isCurrTime, setIsCurrTime] = useState('00:00');
    const [isTotalDuration, setTotalDuration] = useState('00:00');
    let interval = '';

    const seekTo = (e) => {
        let seekto = Math.floor(isNaN(showMiniPlayer.duration) ? 0 : showMiniPlayer.duration * (e.target.value / 100));
        timeMusic(seekto);
        setIsRange(e.target.value)
    }


    useEffect(() => {
        clearInterval(interval);

        if (showMiniPlayer.play) {
            interval = setInterval(() => {
                let seekPosition = 0;

                seekPosition = Math.floor(parseFloat(isCurrTimeMusic) * (100 / showMiniPlayer.duration));
                setIsRange(seekPosition);
                setCurrTimeMusic(isCurrTime + 1)
                console.log(seekPosition, isCurrTime, showMiniPlayer.duration)

                let currentMinutes = Math.floor(isCurrTimeMusic / 60);
                let currentSeconds = Math.floor(
                    isCurrTimeMusic - currentMinutes * 60
                );
                let durationMinutes = Math.floor(showMiniPlayer.duration / 60);
                let durationSeconds = Math.floor(
                    showMiniPlayer.duration - durationMinutes * 60
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

            }, 1000)
        }


        return () => clearInterval(interval);
    }, [showMiniPlayer.play]);

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
                                isActiveLike={isRandom}
                                onClick={() => setIsRandom(!isRandom)}>
                                <i className="fas fa-random"></i>
                            </StylBtnPlayer>
                        </StylBoxFuncPlayer>
                        <StylImgPlayer
                            src={musicList.length !== 0 ? musicList[showMiniPlayer.trackIndex].img_src : './images/stay.png'}
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
                                <StylBtnNavMusic >
                                    <i
                                        className={
                                            true
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
