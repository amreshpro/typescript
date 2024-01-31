type User = {
    firstName:string,
    lastName:string,
    age:number,
    location:string
}


function getUserDetail(user:User){
    console.log(`Name:(${user.firstName} ${user.lastName}), age:(${user.age}), Location:(${user.location})`)
return user
}

console.log(getUserDetail({firstName:"Amresh",lastName:"Maurya",age:23,location:"India"}))