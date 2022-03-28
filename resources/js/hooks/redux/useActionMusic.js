import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { musicMiniPlayer } from "../../redux/musicFeatures/musicAction";
import { getMusic } from "../../redux/musicFeatures/musicOperation";

function useActionMusic() {
    const dispatch = useDispatch();
    const showMiniPlayer = useSelector((state) => state.musicData.miniPlayer);
    const musicList = useSelector((state) => state.musicData.musicList);

    const hiddenPlayer = useCallback(() => {
        dispatch(
            musicMiniPlayer({ ...showMiniPlayer, showPlayer: false })
        );
    }, [dispatch, showMiniPlayer]);

    const showPlayer = useCallback(() => {
        dispatch(musicMiniPlayer({ ...showMiniPlayer, showPlayer: true }));
    }, [dispatch, showMiniPlayer]);

    const playMusic = useCallback((data) => {
        dispatch(musicMiniPlayer({ ...showMiniPlayer, play: data }))
    }, [dispatch, showMiniPlayer]);

    const timeMusic = useCallback((data, duration = showMiniPlayer.duration) => {
        dispatch(musicMiniPlayer({ ...showMiniPlayer, currentTime: data, duration: duration }))
    }, [dispatch, showMiniPlayer]);

    const changeRandom = useCallback(() => {
        dispatch(musicMiniPlayer({ ...showMiniPlayer, random: !showMiniPlayer.random }))
    }, [dispatch, showMiniPlayer]);


    const changeDuration = useCallback((data) => {
        dispatch(musicMiniPlayer({ ...showMiniPlayer, duration: data }))
    }, [dispatch, showMiniPlayer]);

    const SkipSong = useCallback((forward = true) => {
        let temp = showMiniPlayer.trackIndex;

        if (forward) {
            if (showMiniPlayer.trackIndex < musicList.length - 1 && !showMiniPlayer.random) {
                temp++;

                if (temp > musicList.length - 1) {
                    temp = 0
                }
            }
            else if (showMiniPlayer.random) {
                temp = Number.parseInt(Math.random() * musicList.length);
            } else {
                temp = 0;
            }
        } else {
            temp--;

            if (temp < 0) {
                temp = musicList.length - 1
            }
        }

        dispatch(musicMiniPlayer({ ...showMiniPlayer, currentTime: 1, play: true, trackIndex: temp }))

    }, [dispatch, showMiniPlayer, musicList])

    const getAllMusic = useCallback(() => {
        dispatch(getMusic())
    }, [dispatch]);

    const changeVolume = useCallback((data) => {
        dispatch(musicMiniPlayer({ ...showMiniPlayer, volume: data }))
    }, [dispatch, showMiniPlayer]);

    return {
        showMiniPlayer,
        musicList,
        getAllMusic,
        changeDuration,
        changeRandom,
        hiddenPlayer,
        showPlayer,
        playMusic,
        timeMusic,
        changeVolume,
        SkipSong
    };
}

export default useActionMusic;
