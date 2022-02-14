import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
const ProfileUser = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <></>;
};

export default ProfileUser;
