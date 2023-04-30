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

//? audio 1 start
const one = new Howl({
    src: ["./audio/one.ogg"],
    loop: true,
});
const volumeOne = document.getElementById("volumeOne");
const buttonOne = document.getElementById("buttonOne");
playPause(one, buttonOne, "🌩️", "⛈️");
volumeControl(one, volumeOne);
//?audio 1 end

//? audio 2 start
const two = new Howl({
    src: ["./audio/two.ogg"],
    loop: true,
});
const volumeTwo = document.getElementById("volumeTwo");
const buttonTwo = document.getElementById("buttonTwo");
playPause(two, buttonTwo, "🌬️", "🍃");
volumeControl(two, volumeTwo);
//?audio 2 end

//? audio 3 start
const three= new Howl({
    src: ["./audio/three.ogg"],
    loop: true,
});
const volumeThree = document.getElementById("volumeThree");
const buttonThree = document.getElementById("buttonThree");
playPause(three, buttonThree, "🧘", "🪷");
volumeControl(three, volumeThree);
//?audio 3 end
window.onload = () => {
    buttonOne.textContent = "🌩️";
    buttonTwo.textContent = '🌬️';
    buttonThree.textContent = '🧘';
}