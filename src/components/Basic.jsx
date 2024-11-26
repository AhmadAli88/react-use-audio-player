import React from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const BasicAudioPlayer = () => {
  const { load, play, pause, isPlaying } = useGlobalAudioPlayer();

  const handlePlay = () => {
    load("../src/assets/test.mp3", { autoplay: false });
  };

  return (
    <div>
      <button onClick={handlePlay}>Load & Play</button>
      <button onClick={isPlaying ? pause : play}>
        {isPlaying ? "Pause" : "Resume"}
      </button>
    </div>
  );
};

export default BasicAudioPlayer;
