import useActionUsers from "../../hooks/redux/useActionUsers";
import SettingsGame from "./../../components/SettingsGame/SettingsGame";
import SettingsGameVipStatus from "./../../components/SettingsGame/VipStatusSettings/SettingsGameVipStatus";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const SettingsGameView = ({ title }) => {
    const { profile } = useActionUsers();
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return (
        <>
            <SettingsGameVipStatus vip={profile.is_premium} />
            <SettingsGame />
        </>
    );
};

export default SettingsGameView;
