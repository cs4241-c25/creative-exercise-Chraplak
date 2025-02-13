const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let time = 0;
const canvasDim = canvas.clientWidth;
console.log(canvasDim);

function animate() {

    // line animation
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";

    let period = time % canvasDim;

    if (period < canvasDim / 2) {
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(2 * period, 2 * period);
        ctx.stroke();
    }
    else {
        ctx.beginPath();
        ctx.moveTo(2 * (period - canvasDim / 2), 2 * (period - canvasDim / 2));
        ctx.lineTo(canvasDim, canvasDim);
        ctx.stroke();
    }
    time += 1;

    // blue text
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";
    ctx.fillText("Hello", 20, 100);

    // green square
    ctx.strokeStyle = "green";
    ctx.fillStyle = "green";

    ctx.moveTo(100,50);
    ctx.beginPath();
    ctx.lineTo(150, 50);
    ctx.lineTo(150, 100);
    ctx.lineTo(100, 100);
    ctx.lineTo(100, 50);
    ctx.fill();

    // white pentagon
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";

    ctx.moveTo(200,200);
    ctx.beginPath();
    ctx.lineTo(200, 250);
    ctx.lineTo(250, 250);
    ctx.lineTo(250, 200);
    ctx.lineTo(225, 225);
    ctx.lineTo(200, 200);
    ctx.fill();

    // gradient triangle
    let grad = ctx.createLinearGradient(300,0,350,0);
    grad.addColorStop(0, "orange");
    grad.addColorStop(1, "darkblue");
    ctx.strokeStyle = grad;
    ctx.fillStyle = grad;

    ctx.moveTo(300,100);
    ctx.beginPath();
    ctx.lineTo(350, 100);
    ctx.lineTo(325, 125);
    ctx.lineTo(300, 100);
    ctx.fill();

    // rerun script
    setTimeout(animate, 10);
}

window.onload = function () {
    animate();
}