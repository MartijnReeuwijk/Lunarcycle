/*
 * modified from http://www.voidware.com/moon_phase.htm
 */

"use strict";
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; //January is 0!
var year = today.getFullYear();
// console.log(day, month, year);
// getMoonPhase(year, month, day);
getMoonPhase(year, month, day);
// got this from https://gist.github.com/endel/dfe6bb2fbe679781948c
function getMoonPhase(year, month, day) {
  var b, jd, e;
  var c = 0;

  if (month < 3) {
    year--;
    month += 12;
  }

  ++month;

  c = 365.25 * year;

  e = 30.6 * month;

  jd = c + e + day - 694039.09; //jd is total days elapsed

  jd /= 29.5305882; //divide by the moon cycle

  b = parseInt(jd); //int(jd) -> b, take integer part of jd

  jd -= b; //subtract integer part to leave fractional part of original jd

  b = Math.round(jd * 8); //scale fraction from 0-8 and round

  if (b >= 8) {
    b = 0; //0 and 8 are the same so turn 8 into 0
  }

  // 0 => New Moon
  // 1 => Waxing Crescent Moon
  // 2 => Quarter Moon
  // 3 => Waxing Gibbous Moon
  // 4 => Full Moon
  // 5 => Waning Gibbous Moon
  // 6 => Last Quarter Moon
  // 7 => Waning Crescent Moon
  rotateMoons(b);
  daysUntilFull(b);
  return b;
}

// get that rotate
function rotateMoons(currentMoon) {
  var rotation = parseInt((360 / 7) * currentMoon);
  document.getElementById(
    "lunarClock"
  ).style.transform = `rotate(${rotation}deg)`;
}
