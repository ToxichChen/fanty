import useActionsWithRedux from "../../hooks/useActionsWithRedux";
import SettingsGame from "./../../components/SettingsGame/SettingsGame";
import SettingsGameVipStatus from "./../../components/SettingsGame/VipStatusSettings/SettingsGameVipStatus";

const SettingsGameView = ({ title }) => {
    const { premium } = useActionsWithRedux();

    return (
        <>
            <SettingsGameVipStatus vip={premium} />
            <SettingsGame />
        </>
    );
};

export default SettingsGameView;
