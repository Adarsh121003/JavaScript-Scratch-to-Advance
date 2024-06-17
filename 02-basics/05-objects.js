// Destructuring of object
const course = {
    name: "JavaScript",
    author: "Adarsh",
    rating: 4.5,
    students: 100000,
    price: 100,
    isFree: true,
}

console.log(course.rating);
const {author: Instructor} = course;
console.log(Instructor);