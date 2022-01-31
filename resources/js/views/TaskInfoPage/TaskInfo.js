import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import IntroPageHome from "../../components/PageHome/IntroPageHome/IntroPageHome";
import FeaturePageHome from "../../components/PageHome/FeaturesPageHome/FeaturePageHome";
import ComplexityHome from "./../../components/PageHome/ComplexityHome/ComplexityHome";
import FooterPageHome from "../../components/PageHome/FooterPageHome/FooterPageHome";
import TaskInfoSlider from "../../components/TaskInfo/TaskInfoSlider";

const TaskInfo = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);

    return (
        <>
            <TaskInfoSlider
                title={"Sex fanty"}
                description={
                    "Не каждый отваживается на использование специальных устройств во время полового контакта. "
                }
            />
            <IntroPageHome />
            <FeaturePageHome />
            <ComplexityHome />
            <FooterPageHome />
        </>
    );
};

export default TaskInfo;
