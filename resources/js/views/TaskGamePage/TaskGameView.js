import React, { useEffect } from 'react';
import {
  TaskGamePage,
} from '../../components';
import imgBgJPG from './../../img/bg/bg-image.jpg';

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
        time={false}
        level='level2'
      />
    </>
  );
};

export default TaskGameView;
