import React, { useEffect } from 'react';

const SettingsGame = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return <></>;
};

export default SettingsGame;
