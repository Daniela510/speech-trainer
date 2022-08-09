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
const animationContainer = document.getElementById("chart");

const addSpice = () => {
  if (spiceTracker < 6) {
    const wordConainer = document.getElementById(`w${spiceTracker}`);
    let spice = spices[Math.floor(Math.random() * spices.length)];
    wordConainer.innerHTML = spice;
    spiceTracker++;
    console.log("active interval, next is: ", spiceTracker);
  } 
  if(spiceTracker == 6) {
    console.log("interval over");
    clearInterval(spiceIntervalID);
    spiceIntervalID = null;
    spiceTracker = 1;
  }
};
const cleanSlate = () => {
  topicContainer.innerHTML = "Done! Wanna play again?";
  animationContainer.classList.add("animationOff");
  animationContainer.classList.remove("animationOn");
  startBtn.classList.remove("startOff");
  startBtn.classList.add("startActive")
  let wordConainer;
  for (let i = 1; i < 6; i++) {
    wordConainer = document.getElementById(`w${i}`);
    wordConainer.innerHTML = "-------------------";
  }
}

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
      cleanSlate();
    }
  }
};

setInterval(updateCountdown, 1000);

const startCountdown = () => {
  time = startMinutes * 60;
  countActive = 1;
  let topic = topics[Math.floor(Math.random() * topics.length)];
  topicContainer.innerHTML = topic;
  spiceTimeout = setTimeout(addSpice, 10000)
  spiceIntervalID = setInterval(addSpice, 20000);
  animationContainer.classList.remove("animationOff");
  animationContainer.classList.add("animationOn");
  startBtn.classList.remove("startActive");
  startBtn.classList.add("startOff");
};

// hi there 
// why are you here?
// this is not for your eyes.
// this is the disturbing underbelly
// could i have just sat down and coded for 15 minutes?
// yesss
// but the thought of somone ever finding this
// its funny
// i need a lil thrill in my life
// yknow..
// yknow???
//back at this again
// i just prefer codepen for the tiny things
