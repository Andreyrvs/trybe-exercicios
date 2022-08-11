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
        super();
        this.isSuper = isSuper;
    }
    sayHello2() {
        return this.sayHello();
    }
}
function myfunc(obj) {
    obj.sayHello2();
}
// const newObj = new SuperClass()
// console.log(newObj.sayHello());
const newSobj = new SubClass();
console.log(newSobj.sayHello2());
// myfunc(newObj)
myfunc(newSobj);
