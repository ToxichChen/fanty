import { SectionPay, CenterPay } from "../PayForGame/PayForGame.styled";
import FooterPageHome from './../PageHome/FooterPageHome/FooterPageHome';
import HeaderFollowUs from "../PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import HeaderMenuPageHome from "../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import { StylBoxFlexColumnFlexStart, StylBoxContainerMaxWidth } from "./../common/BasicBoxes/BasicBoxes.styled";
import { WrapperImg, BoxRowFlex, BoxColumnFlex, TitleProfile } from './Profile.styled'
import useActionUsers from "../../hooks/redux/useActionUsers";
import {
  FormInput,
} from './../Support/Support.styled';

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
          <TitleProfile>Ваш профиль</TitleProfile>
          <BoxRowFlex>
            <WrapperImg>
              <i className="fa fa-user"></i>
            </WrapperImg>

            <BoxColumnFlex>
              <FormInput
                placeholder="Ваше имя"
                name="name"
                type="text"
                defaultValue={profile.username}
                readOnly
              />
              <FormInput
                placeholder="Ваше имя"
                name="name"
                type="email"
                defaultValue={profile.email}
                readOnly
              />
            </BoxColumnFlex>
          </BoxRowFlex>
          <FormInput
            placeholder="Ваше имя"
            name="name"
            type="email"
            defaultValue={profile.email}
            readOnly
          />
        </CenterPay>
      </SectionPay>
      <FooterPageHome />
    </>
  );
}

export default Profile;