import React, { useEffect } from 'react';

const ProfileUser = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return <></>;
};

export default ProfileUser;
