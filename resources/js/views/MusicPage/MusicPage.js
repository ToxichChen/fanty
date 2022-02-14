import MusicPlayer from "./../../components/MusicPlayer/MusicPlayer";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const MusicPage = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return (
        <>
            <MusicPlayer />
        </>
    );
};

export default MusicPage;
