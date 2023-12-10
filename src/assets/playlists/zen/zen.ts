import bowl from "./audio/one-bowl.mp3";
import bowlImg from "./img/bowl.png?icon";
import chant from "./audio/two-chant.mp3";
import chaImg from "./img/monk.png?icon";
import waves from "./audio/three-waves.mp3";
import wavImg from "./img/wave.png?icon";
import birds from "./audio/four-birds.mp3";
import birdImg from "./img/bird.png?icon";
import bell from "./audio/five-bell.mp3";
import bellImg from "./img/bell.png?icon";
import tone from "./audio/six-tone.mp3";
import toneImg from "./img/tone.png?icon";

const zen = [
  {
    id: 0,
    sound: bowl,
    image: bowlImg,
  },
  {
    id: 1,
    sound: chant,
    image: chaImg,
  },
  {
    id: 2,
    sound: waves,
    image: wavImg,
  },
  {
    id: 3,
    sound: birds,
    image: birdImg,
  },
  {
    id: 4,
    image: bellImg,
    sound: bell,
  },
  {
    id: 5,
    sound: tone,
    image: toneImg,
  },
];

export default zen;
