//? function controlling playback
let playPause = (audio, button, sound) => {
    let isPlaying = false;
    button.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            button.innerHTML = sound + '<br>' + 'play';
        } else {
            audio.play();
            isPlaying = true;
            button.innerHTML = sound + '<br>' + 'pause';
        }
    });
};

let volumeControl = (audio, volume) => {
    volume.addEventListener("input", function () {
        audio.volume(volume.value);
    });
};
//? generates new audio
let audioGen = (src) => {
    return new Howl({
        src: [src],
        loop: true,
    });
};

//? generates volume control for each sound
let volumeGen = (volume) => {
    volume.type = "range";
    volume.min = "0";
    volume.max = "1";
    volume.step = "0.01";
    volume.value = "1";
    volume.id = "volume";
};

//? container 
let containerGen = (container, className, button, volume) => {
    container.classList.toggle(className);
    container.appendChild(button);
    container.appendChild(volume);
};

//? variable storage
const containersOne = document.querySelector(".containersOne");
const containersTwo = document.querySelector(".containersTwo");
const containerOne = document.createElement("div");
const containerTwo = document.createElement("div");
const containerThree = document.createElement("div");
const containerFour = document.createElement("div");
const containerFive = document.createElement("div");
const containerSix = document.createElement("div");
const buttonOne = document.createElement("button");
const volumeOne = document.createElement("input");
const buttonTwo = document.createElement("button");
const volumeTwo = document.createElement("input");
const buttonThree = document.createElement("button");
const volumeThree = document.createElement("input");
const buttonFour = document.createElement("button");
const volumeFour = document.createElement("input");
const buttonFive = document.createElement("button");
const volumeFive = document.createElement("input");
const buttonSix = document.createElement("button");
const volumeSix = document.createElement("input");

//? volume control storage
volumeGen(volumeOne);
volumeGen(volumeTwo);
volumeGen(volumeThree);
volumeGen(volumeFour);
volumeGen(volumeFive);
volumeGen(volumeSix);

//? container storage for containersOne
containerGen(containerOne, "containerOne", buttonOne, volumeOne);
containerGen(containerTwo, "containerTwo", buttonTwo, volumeTwo);
containerGen(containerThree, "containerThree", buttonThree, volumeThree);
containerGen(containerFour, "containerFour", buttonFour, volumeFour);
containerGen(containerFive, "containerFive", buttonFive, volumeFive);
containerGen(containerSix, "containerSix", buttonSix, volumeSix);

//? append storage for containersOne
containersOne.appendChild(containerOne);
containersOne.appendChild(containerTwo);
containersOne.appendChild(containerThree);
containersTwo.appendChild(containerFour);
containersTwo.appendChild(containerFive);
containersTwo.appendChild(containerSix);

//? audio 1 start
let one = audioGen("./audio/one-thunder.ogg");
playPause(one, buttonOne, "🌩️");
volumeControl(one, volumeOne);
//?audio 1 end

//? audio 2 start
let two = audioGen("./audio/two-rain.ogg");
playPause(two, buttonTwo, "🌧️");
volumeControl(two, volumeTwo);
//?audio 2 end

//? audio 3 start
let three = audioGen("./audio/three-leaves.ogg");
playPause(three, buttonThree, "🍃");
volumeControl(three, volumeThree);
//?audio 3 end

//? audio 4 start
let four = audioGen("./audio/four-tibetan-bell.ogg");
playPause(four, buttonFour, "🪷");
volumeControl(four, volumeFour);
//?audio 4 end

//? audio 5 start
let five = audioGen("./audio/five-cars.ogg");
playPause(five, buttonFive, "🚗");
volumeControl(five, volumeFive);
//?audio 5 end

//? audio 6 start
let six = audioGen("./audio/six-fireplace.ogg");
playPause(six, buttonSix, "🔥");
volumeControl(six, volumeSix);
//?audio 6 end

buttonOne.innerHTML = "🌩️" + '<br>' + 'play';
buttonTwo.innerHTML = "🌧️" + '<br>' + 'play';
buttonThree.innerHTML = "🍃" + '<br>' + 'play';
buttonFour.innerHTML = "🪷" + '<br>' + 'play';
buttonFive.innerHTML = "🚗" + '<br>' + 'play';
buttonSix.innerHTML = "🔥" + '<br>' + 'play';
