let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");

let intervalId = null;

function generateRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

startBtn.addEventListener("click", () => {

    if (intervalId !== null) return;   // already running asel tar punha start nako

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = generateRGB();
        console.log(intervalId);    
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;   // reset kara
    document.body.style.backgroundColor = "white";  // optional
});