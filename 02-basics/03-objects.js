// Singleton
// Object.create
// Object literals
const mysym = Symbol("Key1");

const JsUser = {
first_name: "Adarsh",
last_name: "Tiwari",
"full name": "Adarsh Tiwari",
[mysym]: "mykey1",
age: 22,
email: "adarsh@mail.com",
location: "faridabad",
isloggedin: "false",
latlogin: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(JsUser.first_name);
// console.log(JsUser["full name"]);
// console.log(JsUser.latlogin);
// console.log(JsUser[mysym]);
// console.log(typeof JsUser[mysym]);

JsUser.email = "adrsh@google.com";
// Object.freeze(JsUser);
JsUser.email = "adarsh@gmail.com";
// console.log(JsUser);

JsUser.welcome = function(){
    console.log("Welcomes You")
}
JsUser.greeting = function(){
    console.log(`My Full Name is, ${this["full name"]}`);
    
}

// console.log(JsUser.welcome);  output = [Function (anonymous)]
// console.log(JsUser.welcome());
console.log(JsUser.greeting());





