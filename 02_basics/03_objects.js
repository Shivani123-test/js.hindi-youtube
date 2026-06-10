//Singleton-- created by constructor //Object.create
//object literals

const jsUser = {
    name: "Shivani",
    age: 20,
    location: "mumbai",
    email: "shiv@gmail.com",
    isLoggedin: true,
    lastLoginDays: ["Mondy", "Saturday"]

}

//console.log(jsUser.email); //this is a way but not the prefered one
//console.log(jsUser["email"]); //best and the prefferd one

//jsUser.email = "shiv@abc.com"
//Object.freeze(jsUser)
//jsUser.email="sss@ss.com"

//console.log(jsUser);
jsUser.greeting = function(){
    console.log("hey its me");
}
console.log(jsUser.greeting());
