 // original interface
 interface Car{
brand:string;
start():void;
 }
 
//  declaration merging (intrface extension)
interface Car{
    model:string;
    stop():void;
}

// usage of the extended interface
const myCar2 : Car = {
    brand:"Toyota",
    model:"Camry",
    start(){
        console.log('car started')
    },
    stop(){
        console.log('car stopped')
    }
}


