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

import { music_list } from "../../constants";
import FooterPageHome from "../PageHome/FooterPageHome/FooterPageHome";

const MusicPlayer = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
        loadTrack(track_index);
    });

    const [isActiveLike, setActiveLike] = useState(false);
    const [isActivePlayer, setActivePlayer] = useState(false);
    const [isVolume, setVolume] = useState(true);
    const [isRange, setRange] = useState(0);
    const [isCurrTime, setCurrTime] = useState("");
    const [isTotalDuration, setTotalDuration] = useState("");

    let track_index = 0;
    let isPlaying = false;
    let isRandom = false;
    let updateTimer;
    let curr_track = document.createElement("audio");

    function loadTrack(track_index) {
        clearInterval(updateTimer);
        reset();

        curr_track.src = "03087b";
        curr_track.load();
        updateTimer = setInterval(setUpdate, 1000);
        curr_track.addEventListener("ended", nextTrack);
    }

    function reset() {
        setCurrTime("00:00");
        setTotalDuration("00:00");
        setRange(0);
    }

    function randomTrack() {
        isRandom ? pauseRandom() : playRandom();
    }

    function playRandom() {
        isRandom = true;
    }
    function pauseRandom() {
        isRandom = false;
    }

    function playpauseTrack() {
        isPlaying ? pauseTrack() : playTrack();
        setActivePlayer(!isActivePlayer);
    }

    function playTrack() {
        curr_track.play();
        isPlaying = true;
        setActivePlayer(true);
    }

    function pauseTrack() {
        curr_track.pause();
        isPlaying = false;
        setActivePlayer(false);
    }

    function nextTrack() {
        if (track_index < music_list.length - 1 && isRandom === false) {
            track_index += 1;
        } else if (track_index < music_list.length - 1 && isRandom === true) {
            let random_index = Number.parseInt(
                Math.random() * music_list.length
            );
            track_index = random_index;
        } else {
            track_index = 0;
        }
        loadTrack(track_index);
        playTrack();
    }

    function prevTrack() {
        if (track_index > 0) {
            track_index -= 1;
        } else {
            track_index = music_list.length - 1;
        }
        loadTrack(track_index);
        playTrack();
    }

    function seekTo(e) {
        setRange(e.target.value);
        let seekto = curr_track.duration * (e.target.value / 100);
        curr_track.currentTime = seekto;
    }

    function setUpdate() {
        let seekPosition = 0;

        if (!isNaN(curr_track.duration)) {
            seekPosition = curr_track.currentTime * (100 / curr_track.duration);
            setRange(seekPosition);

            let currentMinutes = Math.floor(curr_track.currentTime / 60);
            let currentSeconds = Math.floor(
                curr_track.currentTime - currentMinutes * 60
            );
            let durationMinutes = Math.floor(curr_track.duration / 60);
            let durationSeconds = Math.floor(
                curr_track.duration - durationMinutes * 60
            );

            if (currentSeconds < 10) {
                currentSeconds = "0" + currentSeconds;
            }
            if (durationSeconds < 10) {
                durationSeconds = "0" + durationSeconds;
            }
            if (currentMinutes < 10) {
                currentMinutes = "0" + currentMinutes;
            }
            if (durationMinutes < 10) {
                durationMinutes = "0" + durationMinutes;
            }

            setCurrTime(currentMinutes + ":" + currentSeconds);
            setTotalDuration(durationMinutes + ":" + durationMinutes);
        }
    }

    const regulatorMusic = () => {
        if (isActivePlayer) {
            setVolume(false);
        } else {
            setVolume(true);
        }
    };

    return (
        <>
            <StylBoxPagePlayer>
                <StylBoxContainerMaxWidth>
                    <StylBoxFlexColumnFlexStart>
                        <HeaderFollowUs isFollow={true} isOnlyNetworks={true} />
                        <HeaderMenuPageHome />
                    </StylBoxFlexColumnFlexStart>
                </StylBoxContainerMaxWidth>
                <StylWrapperPlayer data-aos="fade-right">
                    <StylBoxCenterPlayer>
                        <StylBoxFuncPlayer>
                            <StylBtnPlayer
                                isActiveLike={isActiveLike}
                                onClick={() => setActiveLike(!isActiveLike)}
                            >
                                <i className="fas fa-heart"></i>
                            </StylBtnPlayer>
                            <StylBtnPlayer onClick={randomTrack}>
                                <i className="fas fa-random"></i>
                            </StylBtnPlayer>
                        </StylBoxFuncPlayer>
                        <StylImgPlayer
                            src={music_list[track_index].img}
                            alt="album music"
                        />
                        <StylInfoPlayer>
                            <StylTitlePlayer>
                                {music_list[track_index].name}
                            </StylTitlePlayer>
                            <StylArtistPlayer>
                                {music_list[track_index].artist}
                            </StylArtistPlayer>
                            <StylAlbumPlayer>
                                {music_list[track_index].album}
                            </StylAlbumPlayer>
                        </StylInfoPlayer>
                        <StylLinePlayer />
                        <StylControlMusic>
                            <StylSecondsMusicNow>
                                {isCurrTime}
                            </StylSecondsMusicNow>
                            <StylBoxPlayMusic>
                                <StylBtnNavMusic onClick={prevTrack}>
                                    <i className="fas fa-step-backward"></i>
                                </StylBtnNavMusic>
                                <StylBtnNavMusic onClick={playpauseTrack}>
                                    <i
                                        className={
                                            isActivePlayer
                                                ? "fas fa-pause"
                                                : "fas fa-play"
                                        }
                                    ></i>
                                </StylBtnNavMusic>
                                <StylBtnNavMusic onClick={nextTrack}>
                                    <i className="fas fa-step-forward"></i>
                                </StylBtnNavMusic>
                                <StylBtnNavMusic onClick={regulatorMusic}>
                                    <i
                                        className={
                                            isVolume
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
                            value="0"
                            onInput={seekTo}
                            onChange={seekTo}
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
