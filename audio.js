//? variable to help play and pause audio in playPause function
var isPlaying = false;

//? function that uses our global boolean to play and pause the audio
let playPause = (audio, button) => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        button.textContent = "Play";
    } else {
        audio.play();
        isPlaying = true;
        button.textContent = "Pause";
    }
};

//? audio 1 start
const leaves = new Howl({
    src: ["./audio/leaves.mp3"],
    loop: true,
});
const volumeLeaves = document.getElementById("volumeLeaves");
const buttonLeaves = document.getElementById("buttonLeaves");

buttonLeaves.addEventListener("click", function () {
    playPause(leaves, buttonLeaves);
});

volumeLeaves.addEventListener("input", function () {
    leaves.volume(volumeLeaves.value);
});
//?audio 1 end

//? audio 2 start
const rain = new Howl({
    src: ["./audio/rain.mp3"],
    loop: true,
});
const volumeRain = document.getElementById("volumeRain");
const buttonRain = document.getElementById("buttonRain");

buttonRain.addEventListener("click", function () {
    playPause(rain, buttonRain);
});

volumeRain.addEventListener("input", function () {
    rain.volume(volumeRain.value);
});
//?audio 2 end