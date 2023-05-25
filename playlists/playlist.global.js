import { volumeGen, containerGen} from '/audio.global.js';
//? variable storage
const containers = document.querySelector(".containers");
const containerOne = document.createElement("div");
const containerTwo = document.createElement("div");
const containerThree = document.createElement("div");
const containerFour = document.createElement("div");
const containerFive = document.createElement("div");
const containerSix = document.createElement("div");
export const iconOne = document.createElement("img");
export const iconTwo = document.createElement("img");
export const iconThree = document.createElement("img");
export const iconFour = document.createElement("img");
export const iconFive = document.createElement("img");
export const iconSix = document.createElement("img");
export const buttonOne = document.createElement("button");
export const volumeOne = document.createElement("input");
export const buttonTwo = document.createElement("button");
export const volumeTwo = document.createElement("input");
export const buttonThree = document.createElement("button");
export const volumeThree = document.createElement("input");
export const buttonFour = document.createElement("button");
export const volumeFour = document.createElement("input");
export const buttonFive = document.createElement("button");
export const volumeFive = document.createElement("input");
export const buttonSix = document.createElement("button");
export const volumeSix = document.createElement("input");

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