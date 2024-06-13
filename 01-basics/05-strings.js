const name = "Adarsh";
const repoCount = 50;
// console.log(name + repoCount + "Tiwari");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //baticks`` and string interpolation
const gameName = new String("Adarsh Tiwari");
console.log(gameName);
// string is object it has key value pair 0 A 1 d these tyepe they have length property
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.__proto__);
// console.log(gameName.charAt(11));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf("T"));

const url = "       https://adarshtiwari%20porfolio.com         ";

console.log(url.replace("%20", "-"),`\n`,url.trim());


