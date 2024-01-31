type PersonOpt = {
    name:string,
    age:number,
    email?:string
}

const person1 :PersonOpt ={
    name:"Amresh",
    age:23,
    email:"amresh.terminal@gmail.com"
}


// email is not provided but works fine because email is optional.
const person3 :PersonOpt={
name:"Amresh",
age:23
}


console.log(person1)
console.log(person3)