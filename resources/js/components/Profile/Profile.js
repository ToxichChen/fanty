import { SectionPay, CenterPay } from "../PayForGame/PayForGame.styled";
import FooterPageHome from './../PageHome/FooterPageHome/FooterPageHome';
import HeaderFollowUs from "../PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import HeaderMenuPageHome from "../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import { StylBoxFlexColumnFlexStart, StylBoxContainerMaxWidth } from "./../common/BasicBoxes/BasicBoxes.styled";
import { WrapperImg } from './Profile.styled'
import useActionUsers from "../../hooks/redux/useActionUsers";

const Profile = () => {
  const { profile } = useActionUsers();

  return (
    <>
      <SectionPay>
        <StylBoxContainerMaxWidth>
          <StylBoxFlexColumnFlexStart>
            <HeaderFollowUs isFollow={true} isOnlyNetworks={true} />
            <HeaderMenuPageHome />
          </StylBoxFlexColumnFlexStart>
        </StylBoxContainerMaxWidth>
        <CenterPay>
          <WrapperImg>
            <i className="fa fa-user"></i>
          </WrapperImg>
        </CenterPay>
      </SectionPay>
      <FooterPageHome />
    </>
  );
}

export default Profile;