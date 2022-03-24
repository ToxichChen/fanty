import IntroPageHome from "../../components/PageHome/IntroPageHome/IntroPageHome";
import FeaturePageHome from "../../components/PageHome/FeaturesPageHome/FeaturePageHome";
import ComplexityHome from "./../../components/PageHome/ComplexityHome/ComplexityHome";
import FooterPageHome from "../../components/PageHome/FooterPageHome/FooterPageHome";
import TaskInfoSlider from "../../components/TaskInfo/TaskInfoSlider";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const TaskInfo = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return (
        <>
            <TaskInfoSlider
                title={"Секс фанты"}
                description={
                    "Игра, которая позволит избавиться от ежедневного напряжения, убрать стеснение, получить наслаждение и при всём этом, не обидеть друг друга, а наоборот - зажечь. Здесь собрана нежность и пошлость, которая позволит разнообразить классическую модель секса."
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
