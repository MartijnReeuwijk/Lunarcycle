(function() {
  "use strict";
  var today = new Date();
  var hours = today.getHours();
  var mins = today.getMinutes();
  dayNightCycle(hours);

  var timer = (document.querySelector(".clockTimer").innerHTML = `<p>${hours}:${
    mins >= 10 ? mins : "0" + mins
  }</p>`);
})();

function daysUntilFull(moon) {
  var nextFullMoon = Math.floor(27 / 8 + moon - 1); // the -1 is the 0 element thats counts and im not a math genieus so ?? sure its works i checked
  document.querySelector(".countDown").innerHTML = `<p>${nextFullMoon}</p>`;
}

function dayNightCycle(hours) {
  var hours = hours;
  var galaxy = document.getElementById("galaxy");
  var stars = document.getElementById("galaxy").childNodes;
  var lunarClock = document.getElementById("lunarClock");
  var sun = document.querySelector(".sun");
  if (hours < 19) {
    galaxy.style.background = "#7ec0ee";
    lunarClock.style.display = "none";
  } else {
    galaxy.style.background = "#000";
    lunarClock.style.display = "block";
    sun.style.display = "none";
    drawSpace();
  }
}

// userIsYoungerThan21 ? serveGrapeJuice() : serveWine();
