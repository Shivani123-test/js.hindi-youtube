// const tinderUser = new Object()   ---Singleton

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "shiva"
tinderUser.isLoggedin = false

//console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname:{
            firstname: "shivani",
            lastname: "Sahu"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//Destructuring

const course = {
    coursename : "js in hini",
    price: 444,
    courseInstructor: "Hitesh"
}
const {coursename, price} =course
console.log(price);

