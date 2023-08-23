// interface Employee {
//   type: string;
//   name: string;
//   getName(): void;
// }

// class Developer implements Employee {
//   TYPE_DEVELOPER: string = "DEVELOPER";
//   type: string;
//   name: string;
//   private _skills : string;
//   constructor(name: string) {
//     (this.name = name), (this.type = this.TYPE_DEVELOPER);
//   }
//   getName() {
//     return this.name;
//   }
// }

// class Tester implements Employee {
//   TYPE_TESTER: string = "TESTER";
//   type: string;
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//     this.type = this.TYPE_TESTER;
//   }
//   getName() {
//     return this.name;
//   }
// }

// class EmployeeFactory {
//   create(type: string, name: string) {
//     switch (type) {
//       case "Dev":
//         return new Developer(name);
//         break;
//       case "Test":
//         return new Tester(name);
//         break;
//     }
//   }
// }

// let factoryObj = new EmployeeFactory();
// let employee = [];
// let a = factoryObj.create("Dev", "Ruby");
// let b= factoryObj.create("Test", "Mohit")
// console.log(a?.getName(), b?.getName())
// console.log(a?.name, b?.name);
