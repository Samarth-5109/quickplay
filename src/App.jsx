import './App.css'
import { Card } from './components/ui/card'
import { PauseCircle, PlayCircle, SkipBack, SkipForward } from 'lucide-react'
import { useMediaPlayer } from "./hooks/useMediaPlayer";

function App() {
  const {
    track,
    handleNext,
    handlePrevious,
    togglePlayback,
    formatTime,
    progress, 
  } = useMediaPlayer();

  return (
    <div className='min-h-screen flex items-center justify-center bg-zinc-950 p-4'>
      <Card className="w-[320px] p-4 bg-zinc-900 border-zinc-800">
        <div className='flex flex-col items-center gap-4'>
          <div
            className="h-40 w-40 overflow-hidden rounded-lg bg-zinc-800"
            style={{
              animation: track.isPlaying ? 'spinSlow 8s linear infinite' : 'none',
            }}
          >
            <img
              src={track.artwork}
              alt={track.title}
              className="h-full w-full object-cover"
            />
          </div>

        </div>
        <div className='text-center'>
          <h2 className='text-lg font-semibold text-white'>{track.title}</h2>
          <p className='text-sm text-zinc-400'>{track.artist}</p>
          <p className='text-xs text-zinc-500 mt-1'> {track.source} • {track.isPlaying ? "Playing" : "Paused"}</p>
          <div className="mt-4">
            <div className="h-1 w-full bg-zinc-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between mt-2 text-xs text-zinc-400">
              <span>{formatTime(track.currentTime)}</span>
              <span>{formatTime(track.duration)}</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center gap-6'>
          <button className='text-zinc-300 hover:text-white' onClick={handlePrevious}>
            <SkipBack size={24} />
          </button>
          <button
            onClick={togglePlayback}
            className='text-white hover:scale-105 transition-transform'>
            {track.isPlaying ? (<PauseCircle size={42} />) : (<PlayCircle size={42} />)}
          </button>
          <button className='text-zinc-300 hover:text-white' onClick={handleNext}>
            <SkipForward size={24} />
          </button>
        </div>
      </Card>
    </div>
  )
}

export default App
