import TaskGamePage from "../../components/TaskGame/TaskGamePage";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const TaskGameView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <TaskGamePage />;
};

export default TaskGameView;
