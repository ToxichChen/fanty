import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { musicMiniPlayer } from "../../redux/musicFeatures/musicAction";

function useActionMusic() {
    const dispatch = useDispatch();
    const showMiniPlayer = useSelector((state) => state.musicData.miniPlayer);

    const hiddenPlayer = useCallback(() => {
        dispatch(
            musicMiniPlayer({ showPlayer: false, track_index: 2, play: true })
        );
    }, [dispatch]);

    const showPlayer = useCallback(() => {
        dispatch(musicMiniPlayer({ showPlayer: true, ...showMiniPlayer }));
    }, [dispatch, showMiniPlayer]);

    return { showMiniPlayer, hiddenPlayer, showPlayer };
}

export default useActionMusic;
