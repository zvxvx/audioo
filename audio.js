//? function controlling playback
let playPause = (audio, button,image) => {
    let isPlaying = false;
    button.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
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
const iconOne = document.createElement("img");
const iconTwo = document.createElement("img");
const iconThree = document.createElement("img");
const buttonOne = document.createElement("button");
const volumeOne = document.createElement("input");
const buttonTwo = document.createElement("button");
const volumeTwo = document.createElement("input");
const buttonThree = document.createElement("button");
const volumeThree = document.createElement("input");

//? icon storage
iconOne.src = "./img/lightning.png";
iconOne.alt = "lightning";
buttonOne.appendChild(iconOne);
iconTwo.src = "./img/rainy.png";
iconTwo.alt = "rain";
buttonTwo.appendChild(iconTwo);
iconThree.src = "./img/wind.png";
iconThree.alt = "wind";
buttonThree.appendChild(iconThree);

//? volume control storage
volumeGen(volumeOne);
volumeGen(volumeTwo);
volumeGen(volumeThree);

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

//? append storage for containersOne and ContainersTwo
containers.appendChild(containerOne);
containers.appendChild(containerTwo);
containers.appendChild(containerThree);

//? audio 1 start
let one = audioGen("./audio/one-thunder.mp3");
playPause(one, buttonOne, iconOne);
volumeControl(one, volumeOne);
//?audio 1 end

//? audio 2 start
let two = audioGen("./audio/two-rain.mp3");
playPause(two, buttonTwo, iconTwo);
volumeControl(two, volumeTwo);
//?audio 2 end

//? audio 3 start
let three = audioGen("./audio/three-wind.mp3");
playPause(three, buttonThree, iconThree);
volumeControl(three, volumeThree);
//?audio 3 end