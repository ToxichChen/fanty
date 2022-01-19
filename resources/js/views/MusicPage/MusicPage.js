import { useEffect } from 'react';
import { MusicPlayer } from './../../components/';

const MusicPage = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <MusicPlayer />
    </>
  );
};

export default MusicPage;
