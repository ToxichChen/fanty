import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import SettingGameComplexity from "./../../components/SettingGameComplexity/SettingGameComplexity";

const SettingsGameComplexityView = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);

    return <SettingGameComplexity />;
};

export default SettingsGameComplexityView;
