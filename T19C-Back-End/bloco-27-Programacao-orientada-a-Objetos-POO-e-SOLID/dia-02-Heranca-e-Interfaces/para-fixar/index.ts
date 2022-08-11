class SuperClass {
  constructor(public isSuper: boolean = true) { }

  sayHello(): string {
    console.log('Olá mundo');
    
    return 'Olá mundo'
  }
}

class SubClass extends SuperClass {
  constructor(public isSuper: boolean = true) {
    super()
  }
}

function myfunc(obj: SuperClass) {
  obj.sayHello()
}

const newObj = new SuperClass()
console.log(newObj.sayHello());
const newSobj = new SubClass()
console.log(newSobj.sayHello());

myfunc(newObj)
myfunc(newSobj)