let players: string[] = ["Dhoni", "Ponting", "Tendulkar"];
players.push("Rohit");
// players.push(123);
const p = players.map((player, index) => index + 1 + ". " + player);
console.log(players, p);
