import HeaderPageHome from "./../../components/PageHome/HeaderPageHome/HeaderPageHome";
import FooterPageHome from "./../../components/PageHome/FooterPageHome/FooterPageHome";
import IntroCard from "./../../components/PageHome/SectionIntroCard/IntroCard";

const HomeView = ({ title }) => {
    return (
        <>
            <HeaderPageHome />
            <IntroCard />
            <FooterPageHome />
        </>
    );
};

export default HomeView;
