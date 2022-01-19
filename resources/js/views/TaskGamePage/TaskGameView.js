import React, { useEffect } from 'react';
import { TaskGamePage } from '../../components';
import imgBgJPG from './../../assets/bg/bg-image.jpg';

const TaskGameView = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <TaskGamePage
        title='Андрей'
        text='Ты целуешь её в 5 мест по своему выбору, а она должна ответить поцелуем в те же места'
        img={imgBgJPG}
        isTime={true}
        isTimeDuration={20}
        level='level4'
      />
    </>
  );
};

export default TaskGameView;
