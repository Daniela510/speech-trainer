const startMinutes = 2;
let time; 
let countActive = 0;
let topics = [];
let spices = [];
let spiceIntervalID;
let spiceTracker = 1;

const fetchTopics = async () => {
  const response = await fetch("topics.json");
  topics = await response.json();
};
fetchTopics();
const fetchSpices = async () => {
  const response = await fetch("spice.json");
  spices = await response.json();
};
fetchSpices();

const startBtn = document.getElementById("start");
const countdownP = document.getElementById("countdown");
const topicContainer = document.getElementById("topic");

const addSpice = () => {
  if (spiceTracker < 5) {
    const wordConainer = document.getElementById(`w${spiceTracker}`);
    let spice = spices[Math.floor(Math.random()*spices.length)];
    wordConainer.innerHTML ="- " + spice;
    spiceTracker++;
    console.log('active interval, next is: ', spiceTracker);
  } else {
    console.log('interval over');
    clearInterval(spiceIntervalID);
    spiceIntervalID = null;
    spiceTracker = 1;
  }
  };

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
  spiceIntervalID = setInterval(addSpice, 25000);
};

startBtn.addEventListener("click", startCountdown);
