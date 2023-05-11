//? function controlling playback
let playPause = (audio, button,image) => {
    let isPlaying = false;
    button.addEventListener("click", () => {
        if (isPlaying) {
            audio.stop();
            isPlaying = false;
            image.style.opacity = "0.5";
        } else {
            audio.play();
            audio.fade(0, 1, 3000);
            isPlaying = true;
            image.style.opacity = "1";
        }
    });
};
//? allows user to control slider
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

//? generates volume properties for each sound
let volumeGen = (volume) => {
    volume.type = "range";
    volume.min = "0";
    volume.max = "1";
    volume.step = "0.01";
    volume.value = "1";
    volume.class = "volume";
};

//? container
let containerGen = (
    container,
    classContainer,
    button,
    volume,
) => {
    container.classList.toggle(classContainer);
    container.appendChild(button);
    container.appendChild(volume);
};

//? variable storage
const containers = document.querySelector(".containers");
const containerOne = document.createElement("div");
const containerTwo = document.createElement("div");
const containerThree = document.createElement("div");
const containerFour = document.createElement("div");
const containerFive = document.createElement("div");
const containerSix = document.createElement("div");
const iconOne = document.createElement("img");
const iconTwo = document.createElement("img");
const iconThree = document.createElement("img");
const iconFour = document.createElement("img");
const iconFive = document.createElement("img");
const iconSix = document.createElement("img");
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

//? container storage for under containers
containerGen(
    containerOne,
    "container",
    buttonOne,
    volumeOne,
);
containerGen(
    containerTwo,
    "container",
    buttonTwo,
    volumeTwo,
);
containerGen(
    containerThree,
    "container",
    buttonThree,
    volumeThree,
);
containerGen(
    containerFour,
    "container",
    buttonFour,
    volumeFour,
);
containerGen(
    containerFive,
    "container",
    buttonFive,
    volumeFive,
);
containerGen(
    containerSix,
    "container",
    buttonSix,
    volumeSix,
);

//? append storage for containersOne and ContainersTwo
containers.appendChild(containerOne);
containers.appendChild(containerTwo);
containers.appendChild(containerThree);
containers.appendChild(containerFour);
containers.appendChild(containerFive);
containers.appendChild(containerSix);

//? icon storage
iconOne.src = "./img/one.png";
iconOne.alt = "bowl";
iconOne.style.opacity = "0.5";
buttonOne.appendChild(iconOne);
iconTwo.src = "./img/two.png";
iconTwo.alt = "monk";
iconTwo.style.opacity = "0.5";
buttonTwo.appendChild(iconTwo);
iconThree.src = "./img/three.png";
iconThree.alt = "wave";
iconThree.style.opacity = "0.5";
buttonThree.appendChild(iconThree);
iconFour.src = "./img/brownian.png";
iconFour.alt = "bird";
iconFour.style.opacity = "0.5";
buttonFour.appendChild(iconFour);
iconFive.src = "./img/pink.png";
iconFive.alt = "bell";
iconFive.style.opacity = "0.5";
buttonFive.appendChild(iconFive);
iconSix.src = "./img/fan.png";
iconSix.alt = "wind";
iconSix.style.opacity = "0.5";
buttonSix.appendChild(iconSix);

//? audio 1 start
let one = audioGen("./audio/one-drone.mp3");
playPause(one, buttonOne, iconOne);
volumeControl(one, volumeOne);
//?audio 1 end

//? audio 2 start
let two = audioGen("./audio/two-phase.mp3");
playPause(two, buttonTwo, iconTwo);
volumeControl(two, volumeTwo);
//?audio 2 end

//? audio 3 start
let three = audioGen("./audio/three-pulse.mp3");
playPause(three, buttonThree, iconThree);
volumeControl(three, volumeThree);
//?audio 3 end

//? audio 4 start
let four = audioGen("./audio/four-brown.mp3");
playPause(four, buttonFour, iconFour);
volumeControl(four, volumeFour);
//?audio 4 end

//? audio 5 start
let five = audioGen("./audio/five-pink.mp3");
playPause(five, buttonFive, iconFive);
volumeControl(five, volumeFive);
//?audio 5 end

//? audio 6 start
let six = audioGen("./audio/six-fan.mp3");
playPause(six, buttonSix, iconSix);
volumeControl(six, volumeSix);
//?audio 6 end