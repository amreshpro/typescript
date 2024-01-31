
type User = {
    name:string,
    age?:number,
    readonly location:string
}

let user :User = {
    name:"Amresh",
    location:"India"
}

// error , we can't update location because it is readonly
// user.location = 'China'

console.log(`Name : ${user.name}, Location : ${user.location}`);