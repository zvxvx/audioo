import thunder from "./audio/one-thunder.mp3";
import lightning from "./img/lightning.png?icon";
import rain from "./audio/two-rain.mp3";
import rainImg from "./img/rain.png?icon";
import wind from "./audio/three-wind.mp3";
import windImg from "./img/wind.png?icon";
import insects from "./audio/five-insects.mp3";
import insImg from "./img/insect.png?icon";
import chimes from "./audio/four-chimes.mp3";
import chiImg from "./img/chimes.png?icon";
import water from "./audio/six-water.mp3";
import watImg from "./img/water.png?icon";

const backyard = [
  {
    id: 0,
    sound: thunder,
    image: lightning,
  },
  {
    id: 1,
    sound: rain,
    image: rainImg,
  },
  {
    id: 2,
    sound: wind,
    image: windImg,
  },
  {
    id: 3,
    sound: chimes,
    image: chiImg,
  },
  {
    id: 4,
    sound: insects,
    image: insImg,
  },
  {
    id: 5,
    sound: water,
    image: watImg,
  },
];

export default backyard;
