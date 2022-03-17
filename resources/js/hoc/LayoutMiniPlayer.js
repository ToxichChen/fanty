import useActionMusic from "../hooks/redux/useActionMusic";

const LayoutMiniPlayer = ({ children }) => {
    const { showMiniPlayer, hiddenPlayer } = useActionMusic();

    if (showMiniPlayer.showPlayer) {
        hiddenPlayer();
    }

    return children;
};

export default LayoutMiniPlayer;
