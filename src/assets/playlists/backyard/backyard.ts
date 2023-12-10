import insects from "./audio/five-insects.mp3";
import insImg from "./img/insect.png?icon";
import chimes from "./audio/four-chimes.mp3";
import chiImg from "./img/chimes.png?icon";
import water from "./audio/six-water.mp3";
import watImg from "./img/water.png?icon";

const backyard = [
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

export default backyard;
