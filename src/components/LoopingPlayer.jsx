import React from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const LoopingPlayer = () => {
  const { load, play } = useGlobalAudioPlayer();

  const handlePlay = () => {
    load("../src/assets/test.mp3", { autoplay: true, loop: true });
  };

  return (
    <div>
      <button onClick={handlePlay}>Play in Loop</button>
      <button onClick={play}>Play</button>
    </div>
  );
};

export default LoopingPlayer;
