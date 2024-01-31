// anyValue - disable all type checking for that variable and its properties.
// ant-type warning

let color : any = "crimson"
console.log(color)
color = 20;
console.log(color)
color=true;
// color(); //error color is not a function
// color.toUpperCase(); //error
console.log(color)


// parameter implicitly has "any" type
function add(x,y){
    return x+y
}

// inference return type "number"
function add2(x:number,y:number){
    return x+y;
}

// annotating return value, x,y are "any" and return value=>number
function add3(x,y):number{
    return x+y
}

// void in typescript
function printName(name:string):void{
console.log(`Hello! ${name}`)
}
printName("Amresh")

// no return statement - default return infern to void
function printName2(name:string){
console.log(`Hello! ${name}`)

}

// return type infern to string becuase name is string type
function printName3(name:string){
console.log(`Hello! ${name}`)
return name
}