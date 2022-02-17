import { useSelector } from "react-redux";

function useActionMusic() {
    const showMiniPlayer = useSelector((state) => state.musicData.miniPlayer);

    return { showMiniPlayer };
}

export default useActionMusic;
