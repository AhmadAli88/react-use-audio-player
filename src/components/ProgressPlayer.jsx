import React, { useEffect, useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const ProgressPlayer = () => {
  const { load, play, stop, getCurrentTime, getDuration } = useGlobalAudioPlayer();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setDuration(getDuration());
    }, 500);

    return () => clearInterval(interval);
  }, [getCurrentTime, getDuration]);

  const handlePlay = () => {
    load("../src/assets/test.mp3", { autoplay: true });
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={play}>Play/Pause</button>
      <button onClick={stop}>Stop</button>
      <div>
        <p>
          Current Time: {currentTime.toFixed(2)}s / Duration: {duration.toFixed(2)}s
        </p>
      </div>
    </div>
  );
};

export default ProgressPlayer;
