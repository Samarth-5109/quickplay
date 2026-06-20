import { useEffect, useState } from "react";
import {
  getCurrentTrack,
  getNextTrack,
  getPreviousTrack,
} from "../services/mediaService";

export const useMediaPlayer = () => {
  const [track, setTrack] = useState(getCurrentTrack());

  useEffect(() => {
    if (!track.isPlaying) return;
  
    const interval = setInterval(() => {
      setTrack((prev) => ({
        ...prev,
        currentTime: Math.min(
          prev.currentTime + 1,
          prev.duration
        ),
      }));
    }, 1000);
  
    return () => clearInterval(interval);
  }, [track.isPlaying]);

  const handleNext = () => {
    setTrack(getNextTrack());
  };

  const handlePrevious = () => {
    setTrack(getPreviousTrack());
  };

  const togglePlayback = () => {
    setTrack((prev) => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
  
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = (track.currentTime / track.duration) * 100;

  return {
    track,
    handleNext,
    handlePrevious,
    togglePlayback,
    formatTime,
    progress,
  };
};