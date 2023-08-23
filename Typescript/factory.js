var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, type) {
        this.name = name;
        this.type = type;
    }
    Employee.getValue = function () {
        console.log("hello from parent");
    };
    Employee.prototype.getName = function () {
        console.log("========");
        return this.name;
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, type) {
        return _super.call(this, name, type) || this;
    }
    Developer.getValue = function () {
        console.log("here child");
    };
    Developer.prototype.getName = function () {
        console.log(_super.prototype.getName.call(this), "0000");
        console.log(Employee.getValue());
        console.log("========+");
        return this.name;
    };
    return Developer;
}(Employee));
var Tester = /** @class */ (function (_super) {
    __extends(Tester, _super);
    function Tester(name, type) {
        return _super.call(this, name, type) || this;
    }
    return Tester;
}(Employee));
var a = new Developer("Mohit", "Developer");
console.log(a.getName());
