import { ChangeEvent, useState } from "react";
import ReactHowler from 'react-howler';

type AudioProps = {
  id: number,
  url: string,
  img: string
}

const Audio = ({ url, img, id }: AudioProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  function handlePlaying() {
    setIsPlaying(!isPlaying);
    !isPlaying ? false : true;
  }
  function changeVolume(e: ChangeEvent<HTMLInputElement>) {
    setVolume(Number(e.target.value));
  }

  return (
    <div className="mx-auto flex flex-col gap-5">
      <ReactHowler
        src={url}
        loop={true}
        playing={isPlaying}
        volume={volume}
      />
      <button onClick={handlePlaying}>
        <img src={img} alt="icon" className={`${isPlaying && "drop-shadow-[4px_4px_0_rgba(255,255,255,0.4)]"} w-full h-full`} style={{ opacity: `${volume}` }} />
      </button>
      <input
        className="w-full 
        bg-transparent 
        cursor-pointer 
        appearance-none 
        focus:outline-none
        [&::-webkit-slider-thumb]:w-6
        [&::-webkit-slider-thumb]:h-6
        [&::-webkit-slider-thumb]:-mt-1
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:bg-gray-400
        [&::-webkit-slider-thumb]:rounded
        [&::-webkit-slider-thumb]:shadow-xl
        
        [&::-webkit-slider-runnable-track]:w-full
        [&::-webkit-slider-runnable-track]:h-4
        [&::-webkit-slider-runnable-track]:bg-gray-400/30
        [&::-webkit-slider-runnable-track]:rounded

        [&::-moz-range-thumb]:w-6
        [&::-moz-range-thumb]:h-6
        [&::-moz-range-thumb]:appearance-none
        [&::-moz-range-thumb]:bg-gray-400
        [&::-moz-range-thumb]:rounded
        [&::-moz-range-thumb]:shadow-xl
        
        [&::-moz-range-track]:w-full
        [&::-moz-range-track]:h-4
        [&::-moz-range-track]:bg-gray-400/30
        [&::-moz-range-track]:rounded"
        id={`${id}`}
        type="range"
        name="volume"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={changeVolume}
      />
    </div>
  );
};

export default Audio;
