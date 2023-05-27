import { playPause, volumeControl, audioGen} from '/audio.global.js';
import {iconOne, iconTwo, iconThree, iconFour, iconFive, iconSix, buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive, buttonSix, volumeOne, volumeTwo, volumeThree, volumeFour, volumeFive, volumeSix} from '../playlist.global.js'

//? icon storage
iconOne.src = "./img/fireplace.png";
iconOne.alt = "lightning";
iconOne.style.opacity = "0.5";
buttonOne.appendChild(iconOne);
iconTwo.src = "./img/rain.png";
iconTwo.alt = "rain";
iconTwo.style.opacity = "0.5";
buttonTwo.appendChild(iconTwo);
iconThree.src = "./img/subway.png";
iconThree.alt = "wind";
iconThree.style.opacity = "0.5";
buttonThree.appendChild(iconThree);
iconFour.src = "./img/kitty.png";
iconFour.alt = "chimes";
iconFour.style.opacity = "0.5";
buttonFour.appendChild(iconFour);
iconFive.src = "./img/book.png";
iconFive.alt = "insect";
iconFive.style.opacity = "0.5";
buttonFive.appendChild(iconFive);
iconSix.src = "./img/song.png";
iconSix.alt = "water";
iconSix.style.opacity = "0.5";
buttonSix.appendChild(iconSix);

//? audio 1 start
let one = audioGen("./audio/one-fireplace.mp3");
playPause(one, buttonOne, iconOne);
volumeControl(one, volumeOne);
//?audio 1 end

//? audio 2 start
let two = audioGen("./audio/two-roofrain.mp3");
playPause(two, buttonTwo, iconTwo);
volumeControl(two, volumeTwo);
//?audio 2 end

//? audio 3 start
let three = audioGen("./audio/three-train.mp3");
playPause(three, buttonThree, iconThree);
volumeControl(three, volumeThree);
//?audio 3 end

//? audio 4 start
let four = audioGen("./audio/four-purr.mp3");
playPause(four, buttonFour, iconFour);
volumeControl(four, volumeFour);
//?audio 4 end

//? audio 5 start
let five = audioGen("./audio/five-book.mp3");
playPause(five, buttonFive, iconFive);
volumeControl(five, volumeFive);
//?audio 5 end

//? audio 6 start
let six = audioGen("./audio/six-lofi.mp3");
playPause(six, buttonSix, iconSix);
volumeControl(six, volumeSix);
//?audio 6 end