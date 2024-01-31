class People{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age= age;
    }
    get getPeopleDetails(){
return {
    name:this.name,
    age:this.age
}
    }

    printDetails():void{
        console.log(`Name: ${this.name} , Age: ${this.age}`)
    }

}

const people = new People("Amresh",23)
people.printDetails()