import useActionUsers from "../../hooks/redux/useActionUsers";
import SettingGameComplexity from "./../../components/SettingGameComplexity/SettingGameComplexity";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import SettingsGameVipStatus from "./../../components/SettingsGame/VipStatusSettings/SettingsGameVipStatus";

const SettingsGameComplexityView = ({ title }) => {
    const { profile } = useActionUsers();
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return (
        <>
            <SettingsGameVipStatus vip={profile.is_premium} />
            <SettingGameComplexity />
        </>);
};

export default SettingsGameComplexityView;
