class Employee {
  name: string;
  type: string;
  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  static getValue(){
    console.log("hello from parent")
  }
  getName(){
    console.log("========")
    return this.name
  }
}
class Developer extends Employee {
  constructor(name: string, type: string) {
    super(name, type);
  }
  static getValue(){
    console.log("here child")
  }

  getName(){
    console.log(super.getName(), "0000")
    console.log(Employee.getValue())
    console.log("========+")
    return this.name
  }
}
class Tester extends Employee {
  constructor(name: string, type: string) {
    super(name, type);
  }

//   getName(){
//     return this.name
//   }
}


let a = new Developer("Mohit" , "Developer")
console.log(a.getName())

