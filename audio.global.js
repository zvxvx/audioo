//? function controlling playback
export function playPause (audio, button,image) {
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
export function volumeControl (audio, volume) {
    volume.addEventListener("input", function () {
        audio.volume(volume.value);
    });
};

//? generates new audio
export function audioGen (src) {
    return new Howl({
        src: [src],
        loop: true,
    });
};

//? generates volume properties for each sound
export function volumeGen (volume) {
    volume.type = "range";
    volume.min = "0";
    volume.max = "1";
    volume.step = "0.01";
    volume.value = "1";
    volume.class = "volume";
};

//? container
export function containerGen (
    container,
    classContainer,
    button,
    volume,
) {
    container.classList.toggle(classContainer);
    container.appendChild(button);
    container.appendChild(volume);
};