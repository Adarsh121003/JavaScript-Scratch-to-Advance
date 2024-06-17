let myDate = new Date();
// console.log(myDate.toString());
// console.log(typeof(myDate));
// console.log(myDate.toJSON());

let myCreatedDate = new Date(2023, 5, 12);
// console.log(myCreatedDate.toDateString());

let myTimeStamp =  Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getTime());
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
newDate.toLocaleString('default',{
    weekday: 'long',
    timeStyle: "full",
    timeZone: "IST"
})