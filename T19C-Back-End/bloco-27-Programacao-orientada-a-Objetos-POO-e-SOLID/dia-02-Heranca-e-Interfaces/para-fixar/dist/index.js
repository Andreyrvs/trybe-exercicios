"use strict";
class SuperClass {
    constructor(isSuper = true) {
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log('Olá mundo');
        return 'Olá mundo';
    }
}
class SubClass extends SuperClass {
    constructor(isSuper = true) {
        super(isSuper = false);
        this.isSuper = isSuper;
    }
}
function myfunc(obj) {
    console.log(obj.isSuper ? 'Super!' : 'Sub!');
}
const newSuperClass = new SuperClass();
// console.log(newSuperClass.sayHello());
const newSubClass = new SubClass();
// console.log(newSubClass.isSuper ? 'Super!' : 'Sub!');
// console.log(newSubClass.sayHello());
// myfunc(newSuperClass)
// myfunc(newSubClass)
