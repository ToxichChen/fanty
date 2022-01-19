import React, { useEffect } from 'react';
import { SettingsGame, SettingsGameVipStatus } from '../../components';

const SettingsGameView = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <SettingsGameVipStatus vip={false} />
      <SettingsGame />
    </>
  );
};

export default SettingsGameView;
