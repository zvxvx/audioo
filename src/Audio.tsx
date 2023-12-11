import { ChangeEvent, useState } from "react";
import ReactPlayer from "react-player";

type AudioProps = {
  url: string,
  img: string
}

const Audio = ({ url, img }: AudioProps) => {
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
      <ReactPlayer
        url={url}
        loop={true}
        playing={isPlaying}
        volume={volume}
        width={0}
        height={0}
      />
      <button onClick={handlePlaying}>
        <img src={img} alt="icon" style={{ opacity: `${volume}` }} />
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
        [&::-webkit-slider-thumb]:bg-slate-300
        [&::-webkit-slider-thumb]:rounded
        [&::-webkit-slider-thumb]:shadow-xl
        
        [&::-webkit-slider-runnable-track]:w-full
        [&::-webkit-slider-runnable-track]:h-4
        [&::-webkit-slider-runnable-track]:bg-slate-500
        [&::-webkit-slider-runnable-track]:rounded


        [&::-moz-range-thumb]:w-6
        [&::-moz-range-thumb]:h-6
        [&::-moz-range-thumb]:appearance-none
        [&::-moz-range-thumb]:bg-slate-300
        [&::-moz-range-thumb]:rounded
        [&::-moz-range-thumb]:shadow-xl
        
        [&::-moz-range-track]:w-full
        [&::-moz-range-track]:h-4
        [&::-moz-range-track]:bg-slate-500
        [&::-moz-range-track]:rounded"
        id="basic-range-slider-usage"
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
