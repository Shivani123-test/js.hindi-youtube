const myArray = [1, 2, 3, 4, 5]
//console.log(myArray[0]);
const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr2[4]);

//Array methods
myArray.push(6) //add value directly to array
//console.log(myArray);

myArray.pop()  //removes the last element
//console.log(myArray);

//console.log(myArray.includes(5));
//console.log(myArray.length);
//console.log(myArray.indexOf(4));
  const newArr = myArray.join()
  //console.log(newArr);

  //slice, splice
  console.log("A", myArray);
  const myarr2 = myArray.slice(1, 3)
  console.log(myarr2);
  console.log(myArray);

  const myarr3 = myArray.splice(1,3)
  console.log(myarr3);
  console.log(myArray);


