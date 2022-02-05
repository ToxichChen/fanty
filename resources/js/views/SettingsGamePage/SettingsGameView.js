import useActionsWithRedux from "../../hooks/useActionsWithRedux";
import SettingsGame from "./../../components/SettingsGame/SettingsGame";
import SettingsGameVipStatus from "./../../components/SettingsGame/VipStatusSettings/SettingsGameVipStatus";

const SettingsGameView = ({ title }) => {
    const { profile } = useActionsWithRedux();

    return (
        <>
            <SettingsGameVipStatus vip={profile.is_premium} />
            <SettingsGame />
        </>
    );
};

export default SettingsGameView;
