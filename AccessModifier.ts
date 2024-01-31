// control visiblity
// 3
//  public , private , protected
// default is public
class Human {
    public first:string;
    private last:string;
    protected age:number;
    constructor(first:string,last:string,age:number){
        this.first = first;
        this.last = last;
        this.age = age;
            }
            
}

const p1 = new Human("Amresh","Maurya",23);
// console.log(p1.first)
// console.log(p1.last);// error private is only used within the class .It  not accessible from outside the class.

// console.log(p1.age) // eror protected is only accessible within its class or subclass .It is not accessible from outside the classs.


class Child extends Human{
constructor(){
    super("Ojas","Saini",23)
}
  
}

const c1 = new Child();
console.log(c1.first) // "Ojas"
// console.log(c1.last); //error private property
// console.log(c1.age); //error protected property

