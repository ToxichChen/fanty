import React, { useEffect } from 'react';
import { SettingsGame } from '../../components';

const SettingsGameView = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <SettingsGame />
    </>
  );
};

export default SettingsGameView;
