(function() {
  "use strict";
  var today = new Date();
  var hours = today.getHours();
  var mins = today.getMinutes();
  dayNightCycle(hours);

  var timer = (document.querySelector(".timer-clockTimer").innerHTML = `<p>${hours}:${
    mins >= 10 ? mins : "0" + mins
  }</p>`);
})();

function dayclocksuntilFull(moon) {
  var nextFullMoon = Math.floor(27 / 8 + moon - 1); // the -1 is the 0 element thats counts and im not a math genieus so ?? sure its works i checked
  document.querySelector(".timer-countDown").innerHTML = `<p>${nextFullMoon}</p>`;
}

function dayNightCycle(hours) {
  var hours = hours;
  var galaxy = document.getElementById("l-galaxy");
  var galaxystars = document.getElementById("l-galaxy").childNodes;
  var lunarClock = document.getElementById("l-lunarClock");
  var clocksun = document.querySelector(".clock-sun");
  if (hours < 19) {
    galaxy.style.background = "#7ec0ee";
    lunarClock.style.display = "none";
  } else {
    galaxy.style.background = "#000";
    lunarClock.style.display = "block";
    clocksun.style.display = "none";
    drawSpace();
  }
}

// userIsYoungerThan21 ? serveGrapeJuice() : serveWine();
