// string literal types
let color:"red" | "blue" | "green";

color="red";
console.log(color)
// color="yellow"// error yellow is not assignable to  type "red" | "blue" | "green"
// console.log(color)

// numeric literal types
let number : 1|2|3;
number = 1 //valid
number = 2 //valid
number = 3 //valid
// number = 12// error


// boolean literal types
let isTrue: true;
isTrue = true; //valid
// isTrue = false; //invalid
