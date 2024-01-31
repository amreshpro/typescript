const person: { firstName: string; lastName: string; age: number } = {
    firstName: "Amresh",
    lastName: "Maurya",
    age: 23,
};

// type alias
type Person = {
    firstName: string;
    lastName: string;
    age: number;
};

const person2: Person = {
    firstName: "Amresh",
    lastName: "Maurya",
    age: 23,
};

// Using Object as function return value
function getUser(): {
    firstName: string;
    lastName: string;
    age: number;
} {
    return {
        firstName: "Ojas",
        lastName: "Saini",
        age: 23,
    };
}


function getUser2():Person{
    return{
        firstName:"Arun",
        lastName:"Jangra",
        age:22
    }
}



