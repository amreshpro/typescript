class MyClass {
    private _myProperty: number = 10;
    get myProperty(): number {
        return this._myProperty;
    }
    set myProperty(value: number) {
        this._myProperty = value;
    }
}

const obj = new MyClass();
console.log(`Current Value: ${obj.myProperty}`);//10
obj.myProperty = 45;
console.log(`Current Value: ${obj.myProperty}`);//45
