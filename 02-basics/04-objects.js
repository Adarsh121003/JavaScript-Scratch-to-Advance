// const tinderuser = new Object();
// const tinderuser1 = {};
// console.log(tinderuser);
// console.log(tinderuser1);

const newuser = {}
newuser.id = 1205;
newuser.name = "Adarsh Tiwari";
newuser.email = "adarsh@mail.com";
newuser.isloggedin = false;
// console.log(newuser);
console.log(Object.keys(newuser));
console.log(Object.values(newuser));
console.log(Object.entries(newuser));
console.log(newuser.hasOwnProperty('isloggedout'));




const tryuser = {
    userdetail: "detail",
    userdetail:{
        username: {
            firstName: "Adarsh",
            lastName: "Tiwari",
            
        },
        userage:{
            age:23
        }

    }
}

// console.log(tryuser.userdetail);
// console.log(tryuser.userdetail.username.firstName);
const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "c",
    4: "d",
}
const obj4 = {
    5: "e",
    6: "f",
}

// const obj3 = {obj1,obj2};
// console.log(obj3);
// const obj3 = Object.assign({}, obj1,obj2,obj4);
// const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

const users = [{
    id: 1,
    email: "adarsh@mail.com",
},
{
    id: 2,
    email: "sau@mail.com",
},
{
    id: 3,
    email: "gau@mail.com",
}
]

// console.log(users[0].email);
