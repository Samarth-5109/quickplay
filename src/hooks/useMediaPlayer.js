import { useState } from "react";
import {
  getCurrentTrack,
  getNextTrack,
  getPreviousTrack,
} from "../services/mediaService";

export const useMediaPlayer = () => {
  const [track, setTrack] = useState(getCurrentTrack());

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

  return {
    track,
    handleNext,
    handlePrevious,
    togglePlayback,
  };
};