import SettingGameComplexity from "./../../components/SettingGameComplexity/SettingGameComplexity";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const SettingsGameComplexityView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <SettingGameComplexity />;
};

export default SettingsGameComplexityView;
