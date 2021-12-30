import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import AudioControl from "@components/AudioControl";

import { Button } from "antd";

const Layout = () => {
  const [audioList] = useState(["sczz.mp3", "roar.mp3"]);
  const [currentAudio, setCurrentAudio] = useState<string>("");

  const useRandom = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    let random = useRandom(0, audioList.length);
    setCurrentAudio(audioList[random]);
  }, []);
  return (
    <>
      <Navigation title="归宿网" />
      <Button
        onClick={() => {
          let random = useRandom(0, audioList.length);
          setCurrentAudio(audioList[random]);
        }}
      >
        切换音频
      </Button>
      <AudioControl
        src={`http://localhost:9000/assets/audio/${currentAudio}`}
      />
    </>
  );
};
export default Layout;
