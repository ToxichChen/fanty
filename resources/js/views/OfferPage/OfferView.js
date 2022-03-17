import Offer from "../../components/Offer/Offer";
import useChangeTitlePage from "../../hooks/useChangeTitlePage";

const OfferView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <Offer />;
};

export default OfferView;
