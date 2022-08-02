import HeaderPageHome from "./../../components/PageHome/HeaderPageHome/HeaderPageHome";
import FooterPageHome from "./../../components/PageHome/FooterPageHome/FooterPageHome";
import IntroCard from "./../../components/PageHome/SectionIntroCard/IntroCard";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import ModalOld from "../../components/ModalOld/ModalOld";

const HomeView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return (
        <>
            <HeaderPageHome />
            <IntroCard />
            <FooterPageHome />
            <ModalOld />
        </>
    );
};

export default HomeView;
