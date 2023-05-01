> ## This .md exists to provides notes on things I've learned along the way

If I wanted to take this code and turn it into a function so I don't keep repeatedly pasting it over and over, I have to set it up to return, since the original code is set to a variable.

```jsx
//this would need to be pasted for each file traditionally
const two = new Howl({
    src: ["./audio/two.ogg"],
    loop: true,
});
```

```jsx
//initially I had this, which does not work, because of one reason. It is set to a variable! Which is how you get it to work outside of a function!
let audioGen = (src) => {
    const two = new Howl({
        src: ["./audio/two.ogg"],
        loop: true,
    });
};
```

This is the fix for above.

```jsx
let audioGen = (src) => {
    return new Howl({ // variable removed and replaced with return
        src: [src],
        loop: true,
    });
}
```

As you can see, `you replace the variable assignment of the original code with return`, so it can be called correctly. So if anything that is originally used to perform a function and is assigned to a variable, but you want to call what is assigned to that variable inside of a function in order to be repeatedly used, `replace it with return so it can be assigned to a variable from the outside or merely called!`

> ### ChatGPT note
In the example I provided earlier, the audioGen function creates a new Howl instance and returns it. This allows you to assign the returned value to a variable and use that variable to control the audio playback.

If a function does not return a value, or if you do not need the returned value, you do not need to use the return keyword. In some cases, you might use the return keyword to exit a function early if a certain condition is met.

> ## Make sure you're using variables for functions that expect variable input!

I made the following mistake after changing certain arguments to be non-variables when previous functions relied on variables as arguments! REMEMBER THIS OR STUFF WILL BREAK!

This function was designed to take a variable that was assigned as input. After making some design changes for less repeated code, the volume control no longer worked.I was then inputting code not assigned to a variable in the audio parameter, which made it non-functional.

```jsx
let volumeControl = (audio, volume) => {
    volume.addEventListener("input", function () {
        audio.volume(volume.value);
    });
};
```

I fixed the code by assigning what I was trying to use in the parameter to a variable so it would function the way it was before. The code below was made into a function so I could call it instead of repeating all the code, as mentioned previously. But when I used it in the volumeControl, I forgot that it was setup to work with a variable and not the code. You don't always need to use a variable for some cases, but this function expected a variable so it could call `.volume` and `.value` correctly. Remember the structure of functions you made before so you can fix it ahead of time!

```jsx
let audioGen = (src) => {
    return new Howl({
        src: [src],
        loop: true,
    });
};
```
Was set to a variable before I changed the code into a function.

To use it in `volumeControl` again, I had to assign the function output to a variable in order to use it in `volumeControl`, because of the way I built it to work previously.
```jsx
//? audio 1 start
let one = audioGen("./audio/one-thunder.ogg");
playPause(one, buttonOne, "🌩️");
volumeControl(one, volumeOne);
//?audio 1 end
```
> ## This below will not work!
`volumeControl(audioGen("./audio/one-thunder.ogg"), volumeOne);`
