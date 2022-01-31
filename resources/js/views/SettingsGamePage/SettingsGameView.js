import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import SettingsGame from "./../../components/SettingsGame/SettingsGame";
import SettingsGameVipStatus from "./../../components/SettingsGame/VipStatusSettings/SettingsGameVipStatus";

const SettingsGameView = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);
    return (
        <>
            <SettingsGameVipStatus vip={false} />
            <SettingsGame />
        </>
    );
};

export default SettingsGameView;
