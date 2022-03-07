import PayForGame from "../../components/PayForGame/PayForGame";
import useChangeTitlePage from "../../hooks/useChangeTitlePage";

const PayGameView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <PayForGame />;
};

export default PayGameView;
