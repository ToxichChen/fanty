import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const ProfileUser = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);

    return <></>;
};

export default ProfileUser;
