"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
})(WeekDays || (WeekDays = {}));
var RainbowColor;
(function (RainbowColor) {
    RainbowColor[RainbowColor["Red"] = 0] = "Red";
    RainbowColor[RainbowColor["Orange"] = 1] = "Orange";
    RainbowColor[RainbowColor["Yellow"] = 2] = "Yellow";
    RainbowColor[RainbowColor["Green"] = 3] = "Green";
    RainbowColor[RainbowColor["Blue"] = 4] = "Blue";
    RainbowColor[RainbowColor["Indigo"] = 5] = "Indigo";
    RainbowColor[RainbowColor["Violet"] = 6] = "Violet";
})(RainbowColor || (RainbowColor = {}));
var crud;
(function (crud) {
    crud[crud["save"] = 0] = "save";
    crud[crud["print"] = 1] = "print";
    crud[crud["open"] = 2] = "open";
    crud[crud["view"] = 3] = "view";
    crud[crud["close"] = 4] = "close";
})(crud || (crud = {}));
var cardinalDirection;
(function (cardinalDirection) {
    cardinalDirection[cardinalDirection["North"] = 0] = "North";
    cardinalDirection[cardinalDirection["West"] = 1] = "West";
    cardinalDirection[cardinalDirection["South"] = 2] = "South";
    cardinalDirection[cardinalDirection["east"] = 3] = "east";
})(cardinalDirection || (cardinalDirection = {}));
const newWeek = WeekDays.Tuesday;
// console.log("🚀 ~ WeekDays", WeekDays)
// console.log("🚀 ~ newWeek", newWeek)
// console.log("🚀 ~ raibowColor", RainbowColor)
// console.log("🚀 ~ crud", crud)
console.log("🚀 ~ cardinalDirection", cardinalDirection);
