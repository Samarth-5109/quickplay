import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/ui/card'
import { PlayCircle, SkipBack, SkipForward } from 'lucide-react'

function App() {
  const [track, setTrack] = useState({
    title: "Believer",
    artist: "Imagine Dragons",
    source: "YouTube Music",
    artwork: "https://...",
    isPlaying: true,
  })

  useEffect(()=>{
    const songs = [
      {
        title: "Believer",
        artist: "Imagine Dragons",
        source: "YouTube Music",
      },
      {
        title: "Numb",
        artist: "Linkin Park",
        source: "YouTube Music",
      },
    ];
    
    let index=0;
    const interval= setInterval(()=>{
      setTrack({
        ...songs[index],
        isPlaying:true
      })
      index=(index+1)%songs.length
    }, 5000)
    return ()=> clearInterval(interval)
  },[])

  return (
    <div className='min-h-screen flex items-center justify-center bg-zinc-950 p-4'>
      <Card className="w-[320px] p-4 bg-zinc-900 border-zinc-800">
        <div className='flex flex-col items-center gap-4'>
          <img src={track.artwork} alt={track.title} className='h-full w-full object-cover' />

        </div>
        <div className='text-center'>
          <h2 className='text-lg font-semibold text-white'>{track.title}</h2>
          <p className='text-sm text-zinc-400'>{track.artist}</p>
          <p className='text-xs text-zinc-500 mt-1'> {track.source} • {track.isPlaying ?"Playing" : "Paused"}</p>
        </div>
        <div className='flex items-center justify-center gap-6'>
          <button className='text-zinc-300 hover:text-white'>
            <SkipBack size={24} />
          </button>
          <button className='text-white hover:scale-105 transition-transform'>
            <PlayCircle size={42} />
          </button>
          <button className='text-zinc-300 hover:text-white'>
            <SkipForward size={24} />
          </button>
        </div>
      </Card>
    </div>
  )
}

export default App
