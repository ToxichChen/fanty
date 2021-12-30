import React, { useEffect } from 'react';
import { SettingGameComplexity } from './../../components';

const SettingsGameComplexityView = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return <SettingGameComplexity />;
};

export default SettingsGameComplexityView;
