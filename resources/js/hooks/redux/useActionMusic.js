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


    const changeIndex = useCallback((data, player) => {
        dispatch(musicMiniPlayer({ ...player, currentTime: 0, play: true, trackIndex: data }))
    }, [dispatch]);


    const changeDuration = useCallback((data) => {
        dispatch(musicMiniPlayer({ ...showMiniPlayer, duration: data }))
    }, [dispatch, showMiniPlayer]);

    const SkipSong = useCallback((forward = true) => {
        let temp = showMiniPlayer.trackIndex;

        if (forward) {
            if (showMiniPlayer.trackIndex < musicList.length - 1) {
                temp++;

                if (temp > musicList.length - 1) {
                    temp = 0
                }
            } else {
                temp = 0;
            }
            dispatch(musicMiniPlayer({ ...showMiniPlayer, currentTime: 1, play: true, trackIndex: temp }))
            return false;
        } else {
            temp--;

            if (temp < 0) {
                temp = musicList.length - 1
            }
            dispatch(musicMiniPlayer({ ...showMiniPlayer, currentTime: 1, play: true, trackIndex: temp }))
            return false;
        }

    }, [dispatch, showMiniPlayer, musicList])

    const getAllMusic = useCallback(() => {
        dispatch(getMusic())
    }, [dispatch])

    return {
        getAllMusic,
        showMiniPlayer,
        changeDuration,
        changeRandom,
        hiddenPlayer,
        showPlayer,
        playMusic,
        timeMusic,
        changeIndex,
        musicList,
        SkipSong
    };
}

export default useActionMusic;
