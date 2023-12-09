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
    <div className="mx-auto flex flex-col">
      <ReactPlayer
        url={url}
        loop={true}
        playing={isPlaying}
        volume={volume}
        width={0}
        height={0}
      />
      <button onClick={handlePlaying}>
        <div className={`opacity-${isPlaying ? 100 : 50}`}>
          <img src={img} alt="icon" />
        </div>
      </button>
      <input
        type="range"
        name="volume"
        id="volume"
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
