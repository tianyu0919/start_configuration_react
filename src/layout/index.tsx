import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import AudioControl from '@components/AudioControl';
// import AudioControl from '../../rollup/bundle.js';
// import '../../rollup/bundle.css';

import { Button } from 'antd';

const Layout = () => {
  const [audioList] = useState(['sczz.mp3', 'roar.mp3', 'xxx.mp3'])
  const [currentAudio, setCurrentAudio] = useState<string>('');

  const getRandom = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    // let random = useRandom(0, audioList.length);
    // setCurrentAudio(audioList[random]);
    console.log(currentAudio)
  }, [currentAudio])
  return (
    <>
      <Navigation title="归宿网" />
      <Button onClick={() => {
        let random = getRandom(0, audioList.length);
        setCurrentAudio(`http://localhost:9000/assets/audio/${audioList[random]}`);
      }}>切换音频</Button>
      {/* <AudioControl src={`http://localhost:9000/assets/audio/${currentAudio}`} /> */}
      <AudioControl
        show
        src={`${currentAudio}`}
        error={(e: Event, msg: string) => {
          console.log(e, msg);
        }}
      />
    </>
  )
}
export default Layout;