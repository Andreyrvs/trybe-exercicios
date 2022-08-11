class SuperClass {
  constructor(public isSuper: boolean = true) { }

  sayHello(): string {
    console.log('Olá mundo');
    
    return 'Olá mundo'
  }
}

class SubClass extends SuperClass {
  constructor(public isSuper: boolean = true) {
    super(isSuper = false)
  }
}

function myfunc(obj: SuperClass) {
  obj.sayHello()
}

const newSuperClass = new SuperClass()
console.log(newSuperClass.isSuper ? 'Super!' : 'Sub!');

// console.log(newSuperClass.sayHello());
const newSubClass = new SubClass()
console.log(newSubClass.isSuper ? 'Super!' : 'Sub!');
// console.log(newSubClass.sayHello());

// myfunc(newSuperClass)
// myfunc(newSubClass)