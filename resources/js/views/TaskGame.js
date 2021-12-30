import React, { useEffect } from 'react';

const TaskGame = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return <></>;
};

export default TaskGame;
