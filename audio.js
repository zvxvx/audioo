//? function controlling playback
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
    });
};

let volumeControl = (audio, volume) => {
    volume.addEventListener("input", function () {
        audio.volume(volume.value);
    });
};

//? audio 1 start
const one = new Howl({
    src: ["./audio/one.mp3"],
    loop: true,
});
const volumeOne = document.getElementById("volumeOne");
const buttonOne = document.getElementById("buttonOne");
playPause(one, buttonOne);
volumeControl(one, volumeOne);
//?audio 1 end

//? audio 2 start
const two = new Howl({
    src: ["./audio/two.mp3"],
    loop: true,
});
const volumeTwo = document.getElementById("volumeTwo");
const buttonTwo = document.getElementById("buttonTwo");
playPause(two, buttonTwo);
volumeControl(two, volumeTwo);
//?audio 2 end
