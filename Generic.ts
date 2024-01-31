
function PrintNumber(item: number, defaultItem: number): [number, number] {
    return [item, defaultItem]
}
function PrintString(item: string, defaultItem: string): [string, string] {
    return [item, defaultItem]
}

function PrintBoolean(item: boolean, defaultItem: boolean): [boolean, boolean] {
    return [item, defaultItem]
}
const num = PrintNumber(12, 45)
const str = PrintString("hello", "Bro")
const bool = PrintBoolean(true, false)
console.log(num, str, bool)



function printAny(item: any, defaultItem: any): [any, any] {
    return [item, defaultItem]
}
console.log(printAny("Amresh", 99))


function GiveGeneric<Type>(item: Type, defaultItem: Type): [Type, Type] {
    return [item, defaultItem]
}

console.log(GiveGeneric<string | number>(23,"helo"))
console.log(GiveGeneric<string>("Hey","helo"))
console.log(GiveGeneric<number>(37,54))
console.log(GiveGeneric(12,56))

