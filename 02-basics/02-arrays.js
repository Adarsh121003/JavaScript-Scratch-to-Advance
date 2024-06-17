const marvel_heroes = ["drstrange", "thor", "tony_strak"];
const dc_heroes = ["superman", "aqaman", "badman", "flash"];
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3][1]);
const all_heros = marvel_heroes.concat(dc_heroes);
// console.log(all_heros);

const allNew_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(allNew_heroes);

const anotherArray = [1,2,3,[4,5,6],7,8,9,[10, 11,12,13],14,15];
const real_another_array = anotherArray.flat(Infinity);
// console.log(real_another_array);


console.log(Array.isArray("Adarsh Tiwari"));
console.log(Array.from("Adarsh Tiwari"));

let game1 = "Win";
let gmae2 = "loose";
let game3 = "Draw";
let avg_score = 300;
console.log(Array.of(game1,game3,gmae2,avg_score));
