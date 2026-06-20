import { mockTracks } from "@/data/mockTracks";

let currentIndex=0;

export const getCurrentTrack=()=>{
    return mockTracks[currentIndex]
}

export const getNextTrack=()=>{
    currentIndex=(currentIndex+1)%mockTracks.length;
    return mockTracks[currentIndex]
}

export const getPreviousTrack = () => {
    currentIndex =
      (currentIndex - 1 + mockTracks.length) %
      mockTracks.length;
  
    return mockTracks[currentIndex];
  };