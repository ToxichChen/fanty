import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import HeaderPageHome from "./../../components/PageHome/HeaderPageHome/HeaderPageHome";
import FooterPageHome from "./../../components/PageHome/FooterPageHome/FooterPageHome";
import IntroCard from "./../../components/PageHome/IntroPageHome/IntroPageHome";

const HomeView = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);

    return (
        <>
            <HeaderPageHome />
            <IntroCard />
            <FooterPageHome />
        </>
    );
};

export default HomeView;
