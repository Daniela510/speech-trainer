const startMinutes = 2;
let time; 
let countActive = 0;
let topics = [];

const fetchTopics = async () => {
  const response = await fetch("topics.json");
  topics = await response.json();
};
fetchTopics();

const startBtn = document.getElementById("start");
const countdownP = document.getElementById("countdown");
const topicContainer = document.getElementById("topic");

const updateCountdown = () => {
  //this conditional stops the setInterval from affecting the countdown before pressing start
  if (countActive) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownP.innerHTML = `${minutes}:${seconds}`;
    if (time > 0) {
      time--;
    } else {
      console.log(`${startMinutes} minutes passed`);
      countActive = 0;
    }
  }
};

setInterval(updateCountdown, 1000);

const startCountdown = () => {
  time = startMinutes * 60;
  countActive = 1;
  let topic = topics[Math.floor(Math.random()*topics.length)];
  topicContainer.innerHTML = topic;
};

startBtn.addEventListener("click", startCountdown);
