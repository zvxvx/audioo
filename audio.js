//? function controlling playback
let playPause = (audio, button, silence, sound) => {
    let isPlaying = false;
    button.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            button.textContent = silence;
        } else {
            audio.play();
            isPlaying = true;
            button.textContent = sound;
        }
    });
};

let volumeControl = (audio, volume) => {
    volume.addEventListener("input", function () {
        audio.volume(volume.value);
    });
};

//? generates volume control for each sound
let volumeGenerator = (volume) => {
    volume.type = 'range';
    volume.min = '0';
    volume.max = '1';
    volume.step = '0.01';
    volume.value = '1';
    volume.id ="volume";
}
//? container generator
let containerGenerator = (container, className, button, volume) => {
    container.classList.toggle(className);
    container.appendChild(button);
    container.appendChild(volume);
}

//? variable storage
const containers = document.querySelector('.containers')
const containerOne = document.createElement('div');
const containerTwo = document.createElement('div');
const containerThree = document.createElement('div');
const buttonOne = document.createElement('button');
const volumeOne = document.createElement('input');
const buttonTwo = document.createElement('button');
const volumeTwo = document.createElement('input');
const buttonThree = document.createElement("button");
const volumeThree = document.createElement("input");

//? volume control storage
volumeGenerator(volumeOne);
volumeGenerator(volumeTwo);
volumeGenerator(volumeThree);

//? append storage
containerGenerator(containerOne, "containerOne", buttonOne, volumeOne);
containers.appendChild(containerOne);
containerGenerator(containerTwo, "containerTwo", buttonTwo, volumeTwo);
containers.appendChild(containerOne);
containerGenerator(containerThree, "containerThree", buttonThree, volumeThree);
containers.appendChild(containerOne);
containers.appendChild(containerTwo);
containers.appendChild(containerThree);

//? audio 1 start
const one = new Howl({
    src: ["./audio/one.ogg"],
    loop: true,
});
playPause(one, buttonOne, "🌩️", "⛈️");
volumeControl(one, volumeOne);
//?audio 1 end

//? audio 2 start
const two = new Howl({
    src: ["./audio/two.ogg"],
    loop: true,
});
playPause(two, buttonTwo, "🌬️", "🍃");
volumeControl(two, volumeTwo);
//?audio 2 end

//? audio 3 start
const three= new Howl({
    src: ["./audio/three.ogg"],
    loop: true,
});
playPause(three, buttonThree, "🧘", "🪷");
volumeControl(three, volumeThree);
//?audio 3 end

window.onload = () => {
    buttonOne.textContent = "🌩️";
    buttonTwo.textContent = '🌬️';
    buttonThree.textContent = '🧘';
}