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
}
function myfunc(obj) {
    obj.sayHello();
}
const newObj = new SuperClass();
console.log(newObj.sayHello());
const newSobj = new SubClass();
console.log(newSobj.sayHello());
myfunc(newObj);
myfunc(newSobj);
