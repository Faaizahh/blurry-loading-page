const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// we initialise the oading text to 0
let load = 0;

// we want the function to run at an interval of 30milliseconds
let int = setInterval(blurring, 30);
function blurring() {
    load++;

    // we want the load to increase up to 100 bas
    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;

    // we want the loadText to  start fully opaque and then blur out so we use the scal function below
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    // we want the max blur to be 30px
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// in_min:load,takes the minimum value of the int number which is 0
// in-max:takes max int which is 100
// out-min:takes the min opacity which is 0
// out-max:takes the max opacity which is 1
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
