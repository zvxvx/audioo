//? variable false until user hits play button. controls playback


//? function that uses our global boolean to play and pause the audio
let playPause = (audio, button) => {
    let isPlaying = false;
    button.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            button.textContent = "Play";
        } else {
            audio.play();
            isPlaying = true;
            button.textContent = "Pause";
        }
    })
};

let volumeControl = (audio, volume) => {
    volume.addEventListener("input", function () {
        audio.volume(volume.value);
    });
}

//? audio 1 start
const leaves = new Howl({
    src: ["./audio/leaves.mp3"],
    loop: true,
});
const volumeLeaves = document.getElementById("volumeLeaves");
const buttonLeaves = document.getElementById("buttonLeaves");
playPause(leaves, buttonLeaves);
volumeControl(leaves,volumeLeaves);
//?audio 1 end

//? audio 2 start
const rain = new Howl({
    src: ["./audio/rain.mp3"],
    loop: true,
});
const volumeRain = document.getElementById("volumeRain");
const buttonRain = document.getElementById("buttonRain");
playPause(rain, buttonRain);
volumeControl(rain,volumeRain);
//?audio 2 end