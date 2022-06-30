/* eslint-disable react/jsx-no-duplicate-props */
import { useLayoutEffect } from 'react';
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

  useLayoutEffect(() => {
    function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date());
      let seconds = Math.floor((t / 1000) % 60);
      let minutes = Math.floor((t / 1000 / 60) % 60);
      let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function initializeClock(id, endtime) {
      let clock = document.getElementById(id);
      let daysSpan = clock.querySelector('.days');
      let hoursSpan = clock.querySelector('.hours');
      let minutesSpan = clock.querySelector('.minutes');
      let secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      let timeinterval = setInterval(updateClock, 1000);
    }

    let deadline = new Date(profile?.premium_expires_at !== null && profile.premium_expires_at); // for endless timer
    initializeClock('countdown', deadline);
  }, [])


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
          <div id="countdown" className={profile?.premium_expires_at === null ? 'hidden--countdown countdown' : 'countdown'} >
            <div className="countdown-number">
              <span className="days countdown-time"></span>
              <span className="countdown-text">:</span>
            </div>
            <div className="countdown-number">
              <span className="hours countdown-time"></span>
              <span className="countdown-text">:</span>
            </div>
            <div className="countdown-number">
              <span className="minutes countdown-time"></span>
              <span className="countdown-text">:</span>
            </div>
            <div className="countdown-number countdown-number--left">
              <span className="seconds countdown-time"></span>
            </div>
          </div>
        </CenterPay>
      </SectionPay>
      <FooterPageHome />
    </>
  );
}

export default Profile;