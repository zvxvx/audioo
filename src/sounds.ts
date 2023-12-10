import thunder from "./assets/audio/one-thunder.mp3";
import lightning from "./assets/img/lightning.png?icon";
import rain from "./assets/audio/two-rain.mp3";
import rainImg from "./assets/img/rain.png?icon";
import wind from "./assets/audio/three-wind.mp3";
import windImg from "./assets/img/wind.png?icon";
import insects from "./assets/playlists/backyard/audio/five-insects.mp3";
import insImg from "./assets/playlists/backyard/img/insect.png?icon";
import chimes from "./assets/playlists/backyard/audio/four-chimes.mp3";
import chiImg from "./assets/playlists/backyard/img/chimes.png?icon";
import water from "./assets/playlists/backyard/audio/six-water.mp3";
import watImg from "./assets/playlists/backyard/img/water.png?icon";

export const home = [
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
];

export const backyard = [
  {
    id: 0,
    sound: chimes,
    image: chiImg,
  },
  {
    id: 1,
    sound: insects,
    image: insImg,
  },
  {
    id: 2,
    sound: water,
    image: watImg,
  },
];
