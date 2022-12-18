"use strict";
var players = ["Dhoni", "Ponting", "Tendulkar"];
players.push("Rohit");
// players.push(123);
var p = players.map(function (player, index) { return index + 1 + ". " + player; });
console.log(players, p);
