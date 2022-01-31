import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import TaskGamePage from "../../components/TaskGame/TaskGamePage";
import imgBgJPG from "./../../assets/bg/bg-image.jpg";

const TaskGameView = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);

    return (
        <>
            <TaskGamePage
                title="Андрей"
                text="Ты целуешь её в 5 мест по своему выбору, а она должна ответить поцелуем в те же места"
                img={imgBgJPG}
                isTime={true}
                isTimeDuration={20}
                level="level4"
            />
        </>
    );
};

export default TaskGameView;
