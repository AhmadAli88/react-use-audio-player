import React from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const StopPlayer = () => {
  const { load, play, stop } = useGlobalAudioPlayer();

  const handlePlay = () => {
    load("../src/assets/test.mp3", { autoplay: true });
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default StopPlayer;
