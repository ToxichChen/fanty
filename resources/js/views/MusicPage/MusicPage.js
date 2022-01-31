import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import MusicPlayer from "./../../components/MusicPlayer/MusicPlayer";

const MusicPage = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);

    return (
        <>
            <MusicPlayer />
        </>
    );
};

export default MusicPage;
