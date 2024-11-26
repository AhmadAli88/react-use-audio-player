import React, { useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const VolumeControlPlayer = () => {
  const { load, play, isPlaying, setVolume } = useGlobalAudioPlayer();
  const [volume, setLocalVolume] = useState(1); // Default volume: 1 (max)

  const handlePlay = () => {
    load("../src/assets/test.mp3", { autoplay: true });
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setLocalVolume(newVolume);
    setVolume(newVolume);
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={play}>{isPlaying ? "Pause" : "Play"}</button>
      <div>
        <label>Volume: </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default VolumeControlPlayer;
