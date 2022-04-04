import Profile from "../../components/Profile/Profile";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
const ProfileUser = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <Profile />;
};

export default ProfileUser;
