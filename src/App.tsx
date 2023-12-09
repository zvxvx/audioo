import { Howl } from 'howler';
import logo from './assets/img/audiologo.svg';
import lightning from './assets/img/bolt.png?audio';
import thunSound from './assets/audio/one-thunder.mp3';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

function App() {
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);
  const thunderRef = useRef<Howl | null>(null);

  function sliderValueCapture(e: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);
    setVolume(newValue);
  }

  const handlePlay = (audio: React.MutableRefObject<Howl | null>) => {
    setIsPlaying(!isPlaying)
    if (audio.current) {
      !isPlaying ?
        audio.current.play() :
        audio.current.pause();
    }
  }
  useEffect(() => {
    const thunder = new Howl({
      src: [thunSound],
      loop: true,
      autoplay: false,
      volume: volume
    })
    thunderRef.current = thunder;
    return () => {
      if (thunderRef.current) {
        thunderRef.current.stop();
        thunderRef.current.unload();
      }
    }
  }, []);

  useEffect(() => {
    thunderRef.current && thunderRef.current.volume(volume);
  }, [volume])

  return (
    <div className='h-[100dvh] flex flex-col items-center bg-purple-950/20 text-slate-200'>
      <img src={logo} alt="audioo" className='w-1/2' />
      <div className='flex flex-col p-5'>
        <button onClick={() => handlePlay(thunderRef)}><img src={lightning} alt='lightning' /></button>
        <input type="range" name="vol" id="vol" min={0} max={1} step={0.01} onChange={sliderValueCapture} value={volume} />
      </div>
    </div>
  )
}

export default App
