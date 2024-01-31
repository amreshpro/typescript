// never keyword is used to indicate that a function will not return anything.

// never
// [x] A function that always throws an error
function throwError(msg:string):never{
    throw new Error(msg);
}
// [x] A function that has an infinite loop
function infiniteLoop():never{
    while(true){}
}
// [x] A variable that can never have a value
let x : never;
function neverReturn():never{
    while(true){}
}

x = neverReturn();
console.log(x)