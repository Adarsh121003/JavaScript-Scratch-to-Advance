function sayMyName(){
    // console.log("Adarsh Tiwari");

}
// sayMyName = Reference
// sayMyName() Execution;

// Parameters
function addTwoNumber(number1, number2){
   console.log(number1 + number2);
}

function addTwoNumber(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
 }
// Arguments
// addTwoNumber(5, 10);

let result = addTwoNumber(5, 13);
// console.log("Result : ",result); // undefined

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please enter username")
    //     return;
    // }
    if(!username){
        console.log("Please enter username")
        return;
    }
    return `${username} Login Successfully`
}
// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1;

}
// console.log(calculateCartPrice(100,200, 300, 400));

function calculateCartPrice(val1, val2, ...num1){
    return num1;

}
// console.log(calculateCartPrice(100, 200 , 300 ,400, 500, 600))

const user = {
    username: "Adarsh Tiwari",
    age: 23
}

function handlObject(anyObject){
    console.log(`User Name is ${anyObject.username} and the users age is ${anyObject.age}`)

}
// handlObject(user);

handlObject({
    username: "Adarsh Tiwari",
    age: 23
})

const newArray = ["Apple ", "Banan", "Tea"];
function arrayTestes(getArray){
    return getArray[2];
}
console.log(arrayTestes(newArray));