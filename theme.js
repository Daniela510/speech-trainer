const gradient = document.getElementById("container");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const header = document.getElementById("header");
const start = document.getElementById("start");
const chart = document.getElementById("chart");
const themeBtn = document.getElementById("themeBtn");
let theme = "day";

const switchTheme = () => {
if (theme == "day"){
    gradient.classList.remove("day");
    gradient.classList.add("night");
    main.classList.remove("main-day");
    main.classList.add("main-night");
    footer.classList.remove("footer-day");
    footer.classList.add("footer-night");
    header.classList.remove("ul-day");
    header.classList.add("ul-night");
    start.classList.remove("light");
    start.classList.add("dark");
    chart.classList.remove("chart-day");
    chart.classList.add("chart-night");
    themeBtn.innerHTML = "☀";
    theme = "night";
    console.log("theme switched to ", theme);
} else {
if (theme == "night"){
    gradient.classList.remove("night");
    gradient.classList.add("day");
    main.classList.remove("main-night");
    main.classList.add("main-day");
    footer.classList.remove("footer-night");
    footer.classList.add("footer-day");
    header.classList.remove("ul-night");
    header.classList.add("ul-day");
    start.classList.remove("dark");
    start.classList.add("light");
    chart.classList.remove("chart-night");
    chart.classList.add("chart-day");
    themeBtn.innerHTML = "☾";
    theme = "day";
    console.log("theme switched to ", theme);
}}
}