const startMinutes = 10;
let time = startMinutes * 60;

const countdownP = document.getElementById('countdown');
setInterval(updateCountdown, 1000)
function updateCountdown(){

    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownP.innerHTML = `${minutes}:${seconds}`;
    time--;
}