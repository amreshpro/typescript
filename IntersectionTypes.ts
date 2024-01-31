
type Person = {
    name:string,
    age:number
}

type Employee = {
    id:number,
    title:string
}


type PersonAndEmployee = Person & Employee

const emp :PersonAndEmployee = {
    name:"Amresh",
    age:23,
    id:2345,
    title:"Web Dev"
}

console.log(emp)